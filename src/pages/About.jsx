import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <span className="text-emerald-700 font-medium tracking-widest text-sm uppercase">About Harvest Fresh</span>
                    <h1 className="text-5xl font-serif text-stone-900 mt-4 mb-6">Nourishing Communities, Protecting Soils</h1>
                    <p className="text-xl text-stone-600 leading-relaxed font-light">
                        We believe that food should be grown in harmony with nature, harvested with care, and delivered with a commitment to absolute freshness.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-emerald-200 transform translate-x-4 translate-y-4 -z-10 rounded-sm" />
                        <img
                            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Sustainable Farming"
                            className="rounded-sm shadow-xl w-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif mb-6 text-stone-900">Our Heritage</h2>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            What started as a small family plot in 1995 has grown into a regional leader in regenerative agriculture. Harvest Fresh was founded on the principle that organic farming isn't just a method—it's a responsibility.
                        </p>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            Every vegetable and fruit in our shop is grown on our own farm or sourced from a hand-picked network of local, chemical-free partners. By choosing Harvest Fresh, you're not just buying food; you're supporting a healthier ecosystem.
                        </p>
                        <div className="flex gap-8 mt-10">
                            <div>
                                <span className="block text-4xl font-serif text-emerald-800">28+</span>
                                <span className="text-stone-500 text-sm">Years Farming</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-serif text-emerald-800">120k</span>
                                <span className="text-stone-500 text-sm">Acres Regenerated</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-serif text-emerald-800">100%</span>
                                <span className="text-stone-500 text-sm">Organic Certified</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
