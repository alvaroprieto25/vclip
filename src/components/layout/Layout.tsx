import type { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-tech-dark text-white font-body overflow-x-hidden selection:bg-tech-blue selection:text-black">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <footer className="footer-placeholder py-10 text-center text-gray-500 text-sm">
                {/* Footer will go here */}
            </footer>
        </div>
    );
};

export default Layout;
