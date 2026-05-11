import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-[#080808]">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#C9A84C] blur-[150px] opacity-20" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -40, 0],
                        y: [0, -60, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#C9A84C] blur-[200px] opacity-10" 
                />
            </div>
            
            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-[#C9A84C] rounded-full"
                        initial={{ 
                            x: `${Math.random() * 100}%`, 
                            y: `${Math.random() * 100}%`, 
                            opacity: 0 
                        }}
                        animate={{ 
                            opacity: [0, 0.8, 0],
                            y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 20}%`]
                        }}
                        transition={{ 
                            duration: 5 + Math.random() * 5, 
                            repeat: Infinity, 
                            ease: 'linear'
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-20 flex items-center">
                <div className="w-full md:w-1/2">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="block text-[#C9A84C] uppercase tracking-[0.5em] text-[0.8rem] mb-6"
                    >
                        EST. 2026 / PARIS
                    </motion.span>
                    
                    <h1 className="text-[5.5rem] md:text-[8rem] leading-[0.9] mb-10 font-serif font-bold italic">
                        {["Elegance", "Redefined"].map((word, i) => (
                            <div key={i} className="overflow-hidden block">
                                <motion.span
                                    initial={{ y: '100%' }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-[1.2rem] text-[#888888] max-w-[450px] mb-12 font-sans font-light leading-relaxed"
                    >
                        Experience the zenith of luxury. Our 2026 collection merges ancestral craftsmanship with avant-garde vision.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 }}
                        className="flex gap-6"
                    >
                        <button className="interactive px-12 py-6 bg-[#C9A84C] text-[#080808] uppercase tracking-[0.3em] text-[0.7rem] font-bold hover:bg-[#E8C96B] transition-all">Explore Collection</button>
                        <button className="interactive px-12 py-6 border border-[#222] uppercase tracking-[0.3em] text-[0.7rem] font-bold hover:border-[#C9A84C] transition-all">Lookbook</button>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    className="hidden md:flex w-1/2 justify-end"
                >
                    <div className="w-[90%] aspect-[4/5] relative group">
                        <div className="absolute inset-0 border border-[#C9A84C]/30 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop" 
                            alt="Luxury Fashion" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
