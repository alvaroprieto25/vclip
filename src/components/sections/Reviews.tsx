import { useTranslation } from 'react-i18next';

const ReviewCard = ({ name, role, quote }: { name: string, role: string, quote: string }) => (
    <div className="bg-tech-glare p-6 rounded-none border-l-2 border-tech-blue/50 hover:border-tech-blue transition-colors">
        <p className="text-gray-300 italic mb-4">"{quote}"</p>
        <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">{name}</h4>
            <span className="text-tech-blue text-xs uppercase font-bold">{role}</span>
        </div>
    </div>
);

const Reviews = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-tech-dark relative">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-display uppercase mb-16 text-center">
                    {t('reviews.heading', 'Riders Reviews')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ReviewCard
                        name="Alex M."
                        role="Motocross Pro"
                        quote="Game changer. Finally I can see clearly without fogging up properly."
                    />
                    <ReviewCard
                        name="Sarah K."
                        role="Enduro Enthusiast"
                        quote="Super easy to install. The vision clarity is unmatched."
                    />
                    <ReviewCard
                        name="Javi R."
                        role="Ski Instructor"
                        quote="Fits perfectly in my goggles. I forget I'm wearing them."
                    />
                </div>
            </div>
        </section>
    );
};

export default Reviews;
