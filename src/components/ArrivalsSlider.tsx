import { motion } from 'framer-motion';
import { products } from '../data/products';

export const ArrivalsSlider = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <span className="section-label">Latest Drops</span>
                <h2 className="section-title">Just <i>Arrived</i></h2>
            </div>
            
            <div className="flex gap-10 px-[40px] overflow-x-auto pb-10 scrollbar-hide cursor-grab active:cursor-grabbing">
                {products.slice(0, 10).map((p, i) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="min-w-[350px] bg-[#111] border border-[#222] p-5 group hover:border-[#C9A84C] transition-all"
                    >
                        <div className="aspect-[4/5] bg-[#111] mb-5 flex items-center justify-center overflow-hidden">
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.8 }}
                                src={p.image} 
                                alt={p.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h4 className="text-[1.2rem] font-serif mb-2">{p.name}</h4>
                        <div className="text-[1.1rem] text-[#C9A84C] font-serif">${p.price}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
