import { useState, useEffect, useCallback, useRef } from 'react';
import { COLS, ROWS, TETROMINOS } from './constants';

type Piece = {
    pos: { x: number; y: number };
    tetromino: typeof TETROMINOS[keyof typeof TETROMINOS];
    collided: boolean;
};

export const useTetris = () => {
    const [grid, setGrid] = useState<string[][]>(
        Array.from({ length: ROWS }, () => Array(COLS).fill(''))
    );
    const [activePiece, setActivePiece] = useState<Piece | null>(null);
    const [nextPiece, setNextPiece] = useState<Piece | null>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const gameLoopRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);
    const dropCounterRef = useRef<number>(0);
    const dropInterval = 1000;

    const getRandomPiece = useCallback((): Piece => {
        const keys = Object.keys(TETROMINOS) as (keyof typeof TETROMINOS)[];
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const tetromino = TETROMINOS[randomKey];
        return {
            pos: { x: Math.floor(COLS / 2) - Math.floor(tetromino.shape[0].length / 2), y: 0 },
            tetromino,
            collided: false,
        };
    }, []);

    const checkCollision = useCallback((piece: Piece, moveX: number, moveY: number, newShape?: number[][]) => {
        const shape = newShape || piece.tetromino.shape;
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[y].length; x++) {
                if (shape[y][x] !== 0) {
                    const nextX = piece.pos.x + x + moveX;
                    const nextY = piece.pos.y + y + moveY;

                    if (
                        nextX < 0 ||
                        nextX >= COLS ||
                        nextY >= ROWS ||
                        (nextY >= 0 && grid[nextY][nextX] !== '')
                    ) {
                        return true;
                    }
                }
            }
        }
        return false;
    }, [grid]);

    const mergePiece = useCallback((piece: Piece) => {
        const newGrid = grid.map(row => [...row]);
        piece.tetromino.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    const gridY = piece.pos.y + y;
                    const gridX = piece.pos.x + x;
                    if (gridY >= 0) {
                        newGrid[gridY][gridX] = piece.tetromino.color;
                    }
                }
            });
        });

        // Clear lines
        let linesCleared = 0;
        const filteredGrid = newGrid.filter(row => {
            const isFull = row.every(cell => cell !== '');
            if (isFull) linesCleared++;
            return !isFull;
        });

        while (filteredGrid.length < ROWS) {
            filteredGrid.unshift(Array(COLS).fill(''));
        }

        if (linesCleared > 0) {
            setScore(prev => prev + linesCleared * 100);
        }

        setGrid(filteredGrid);
    }, [grid]);

    const drop = useCallback(() => {
        if (!activePiece || gameOver || isPaused) return;

        if (!checkCollision(activePiece, 0, 1)) {
            setActivePiece(prev => prev ? { ...prev, pos: { ...prev.pos, y: prev.pos.y + 1 } } : null);
        } else {
            if (activePiece.pos.y <= 0) {
                setGameOver(true);
                return;
            }
            mergePiece(activePiece);
            setActivePiece(nextPiece);
            setNextPiece(getRandomPiece());
        }
    }, [activePiece, nextPiece, gameOver, isPaused, checkCollision, mergePiece, getRandomPiece]);

    const move = useCallback((dir: number) => {
        if (!activePiece || gameOver || isPaused) return;
        if (!checkCollision(activePiece, dir, 0)) {
            setActivePiece(prev => prev ? { ...prev, pos: { ...prev.pos, x: prev.pos.x + dir } } : null);
        }
    }, [activePiece, gameOver, isPaused, checkCollision]);

    const rotate = useCallback(() => {
        if (!activePiece || gameOver || isPaused) return;
        const rotatedShape = activePiece.tetromino.shape[0].map((_, index) =>
            activePiece.tetromino.shape.map(col => col[index]).reverse()
        );

        if (!checkCollision(activePiece, 0, 0, rotatedShape)) {
            setActivePiece(prev => prev ? {
                ...prev,
                tetromino: { ...prev.tetromino, shape: rotatedShape }
            } : null);
        }
    }, [activePiece, gameOver, isPaused, checkCollision]);

    const startGame = () => {
        setGrid(Array.from({ length: ROWS }, () => Array(COLS).fill('')));
        setScore(0);
        setGameOver(false);
        setIsPaused(false);
        const firstPiece = getRandomPiece();
        const secondPiece = getRandomPiece();
        setActivePiece(firstPiece);
        setNextPiece(secondPiece);
    };

    const togglePause = () => setIsPaused(prev => !prev);

    useEffect(() => {
        const update = (time: number) => {
            const deltaTime = time - lastTimeRef.current;
            lastTimeRef.current = time;

            if (!isPaused && !gameOver && activePiece) {
                dropCounterRef.current += deltaTime;
                if (dropCounterRef.current > dropInterval) {
                    drop();
                    dropCounterRef.current = 0;
                }
            }
            gameLoopRef.current = requestAnimationFrame(update);
        };

        gameLoopRef.current = requestAnimationFrame(update);
        return () => {
            if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
        };
    }, [activePiece, drop, gameOver, isPaused]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (gameOver) return;
            switch (e.key) {
                case 'ArrowLeft': move(-1); break;
                case 'ArrowRight': move(1); break;
                case 'ArrowDown': drop(); break;
                case 'ArrowUp': rotate(); break;
                case 'p': togglePause(); break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [move, drop, rotate, gameOver, isPaused]);

    return {
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
    };
};
