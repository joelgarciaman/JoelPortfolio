import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NeuronBackground from '../components/NeuronBackground';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen selection:bg-indigo-500/30 selection:text-white">
            <NeuronBackground />
            <Header />

            {/* Main content area */}
            <main className="flex-grow flex flex-col pt-16 relative z-10">
                {/* Noise texture overlay for a premium look */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('/noise.png')]"></div>

                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;


