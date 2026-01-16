import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Video = () => {
    // Fallback translation if missing
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-blue/5 z-0" />
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display uppercase mb-12"
                >
                    {t('video.heading', 'Experience the Limit')}
                </motion.h2>

                <div className="aspect-video w-full max-w-5xl mx-auto rounded-xl border border-white/10 overflow-hidden shadow-2xl relative group">
                    {/* Placeholder for video content */}
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/lo-Z_I6_vv8?si=xM29i-cBmuKD0HIR"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full object-cover"
                    ></iframe>
                    {/* In a real app, <video> or <iframe> goes here */}
                </div>
            </div>
        </section>
    );
};

export default Video;
