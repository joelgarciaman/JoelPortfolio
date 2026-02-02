import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
            <Header />

            {/* Main content area - pt-16 accounts for fixed header height */}
            <main className="flex-grow flex flex-col pt-16 relative z-0">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
