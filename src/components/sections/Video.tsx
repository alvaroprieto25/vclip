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
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 group-hover:bg-gray-800 transition-colors cursor-pointer">
                        <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-tech-blue group-hover:scale-110 transition-all">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1 group-hover:border-l-tech-blue transition-colors" />
                        </div>
                    </div>
                    {/* In a real app, <video> or <iframe> goes here */}
                </div>
            </div>
        </section>
    );
};

export default Video;
