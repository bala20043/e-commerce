import { motion } from 'framer-motion';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

const features = [
    { icon: <Truck size={32} />, title: "Free Delivery", desc: "Orders above $150, worldwide" },
    { icon: <RotateCcw size={32} />, title: "Easy Returns", desc: "30-day hassle-free returns" },
    { icon: <ShieldCheck size={32} />, title: "Secure Payment", desc: "256-bit SSL encryption" },
    { icon: <Headphones size={32} />, title: "24/7 Support", desc: "Live chat and email support" },
];

export const TrustBar = () => {
    return (
        <section className="bg-[#181818] py-20">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-[#C9A84C] mb-5 flex justify-center group-hover:scale-110 transition-transform">{f.icon}</div>
                            <h4 className="uppercase tracking-widest text-[0.9rem] mb-2">{f.title}</h4>
                            <p className="text-[0.8rem] text-[#888]">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
