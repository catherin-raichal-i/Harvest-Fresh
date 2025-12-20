import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif text-white tracking-widest">HARVEST FRESH</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Nurturing the earth, feeding the soul. Premium organic produce delivered from our soil to your doorstep since 2018.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/categories" className="hover:text-emerald-500 transition-colors">Season's Best</Link></li>
                            <li><Link to="/categories" className="hover:text-emerald-500 transition-colors">Fresh Harvest</Link></li>
                            <li><Link to="/about" className="hover:text-emerald-500 transition-colors">Our Story</Link></li>
                            <li><Link to="/testimonials" className="hover:text-emerald-500 transition-colors">Community Feedback</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-emerald-500 transition-colors">Farm FAQ</Link></li>
                            <li><Link to="/delivery" className="hover:text-emerald-500 transition-colors">Delivery & Freshness</Link></li>
                            <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Farm Gallery */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Farm Gallery</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=200&h=200&fit=crop",
                                "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?_gl=1*ykcja5*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDU0NDEkajM4JGwwJGgw",
                                "https://howtoculinaryherbgarden.com/wp-content/uploads/2021/09/Large-Mint-Plant-Growing-in-Garden.jpg",
                                "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=800&q=80",
                                "https://specialtyproduce.com/sppics/803.png",
                                "https://w0.peakpx.com/wallpaper/62/682/HD-wallpaper-banana-fruits-bunch.jpg"
                            ].map((img, i) => (
                                <div key={i} className="aspect-square overflow-hidden rounded-sm group">
                                    <img
                                        src={img}
                                        alt={`Farm gallery ${i + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Harvest Fresh Farms. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/terms" className="hover:text-stone-300">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-stone-300">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
