import { motion } from 'framer-motion';

export const Marquee = () => {
    const text = "Free Shipping Over $150 ✦ New Arrivals Weekly ✦ Exclusive Member Deals ✦ Sustainable Packaging ✦ 30-Day Returns ✦ ";
    
    return (
        <div className="bg-[#C9A84C] text-[#080808] py-4 overflow-hidden whitespace-nowrap flex">
            <motion.div
                animate={{ x: [0, '-50%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="inline-block text-[0.8rem] font-bold uppercase tracking-[0.2em]"
            >
                {text.repeat(10)}
            </motion.div>
        </div>
    );
};
