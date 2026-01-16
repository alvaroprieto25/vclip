const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
                <p>&copy; {new Date().getFullYear()} V CLIP. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="https://www.instagram.com/vclip2.0?igsh=ZzY5NnFxaTFyOWVn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
