import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Dr. Ananya Sharma",
            role: "Regular Subscriber",
            rating: 5,
            text: "The quality of the heirloom tomatoes is simply outstanding. They remind me of the flavor from my grandmother's garden. Harvest Fresh has truly brought authenticity back to our kitchen.",
            date: "June 12, 2024",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 2,
            name: "Vikram Malhotra",
            role: "Local Chef",
            rating: 5,
            text: "As a chef, freshness is everything. The microgreens and herbs delivered by Harvest Fresh are consistently vibrant and aromatic. They have become my primary source for premium ingredients.",
            date: "June 05, 2024",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 3,
            name: "Priya Iyer",
            role: "Verified Buyer",
            rating: 4,
            text: "I love the zero-plastic packaging! The produce stays fresh for much longer than what I used to get from the supermarket. I'm especially impressed with the seasonal fruit hampers.",
            date: "May 28, 2024",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            id: 4,
            name: "Sanjay Gupta",
            role: "Home Gardener",
            rating: 5,
            text: "The consultation with the lead farmer was incredibly helpful for my backyard veggie patch. Their knowledge about organic pest control is gold. Highly recommended for any aspiring grower!",
            date: "May 15, 2024",
            image: "https://randomuser.me/api/portraits/men/85.jpg"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-stone-50 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-serif text-stone-900 mb-4">Harvest Stories</h1>
                    <p className="text-stone-600">Discover how Harvest Fresh is bringing the farm-to-table experience to our community.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {reviews.map((review) => (
                        <motion.div
                            variants={item}
                            key={review.id}
                            className="bg-white p-8 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center space-x-4">
                                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h3 className="font-medium text-stone-900">{review.name}</h3>
                                        <span className="text-sm text-stone-500">{review.role}</span>
                                    </div>
                                </div>
                                <Quote className="text-emerald-200" size={32} />
                            </div>

                            <div className="flex text-emerald-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-emerald-500" : "text-stone-200"} />
                                ))}
                            </div>

                            <p className="text-stone-600 leading-relaxed italic">"{review.text}"</p>

                            <div className="mt-6 pt-4 border-t border-stone-50 text-xs text-stone-400">
                                {review.date}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;
