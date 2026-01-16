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

                    <div className="space-y-4 mb-8">
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">{t('contact.email_label')}</span>
                            <a href="mailto:info@vclip.com" className="text-xl text-white hover:text-tech-blue transition-colors">info@vclip.com</a>
                        </div>
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">{t('contact.whatsapp_label')}</span>
                            <button className="bg-green-600/20 text-green-500 border border-green-600/50 px-4 py-2 uppercase font-bold text-sm hover:bg-green-600 hover:text-white transition-all rounded-sm flex items-center gap-2">
                                <span>📱</span> {t('contact.whatsapp_btn')}
                            </button>
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
