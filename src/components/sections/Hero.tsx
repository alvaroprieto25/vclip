import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mesh } from 'three';
import { Environment, ContactShadows } from '@react-three/drei';

const RotatingModel = () => {
    const meshRef = useRef<Mesh>(null);

    useFrame((_state) => {
        if (!meshRef.current) return;
        // Simple rotation for now
        meshRef.current.rotation.y += 0.01;
        // In future: bind to scroll
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#00f0ff" wireframe />
        </mesh>
    );
};

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-[90vh] flex flex-col pt-10 overflow-hidden">
            {/* Background Grid - styled in index.css */}
            <div className="absolute inset-0 tech-grid-bg -z-10" />

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-grow">
                {/* Text Content */}
                <div className="z-10">
                    <div className="bg-tech-blue/10 text-tech-blue px-3 py-1 inline-block text-xs font-bold tracking-widest uppercase mb-6 rounded-sm border border-tech-blue/20">
                        {t('hero.badge')}
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6 uppercase">
                        <span className="block text-white">{t('hero.title_white')}</span>
                        <span className="block text-tech-blue drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                            {t('hero.title_blue')}
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-tech-blue text-black font-bold uppercase tracking-wide px-8 py-4 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                            {t('hero.cta_main')}
                        </button>
                        <button className="border border-white/20 text-white font-bold uppercase tracking-wide px-8 py-4 hover:bg-white/5 transition-all">
                            {t('hero.cta_sec')}
                        </button>
                    </div>
                </div>

                {/* 3D Content */}
                <div className="h-[500px] w-full relative z-0">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                        <pointLight position={[-10, -10, -10]} intensity={1} />

                        <RotatingModel />

                        <Environment preset="city" />
                        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#00f0ff" />
                    </Canvas>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-[10px] uppercase tracking-[0.2em]">{t('hero.scroll_hint')}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
            </div>
        </section>
    );
};

export default Hero;
