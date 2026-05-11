import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
    onAddToCart: (p: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="bg-[#111] border border-[#222] p-5 relative group hover:border-[#C9A84C] transition-all duration-500"
        >
            <div className={`absolute top-4 left-4 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-widest z-10 ${
                product.badge === 'SALE' ? 'bg-[#E05454]' : 
                product.badge === 'NEW' ? 'bg-[#C9A84C] text-[#080808]' : 
                'bg-[#333]'
            }`}>
                {product.badge}
            </div>

            <button className="absolute top-4 right-4 text-[#888] hover:text-[#E05454] transition-colors z-10 interactive">
                <Heart size={20} />
            </button>

            <div className="aspect-[4/5] bg-[#111] mb-5 flex items-center justify-center overflow-hidden relative">
                <motion.img 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.8 }}
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                
                <button 
                    onClick={() => onAddToCart(product)}
                    className="absolute bottom-0 left-0 w-full py-4 bg-[#C9A84C] text-[#080808] text-[0.7rem] font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 interactive"
                >
                    Quick Shop
                </button>
            </div>

            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888] mb-1">LUXE ESSENTIALS</p>
            <h4 className="text-[1.2rem] font-serif mb-2">{product.name}</h4>
            
            <div className="flex items-center gap-2 mb-3">
                <div className="text-[#C9A84C] text-[0.7rem]">★★★★★</div>
                <span className="text-[#888] text-[0.7rem]">(4{Math.floor(Math.random()*9)})</span>
            </div>

            <div className="text-[1.3rem] text-[#C9A84C] font-serif flex items-center gap-3">
                ${product.price}
                {product.oldPrice && (
                    <span className="text-[0.9rem] text-[#888] line-through">${product.oldPrice}</span>
                )}
            </div>
        </motion.div>
    );
};
