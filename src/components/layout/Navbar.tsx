import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-tech-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-white font-display text-2xl tracking-tighter">
                    V CLIP<span className="text-tech-blue">.</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide">
                        {t('nav.home')}
                    </a>
                    <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide">
                        {t('nav.about')}
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide">
                        {t('nav.contact')}
                    </a>
                    <button className="bg-white text-tech-dark hover:bg-tech-blue hover:text-black transition-all px-5 py-2 text-sm font-bold uppercase tracking-wide">
                        {t('nav.cta_header')}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
