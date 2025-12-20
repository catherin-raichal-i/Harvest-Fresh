import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '../data/inventory';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
                        alt="Lush Organic Farm"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center max-w-4xl mx-auto px-4"
                >
                    <h2 className="text-emerald-500 font-medium tracking-[0.2em] mb-4 text-sm md:text-base uppercase">Fresh from Our Farm to Your Door</h2>
                    <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
                        Organic <span className="italic font-light text-green-200">Abundance</span>
                    </h1>
                    <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Nutrient-rich, sustainably grown, and harvested at the peak of ripeness. Experience the true taste of nature’s finest produce.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/categories" className="inline-flex items-center justify-center bg-emerald-700 text-white px-8 py-4 rounded-sm font-medium hover:bg-emerald-800 transition-all hover:tracking-wide">
                            Shop Fresh Produce <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                            Our Farm Story
                        </Link>
                    </div>
                </motion.div>
            </section>



            {/* Trust Indicators */}
            <section className="py-12 bg-white border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-900 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            </div>
                            <h3 className="font-serif text-stone-900">Same-Day Harvest</h3>
                            <p className="text-xs text-stone-500 mt-1">Fresher than your local market</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-900 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <h3 className="font-serif text-stone-900">100% Organic</h3>
                            <p className="text-xs text-stone-500 mt-1">Chemical-free cultivation</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-900 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <h3 className="font-serif text-stone-900">Local Sourcing</h3>
                            <p className="text-xs text-stone-500 mt-1">Supporting local eco-systems</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-900 mb-3">
                                <Star size={24} />
                            </div>
                            <h3 className="font-serif text-stone-900">Zero Plastic</h3>
                            <p className="text-xs text-stone-500 mt-1">Eco-friendly packaging</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif text-stone-900 mb-4">Our Harvest Categories</h2>
                        <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { title: 'Fresh Vegetables', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: '/categories' },
                            { title: 'Seasonal Fruits', img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', link: '/categories' },
                            { title: 'Herbs & Greens', img: 'https://howtoculinaryherbgarden.com/wp-content/uploads/2021/09/Large-Mint-Plant-Growing-in-Garden.jpg', link: '/categories' }
                        ].map((item, index) => (
                            <Link
                                to={item.link}
                                key={index}
                            >
                                <motion.div
                                    variants={fadeInUp}
                                    className="group cursor-pointer relative overflow-hidden aspect-[3/4]"
                                >
                                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/30 transition-colors z-10" />
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="text-3xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                        <span className="text-emerald-200 text-sm font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">BROWSE SHOP</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Seasonal Highlights (Best Sellers) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-serif text-stone-900">Seasonal Highlights</h2>
                            <p className="text-stone-500 mt-2">Freshly harvested and ready for your kitchen</p>
                        </div>
                        <Link to="/categories" className="hidden md:flex items-center text-emerald-800 font-medium hover:text-emerald-900">
                            View Market <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {getFeaturedProducts(4).map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-square bg-stone-50 rounded-sm overflow-hidden mb-4 relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                                    />
                                    <Link to={`/product/${item.id}`} className="absolute bottom-4 right-4 bg-white text-stone-900 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-emerald-50 flex items-center justify-center">
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                                <Link to={`/product/${item.id}`}>
                                    <h3 className="font-serif text-lg text-stone-900 group-hover:text-emerald-800 transition-colors">{item.name}</h3>
                                </Link>
                                <p className="text-stone-500 font-light">₹{item.price.toLocaleString()}<span className="text-xs ml-1">{item.unit}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Promise (Harvest & Logistics) */}
            <section className="relative py-32 bg-stone-900 text-white overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495107335689-ee3373c1f8ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">From Our Soil to Your Kitchen</h2>
                    <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the gold standard of organic logistics.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20 hover:bg-white/20 transition-colors">
                            <h3 className="text-2xl font-serif mb-3">Hyper-Local Logistics</h3>
                            <p className="text-stone-300 mb-4">Orders over ₹1,000 delivered same-day. We ensure our carbon footprint stays as green as our fields.</p>
                            <Link to="/delivery" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium uppercase tracking-wider">Delivery Zones</Link>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20 hover:bg-white/20 transition-colors">
                            <h3 className="text-2xl font-serif mb-3">Freshness Guarantee</h3>
                            <p className="text-stone-300 mb-4">If our produce doesn't meet your freshness expectations, we'll replace the entire order, no questions asked.</p>
                            <Link to="/terms" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium uppercase tracking-wider">Our Ethics</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ask the Farmer Section */}
            <section className="py-24 bg-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                                <img
                                    src="https://blog.aghires.com/hubfs/shutterstock_188976878-2-1.jpg"
                                    alt="Consult our Farmer"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-stone-900/10"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-emerald-800 font-medium tracking-widest text-sm uppercase mb-4 block">Farm Direct Knowledge</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Expert Growing Advice, <br />From the Source</h2>
                            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                                Curated a backyard garden or just curious about where your food comes from? Our lead farmers are available for one-on-one video consultations.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center text-stone-700">
                                    <div className="w-2 h-2 bg-emerald-700 rounded-full mr-4"></div>
                                    Seasonal planting guides
                                </li>
                                <li className="flex items-center text-stone-700">
                                    <div className="w-2 h-2 bg-emerald-700 rounded-full mr-4"></div>
                                    Soil health & pest management tips
                                </li>
                                <li className="flex items-center text-stone-700">
                                    <div className="w-2 h-2 bg-emerald-700 rounded-full mr-4"></div>
                                    Organic preservation techniques
                                </li>
                            </ul>
                            <Link to="/contact" className="inline-flex items-center justify-center bg-stone-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-stone-800 transition-colors">
                                Schedule a Call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produce Gifting Section */}
            <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-800/50 -skew-x-12 transform translate-x-32"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <span className="text-emerald-500 font-medium tracking-[0.3em] text-xs uppercase mb-4 block">Nature's Finest Gift</span>
                            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Harvest <span className="text-green-200">Hampers</span></h2>
                            <p className="text-stone-300 text-lg mb-10 font-light leading-relaxed">
                                Perfect for any occasion. Our hand-woven wicker baskets are filled with the season's most vibrant produce, wrapped in compostable linen.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                <div className="border-l border-emerald-800/50 pl-6">
                                    <h4 className="text-green-200 font-serif text-xl mb-2">Artisan Baskets</h4>
                                    <p className="text-stone-400 text-sm">Reusable wicker and bamboo hampers from local craftsmen.</p>
                                </div>
                                <div className="border-l border-emerald-800/50 pl-6">
                                    <h4 className="text-green-200 font-serif text-xl mb-2">Custom Curation</h4>
                                    <p className="text-stone-400 text-sm">Select favorite fruits or let our farmers build a seasonal surprise.</p>
                                </div>
                            </div>

                            <Link to="/categories" className="inline-flex items-center text-emerald-500 font-medium hover:text-emerald-400 transition-colors group">
                                Explore Gift Boxes <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="w-full md:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="aspect-square rounded-sm overflow-hidden shadow-2xl border border-stone-800"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Produce Gift Hamper"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-900/40 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seasonal Harvest Calendar */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif text-stone-900 mb-4">Seasonal Harvest Calendar</h2>
                        <p className="text-stone-500 max-w-2xl mx-auto">Know when your favorites are at their nutritional peak. We only harvest what nature intends, when she intends.</p>
                        <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { season: 'Winter Peak', title: 'Leafy Greens', items: 'Spinach, Kale, Fenugreek', icon: '🥬', color: 'bg-emerald-50' },
                            { season: 'Autumn Peak', title: 'Root Vegetables', items: 'Carrots, Radishes, Beets', icon: '🥕', color: 'bg-orange-50' },
                            { season: 'Summer Peak', title: 'Stone Fruits', items: 'Peaches, Plums, Mangoes', icon: '🥭', color: 'bg-yellow-50' },
                            { season: 'Spring Peak', title: 'Aromatic Herbs', items: 'Mint, Cilantro, Basil', icon: '🌿', color: 'bg-green-50' }
                        ].map((item, i) => (
                            <Link to="/categories" key={i}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`p-8 rounded-2xl ${item.color} border border-stone-100 hover:shadow-xl transition-all duration-300 group h-full`}
                                >
                                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest mb-2 block">{item.season}</span>
                                    <h3 className="text-2xl font-serif text-stone-900 mb-3">{item.title}</h3>
                                    <p className="text-stone-600 text-sm leading-relaxed">{item.items}</p>
                                    <div className="mt-6 pt-6 border-t border-white/50 flex items-center text-emerald-900 text-xs font-bold tracking-widest uppercase hover:gap-2 transition-all">
                                        View Harvest <ArrowRight size={14} className="ml-1" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
