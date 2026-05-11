import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Cursor } from './components/Cursor';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProductCard } from './components/ProductCard';
import { CategoryGrid } from './components/CategoryGrid';
import { TrustBar } from './components/TrustBar';
import { ArrivalsSlider } from './components/ArrivalsSlider';
import { products, type Product } from './data/products';

function App() {
    const [cart, setCart] = useState<(Product & { qty: number })[]>(() => {
        const saved = localStorage.getItem('luxe_cart');
        return saved ? JSON.parse(saved) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [filter, setFilter] = useState('All');
    const [itemsToShow, setItemsToShow] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem('luxe_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            const categoryMap: Record<string, string> = {
                'men': 'Men',
                'women': 'Women',
                'accessories': 'Accessories',
                'sale': 'Sale'
            };
            if (categoryMap[hash]) {
                setFilter(categoryMap[hash]);
                document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Check on initial load
        setTimeout(() => setLoading(false), 1500);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const addToCart = (product: Product) => {
        setCart(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
            return [...prev, { ...product, qty: 1 }];
        });
        setIsCartOpen(true);
    };

    const updateQty = (id: number, delta: number) => {
        setCart(prev => prev.map(item => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item).filter(item => item.qty > 0));
    };

    const filteredProducts = products.filter(p => 
        filter === 'All' || p.category === filter || (filter === 'Sale' && p.oldPrice)
    );

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="min-h-screen bg-[#080808] text-[#F0EBE0] font-sans selection:bg-[#C9A84C] selection:text-[#080808]">
            <AnimatePresence>
                {loading && (
                    <motion.div 
                        exit={{ y: '-100%' }}
                        transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
                        className="fixed inset-0 bg-[#080808] z-[10000] flex items-center justify-center"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="font-serif text-[4rem] text-[#C9A84C] tracking-[0.3em]"
                        >
                            LUXE.
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>

            <Cursor />
            <Background />
            <Navbar 
                cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} 
                openCart={() => setIsCartOpen(true)}
                openSearch={() => setIsSearchOpen(true)}
            />

            <main>
                <Hero />
                <Marquee />

                <section id="trending" className="py-24">
                    <div className="container">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="section-label"
                        >
                            Curated Selections
                        </motion.span>
                        <h2 className="section-title">Trending <i>Now</i></h2>

                        <div className="flex gap-10 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                            {['All', 'Women', 'Men', 'Accessories', 'Sale'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={`interactive text-[0.8rem] uppercase tracking-widest transition-all pb-1 border-b ${
                                        filter === tab ? 'text-[#C9A84C] border-[#C9A84C]' : 'text-[#888] border-transparent hover:text-[#C9A84C]'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredProducts.slice(0, itemsToShow).map((product) => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onAddToCart={addToCart}
                                />
                            ))}
                        </div>

                        {itemsToShow < filteredProducts.length && (
                            <div className="mt-16 text-center">
                                <button 
                                    onClick={() => setItemsToShow(prev => prev + 8)}
                                    className="interactive btn px-12 py-5 border border-[#222] uppercase tracking-widest text-[0.8rem] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                                >
                                    Load More Products
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                <section id="featured" className="bg-[#111] py-32 relative overflow-hidden">
                    <div className="container flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <motion.q 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="block font-serif text-[2.8rem] leading-tight mb-10"
                            >
                                "Crafted for those who demand nothing less than perfection."
                            </motion.q>
                            <button className="interactive px-10 py-5 bg-[#C9A84C] text-[#080808] uppercase tracking-widest text-[0.75rem] font-bold">Shop the Look</button>
                        </div>
                        <div className="w-full md:w-1/2 aspect-video bg-gradient-to-br from-[#16140e] to-[#1e1a12] rounded flex items-center justify-center text-9xl shadow-2xl">
                            💎
                        </div>
                    </div>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                        className="absolute bottom-0 left-0 h-[2px] bg-[#C9A84C]"
                    />
                </section>

                <CategoryGrid />
                <section id="men" className="scroll-mt-20"></section>
                <section id="women" className="scroll-mt-20"></section>
                <section id="sale" className="scroll-mt-20"></section>
                <TrustBar />
                <ArrivalsSlider />
            </main>

            <footer className="bg-[#080808] pt-24 pb-12 border-t border-[#222] relative">
                <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
                />
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-1 md:col-span-1">
                            <h2 className="font-serif text-3xl text-[#C9A84C] mb-6">LUXE.</h2>
                            <p className="text-[#888] mb-8 max-w-xs">Redefining luxury for the modern era. Quality, craftsmanship, and soul in every piece.</p>
                            <div className="flex gap-4">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="interactive w-10 h-10 border border-[#222] rounded-full flex items-center justify-center hover:rotate-[360deg] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all cursor-none">
                                        📱
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="uppercase tracking-[0.2em] text-[0.8rem] mb-8">Shop</h4>
                            <ul className="flex flex-col gap-3 text-[#888] text-[0.85rem]">
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">Collections</a></li>
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">New Arrivals</a></li>
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">Men</a></li>
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">Women</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="uppercase tracking-[0.2em] text-[0.8rem] mb-8">Help</h4>
                            <ul className="flex flex-col gap-3 text-[#888] text-[0.85rem]">
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">Shipping</a></li>
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">Returns</a></li>
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">Contact Us</a></li>
                                <li><a href="#" className="hover:text-[#C9A84C] hover:pl-2 transition-all">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="uppercase tracking-[0.2em] text-[0.8rem] mb-8">Newsletter</h4>
                            <p className="text-[#888] text-[0.85rem] mb-6">Join the LUXE circle for exclusive updates.</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email" className="bg-[#111] border border-[#222] px-4 py-3 text-[0.8rem] flex-grow focus:outline-none focus:border-[#C9A84C]" />
                                <button className="interactive px-6 py-3 bg-[#C9A84C] text-[#080808] font-bold text-[0.8rem]">JOIN</button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-[#888] text-[0.75rem] gap-4">
                        <p>&copy; 2026 LUXE STORE. All rights reserved.</p>
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                            <span>💳 VISA</span> <span>💳 MC</span> <span>💳 AMEX</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2000]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-full max-w-[450px] h-full bg-[#111] z-[2001] p-10 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-10 pb-5 border-b border-[#222]">
                                <h3 className="text-xl font-serif">Shopping Bag</h3>
                                <button onClick={() => setIsCartOpen(false)} className="interactive p-2"><X /></button>
                            </div>

                            <div className="flex-grow overflow-y-auto pr-2 scrollbar-hide">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-[#888]">
                                        <ShoppingBag size={64} className="mb-4 opacity-20" />
                                        <p>Your bag is empty</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-8">
                                        {cart.map((item, i) => (
                                            <motion.div 
                                                key={item.id}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex gap-5"
                                            >
                                                <div className="w-20 h-24 bg-[#181818] overflow-hidden">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-grow">
                                                    <h4 className="text-[0.9rem] mb-1">{item.name}</h4>
                                                    <p className="text-[0.7rem] text-[#888] uppercase mb-3">One Size / Black</p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-3 border border-[#222] px-2 py-1">
                                                            <button onClick={() => updateQty(item.id, -1)} className="interactive p-1"><Minus size={12} /></button>
                                                            <span className="text-[0.8rem] min-w-[20px] text-center">{item.qty}</span>
                                                            <button onClick={() => updateQty(item.id, 1)} className="interactive p-1"><Plus size={12} /></button>
                                                        </div>
                                                        <button onClick={() => updateQty(item.id, -item.qty)} className="interactive p-1 text-[#888] hover:text-[#E05454]"><Trash2 size={16} /></button>
                                                    </div>
                                                </div>
                                                <div className="text-[1rem] font-serif text-[#C9A84C]">${item.price * item.qty}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="mt-10 pt-10 border-t border-[#222]">
                                <div className="flex justify-between mb-2">
                                    <span className="text-[#888]">Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mb-8">
                                    <span className="text-[#888]">Shipping</span>
                                    <span className="text-[#C9A84C]">FREE</span>
                                </div>
                                <div className="flex justify-between mb-8 text-2xl font-serif text-[#C9A84C]">
                                    <span>Total</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <button className="interactive w-full py-5 bg-[#C9A84C] text-[#080808] font-bold uppercase tracking-widest text-[0.8rem]">Checkout Securely →</button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#080808fb] backdrop-blur-md z-[4000] flex flex-col items-center justify-center p-10"
                    >
                        <button onClick={() => setIsSearchOpen(false)} className="absolute top-10 right-10 interactive p-4"><X size={32} /></button>
                        <div className="w-full max-w-3xl">
                            <input 
                                autoFocus
                                type="text" 
                                placeholder="Search for luxury..." 
                                className="w-full bg-transparent border-b-2 border-[#C9A84C] py-5 text-[3rem] md:text-[5rem] font-serif text-center focus:outline-none"
                            />
                            <div className="flex flex-wrap justify-center gap-4 mt-12">
                                {['Cashmere', 'Boots', 'Bags', 'Sale'].map(chip => (
                                    <button key={chip} className="interactive px-8 py-3 border border-[#222] rounded-full text-[0.8rem] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">
                                        {chip}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
