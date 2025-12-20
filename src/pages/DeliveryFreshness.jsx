import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Thermometer, Clock, MapPin, Leaf } from 'lucide-react';

const DeliveryFreshness = () => {
    const features = [
        {
            icon: <Clock className="w-8 h-8 text-emerald-600" />,
            title: "Within 24 Hours",
            description: "From our soil to your doorstep. We harvest only after your order is confirmed to ensure peak nutrient density."
        },
        {
            icon: <Truck className="w-8 h-8 text-emerald-600" />,
            title: "Eco-Friendly Logistics",
            description: "Our delivery fleet is optimized for minimal carbon footprint, using biodegradable crates and zero-plastic padding."
        },
        {
            icon: <Thermometer className="w-8 h-8 text-emerald-600" />,
            title: "Cold Chain Integrity",
            description: "Temperature-controlled transport preserves the 'just-picked' crispness of delicate greens and fruits."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: "Freshness Guarantee",
            description: "If any item arrives below our 'Golden Standard', we provide a full refund or instant replacement. No questions asked."
        }
    ];

    const zones = [
        { city: "Dehradun", time: "Morning Delivery (6 AM - 10 AM)", fee: "Free over ₹1,000" },
        { city: "Rishikesh", time: "Afternoon Delivery (1 PM - 4 PM)", fee: "Free over ₹1,500" },
        { city: "Mussoorie", time: "Evening Delivery (5 PM - 8 PM)", fee: "Free over ₹2,000" },
        { city: "Haridwar", time: "Morning Delivery (7 AM - 11 AM)", fee: "Free over ₹1,500" }
    ];

    return (
        <div className="bg-white min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 bg-stone-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-emerald-800 font-bold text-sm uppercase tracking-widest mb-4 block"
                    >
                        Our Promise
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-serif text-stone-900 mb-6"
                    >
                        Delivery & <span className="italic text-emerald-700">Freshness</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        We’ve mastered the art of the organic supply chain. Every leaf, fruit, and root is treated with the respect it deserves, from our farm to your kitchen.
                    </motion.p>
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl opacity-50"></div>
            </section>

            {/* Core Features */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 border border-stone-100 group-hover:bg-emerald-100 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif text-stone-900 mb-3">{feature.title}</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Delivery Zones */}
            <section className="py-24 bg-stone-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest mb-4 block">Where We Deliver</span>
                            <h2 className="text-4xl font-serif mb-8">Serving the <span className="text-green-200">Shivalik Valley</span></h2>
                            <p className="text-stone-400 mb-10 leading-relaxed">
                                To maintain our freshness integrity, we restrict our delivery range to a 50km radius from our primary harvest site. This ensures every crate spends less than 180 minutes in transit.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {zones.map((zone, i) => (
                                    <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-lg border border-white/10">
                                        <MapPin className="text-emerald-500 flex-shrink-0 mt-1" size={18} />
                                        <div>
                                            <h4 className="font-medium text-white">{zone.city}</h4>
                                            <p className="text-xs text-stone-500 mt-1">{zone.time}</p>
                                            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wide mt-2">{zone.fee}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-full border border-emerald-500/20 absolute -inset-8 animate-[spin_20s_linear_infinite] hidden md:block"></div>
                            <div className="aspect-square rounded-full border border-emerald-500/10 absolute -inset-16 animate-[spin_30s_linear_infinite_reverse] hidden md:block"></div>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                                    alt="Fresh Harvest Crate"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <Leaf className="text-emerald-500" size={24} />
                                    <span className="text-sm font-medium">Verified Fresh Harvest No. 8821</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packaging Innovation */}
            <section className="py-24 max-w-3xl mx-auto px-4 text-center">
                <Thermometer className="w-12 h-12 text-emerald-800 mx-auto mb-6" />
                <h2 className="text-3xl font-serif text-stone-900 mb-6">Innovative <span className="italic">Breathing</span> Packaging</h2>
                <p className="text-stone-600 leading-relaxed mb-10">
                    Traditional plastic traps moisture and gases, causing produce to rot. Our proprietary wood-pulp mesh and compostable linen liners allow the produce to 'breathe', extending its fridge life by up to 40% compared to supermarket alternatives.
                </p>
                <div className="inline-flex items-center gap-4 bg-emerald-50 px-6 py-3 rounded-full border border-emerald-100">
                    <ShieldCheck className="text-emerald-700" size={20} />
                    <span className="text-sm font-medium text-emerald-900">100% Zero-Plastic Logistics Certified</span>
                </div>
            </section>
        </div>
    );
};

export default DeliveryFreshness;
