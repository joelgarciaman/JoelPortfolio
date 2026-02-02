import React, { useRef, useEffect } from 'react';
import { useTetris } from './useTetris';
import { BLOCK_SIZE, COLS, ROWS } from './constants';
import { Play, Pause, RotateCcw, ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';

const Tetris: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const {
        grid,
        activePiece,
        nextPiece,
        score,
        gameOver,
        isPaused,
        startGame,
        togglePause,
        move,
        drop,
        rotate
    } = useTetris();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.fillStyle = '#0f172a'; // Slate 900
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw grid lines (subtle)
        ctx.strokeStyle = '#1e293b'; // Slate 800
        ctx.lineWidth = 1;
        for (let x = 0; x <= COLS; x++) {
            ctx.beginPath();
            ctx.moveTo(x * BLOCK_SIZE, 0);
            ctx.lineTo(x * BLOCK_SIZE, ROWS * BLOCK_SIZE);
            ctx.stroke();
        }
        for (let y = 0; y <= ROWS; y++) {
            ctx.beginPath();
            ctx.moveTo(0, y * BLOCK_SIZE);
            ctx.lineTo(COLS * BLOCK_SIZE, y * BLOCK_SIZE);
            ctx.stroke();
        }

        // Draw merged pieces
        grid.forEach((row, y) => {
            row.forEach((color, x) => {
                if (color !== '') {
                    drawBlock(ctx, x, y, color);
                }
            });
        });

        // Draw active piece
        if (activePiece) {
            activePiece.tetromino.shape.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        drawBlock(ctx, activePiece.pos.x + x, activePiece.pos.y + y, activePiece.tetromino.color);
                    }
                });
            });
        }

        if (gameOver) {
            ctx.fillStyle = 'rgba(0,0,0,0.75)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.font = 'bold 30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('FIN DEL JUEGO', canvas.width / 2, canvas.height / 2);
        }

        if (isPaused && !gameOver) {
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.font = 'bold 30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('PAUSA', canvas.width / 2, canvas.height / 2);
        }
    }, [grid, activePiece, gameOver, isPaused]);

    const drawBlock = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string) => {
        // Main block color (Solid)
        ctx.fillStyle = color;
        ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

        // Block border (Subtle)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;
        ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

        // Inner detail (Small corner accent to give it some depth without gradients)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(x * BLOCK_SIZE + 2, y * BLOCK_SIZE + 2, 4, 4);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4 font-sans">
            <div className="relative group p-1 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-8 bg-slate-900/40 p-8 rounded-[1.4rem]">

                    {/* Game Board */}
                    <div className="relative">
                        <canvas
                            ref={canvasRef}
                            width={COLS * BLOCK_SIZE}
                            height={ROWS * BLOCK_SIZE}
                            className="rounded-lg border-2 border-slate-700 shadow-inner bg-slate-900"
                        />
                    </div>

                    {/* Stats & Controls Panel */}
                    <div className="flex flex-col justify-between w-48">
                        <div className="space-y-6">
                            {/* Score Card */}
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5">
                                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Puntuación</h3>
                                <p className="text-3xl font-black text-white">{score}</p>
                            </div>

                            {/* Next Piece Card */}
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 h-32 flex flex-col justify-center items-center">
                                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 self-start">Siguiente</h3>
                                {nextPiece ? (
                                    <div className="relative scale-75">
                                        {nextPiece.tetromino.shape.map((row, y) => (
                                            <div key={y} className="flex">
                                                {row.map((val, x) => (
                                                    <div
                                                        key={x}
                                                        className="w-6 h-6 border-[0.5px] border-white/10"
                                                        style={{
                                                            backgroundColor: val !== 0 ? nextPiece.tetromino.color : 'transparent'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 bg-slate-700/30 rounded-lg animate-pulse" />
                                )}
                            </div>
                        </div>

                        {/* Controls Information */}
                        <div className="mt-8 space-y-4">
                            <button
                                onClick={activePiece ? togglePause : startGame}
                                className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 font-bold ${!activePiece
                                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                    }`}
                            >
                                {!activePiece ? (
                                    <><Play size={20} /> Empezar</>
                                ) : isPaused ? (
                                    <><Play size={20} /> Reanudar</>
                                ) : (
                                    <><Pause size={20} /> Pausar</>
                                )}
                            </button>

                            {activePiece && (
                                <button
                                    onClick={startGame}
                                    className="w-full py-3 rounded-2xl flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all duration-300 text-sm font-semibold"
                                >
                                    <RotateCcw size={16} /> Reiniciar
                                </button>
                            )}
                        </div>

                        {/* Keyboard Help */}
                        <div className="mt-auto pt-6 text-[10px] text-slate-500 font-medium">
                            <p>← → Mover</p>
                            <p>↑ Rotar</p>
                            <p>↓ Bajar rápido</p>
                            <p>P Pausa</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Controls (Visible on smaller screens) */}
            <div className="mt-8 flex md:hidden grid grid-cols-3 gap-2">
                <button onTouchStart={() => move(-1)} className="p-4 bg-white/5 rounded-xl border border-white/10"><ArrowLeft /></button>
                <button onTouchStart={() => rotate()} className="p-4 bg-white/5 rounded-xl border border-white/10 col-span-1 items-center justify-center flex"><RotateCcw /></button>
                <button onTouchStart={() => move(1)} className="p-4 bg-white/5 rounded-xl border border-white/10"><ArrowRight /></button>
                <div />
                <button onTouchStart={() => drop()} className="p-4 bg-white/5 rounded-xl border border-white/10"><ArrowDown /></button>
                <div />
            </div>
        </div>
    );
};

export default Tetris;
