import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, desc, delay }: { icon: string, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 p-8 hover:border-tech-blue/50 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-20 h-20 bg-tech-blue/5 rounded-full blur-2xl -translate-y-10 translate-x-10 group-hover:bg-tech-blue/10 transition-all" />

        <div className="text-4xl mb-6 text-tech-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-tech-blue transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
            {desc}
        </p>
    </motion.div>
);

const Features = () => {
    const { t } = useTranslation();

    return (
        <section id="features" className="py-24 relative bg-tech-dark/95">
            {/* Background Grid - styled in index.css - reuse standard grid or specific */}
            <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-tech-blue font-bold tracking-widest uppercase text-xs mb-2 block">{t('features.label')}</span>
                    <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-6">
                        {t('features.title')}
                    </h2>
                    <p className="text-gray-400">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon="👁️"
                        title={t('features.items.vision.title')}
                        desc={t('features.items.vision.desc')}
                        delay={0.1}
                    />
                    <FeatureCard
                        icon="🌫️"
                        title={t('features.items.antifog.title')}
                        desc={t('features.items.antifog.desc')}
                        delay={0.2}
                    />
                    <FeatureCard
                        icon="🔧"
                        title={t('features.items.install.title')}
                        desc={t('features.items.install.desc')}
                        delay={0.3}
                    />
                    <FeatureCard
                        icon="⚖️"
                        title={t('features.items.comfort.title')}
                        desc={t('features.items.comfort.desc')}
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
