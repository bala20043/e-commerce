import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
    cartCount: number;
    openCart: () => void;
    openSearch: () => void;
}

export const Navbar = ({ cartCount, openCart, openSearch }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Collections', id: 'collections' },
        { name: 'Trending', id: 'trending' },
        { name: 'Men', id: 'men' },
        { name: 'Women', id: 'women' },
        { name: 'Sale', id: 'sale' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 w-full z-[1000] h-24 flex items-center transition-all duration-700 ${
                    scrolled ? 'bg-[#080808ee] backdrop-blur-3xl border-b border-[#C9A84C]/20' : 'bg-transparent'
                }`}
                style={{ padding: '0 40px' }}
            >
                <div className="flex items-center justify-between w-full">
                    <a href="#" className="logo text-[2rem] font-serif font-bold text-[#C9A84C] tracking-[0.2em] relative overflow-hidden group">
                        LUXE.
                    </a>

                    <ul className="hidden md:flex gap-10 items-center">
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                            >
                                <a href={`#${link.id}`} className="nav-link text-[0.7rem] uppercase tracking-[0.3em] font-medium relative group pb-1">
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-500 group-hover:w-full"></span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6">
                        <button onClick={openSearch} className="interactive p-2 hover:text-[#C9A84C] transition-colors"><Search size={20} /></button>
                        <button onClick={openCart} className="interactive p-2 relative hover:text-[#C9A84C] transition-colors">
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-[#C9A84C] text-[#080808] text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                            )}
                        </button>
                        <button onClick={() => setMobileMenuOpen(true)} className="md:hidden interactive p-2"><Menu size={24} /></button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#080808] z-[3000] flex flex-col items-center justify-center p-10"
                    >
                        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 interactive p-2"><X size={32} /></button>
                        <ul className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <a 
                                        href={`#${link.id}`} 
                                        className="font-serif text-[3.5rem] hover:text-[#C9A84C] transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
