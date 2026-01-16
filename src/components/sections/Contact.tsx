import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 bg-black relative border-t border-white/5">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <span className="text-tech-blue font-bold tracking-widest uppercase text-xs mb-2 block">{t('contact.label')}</span>
                    <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-6">{t('contact.title')}</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        {t('contact.subtitle')}
                    </p>

                    <div className="space-y-6 mb-8">
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">{t('contact.email_label')}</span>
                            <a href="mailto:opticavisual2020@yahoo.com" className="text-xl text-white hover:text-tech-blue transition-colors">opticavisual2020@yahoo.com</a>
                        </div>
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">{t('contact.phone_label')}</span>
                            <a href="tel:+34965157240" className="text-xl text-white hover:text-tech-blue transition-colors">+34 965 15 72 40</a>
                        </div>
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">{t('contact.whatsapp_label')}</span>
                            <a
                                aria-disabled="true"
                                className="inline-flex bg-green-600/20 text-green-500 border border-green-600/50 px-4 py-2 uppercase font-bold text-sm opacity-50 cursor-not-allowed pointer-events-none rounded-sm items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.997.592 2.023.869 3.234.869h.001c3.182 0 5.768-2.585 5.769-5.766.001-3.182-2.585-5.769-5.719-5.766zm-9.031 5.766c0-4.97 4.04-9.009 9.01-9.009 5.011 0 9.009 4.039 9.009 9.009 0 4.97-4.04 9.009-9.009 9.009-1.685 0-3.32-.48-5.32-1.3l-5.7 1.499 1.57-5.599c-.89-1.92-1.56-3.79-1.56-5.599zm14.193 2.999c-.23-.119-1.39-.68-1.61-.76s-.37-.12-.52.12c-.16.241-.59.76-.73.92-.13.16-.27.18-.5.06-.23-.12-.99-.369-1.89-1.169-.7-.619-1.18-1.39-1.31-1.63-.14-.24-.01-.369.1-.48.1-.1.23-.241.35-.37s.16-.209.24-.35c.08-.139.04-.26-.02-.369s-.53-1.27-.72-1.74c-.19-.46-.39-.4-.53-.409h-.46c-.15 0-.4.06-.61.279-.219.23-.83.8-1.29 1.16-.47.36-.61.64-.61.96 0 .32.41 1.63 2.28 3.32 1.34 1.21 2.38 1.59 3.19 1.76.81.16 1.43.08 1.83.02.45-.06 1.39-.569 1.59-1.12.2-.55.2-.1.02.04-.15-.46-.39-.23-.119z" />
                                </svg>
                                {t('contact.whatsapp_btn')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-tech-glare p-8 border border-white/5">
                    <h3 className="text-xl font-bold uppercase mb-6">{t('contact.form_hint')}</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-tech-blue transition-colors w-full" />
                            <input type="text" placeholder="Phone" className="bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-tech-blue transition-colors w-full" />
                        </div>
                        <input type="email" placeholder="Email" className="bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-tech-blue transition-colors w-full" />
                        <textarea rows={4} placeholder="Message" className="bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-tech-blue transition-colors w-full text-sm"></textarea>

                        <button className="w-full bg-white text-black uppercase font-bold text-sm tracking-widest py-4 hover:bg-tech-blue transition-colors">
                            {t('contact.form_btn')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
