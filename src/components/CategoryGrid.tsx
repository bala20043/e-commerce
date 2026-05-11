import { motion } from 'framer-motion';

const categories = [
    { 
        name: "Women's", 
        count: "120+ Items", 
        image: "https://images.unsplash.com/photo-1490481651871-ab68624d5517?q=80&w=1200&auto=format&fit=crop", 
        large: true 
    },
    { 
        name: "Men's", 
        count: "85+ Items", 
        image: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Accessories", 
        count: "40+ Items", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Footwear", 
        count: "60+ Items", 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        name: "Eyewear", 
        count: "25+ Items", 
        image: "https://images.unsplash.com/photo-1511499767390-903390e6fbc1?q=80&w=800&auto=format&fit=crop" 
    },
];

export const CategoryGrid = () => {
    return (
        <section id="collections" className="py-24">
            <div className="container">
                <span className="section-label">Discover Styles</span>
                <h2 className="section-title">Explore <i>Styles</i></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-auto md:h-[600px]">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className={`relative overflow-hidden rounded-lg group ${cat.large ? 'md:row-span-2' : ''}`}
                        >
                            <div className="w-full h-full overflow-hidden">
                                <img 
                                    src={cat.image} 
                                    alt={cat.name} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.7] group-hover:brightness-50" 
                                />
                            </div>
                            <div className="absolute bottom-8 left-8 z-10">
                                <h3 className="text-3xl font-serif mb-2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-[#C9A84C]">{cat.name}</h3>
                                <p className="text-[0.7rem] uppercase tracking-widest text-[#888]">{cat.count}</p>
                            </div>
                            <div className="absolute bottom-8 right-8 text-2xl text-[#C9A84C] opacity-0 -translate-x-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                                →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
