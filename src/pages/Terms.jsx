import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="bg-stone-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-sm">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-serif text-stone-900 mb-8 border-b border-stone-100 pb-4">Terms & Farm Policies</h1>

                    <section className="mb-10">
                        <h2 className="text-2xl font-serif text-stone-900 mb-4">Terms of Harvest</h2>
                        <p className="text-stone-600 mb-4 leading-relaxed">
                            Welcome to Harvest Fresh. By accessing our website and ordering our farm-fresh produce, you agree to be bound by these Terms of Service.
                            We reserve the right to adjust our seasonal offerings and delivery schedules based on harvest availability and weather conditions.
                        </p>
                        <p className="text-stone-600 leading-relaxed">
                            All content on this site, including farm photography and nutritional information, is the property of Harvest Fresh and is protected by copyright laws.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-serif text-stone-900 mb-4">Privacy & Community</h2>
                        <p className="text-stone-600 mb-4 leading-relaxed">
                            Your privacy is paramount. We only collect information necessary to deliver your harvest crates and communicate farm updates.
                            We never share your personal data with third-party marketers.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-serif text-stone-900 mb-4">Delivery & Freshness</h2>
                        <h3 className="text-lg font-medium text-stone-800 mb-2">Delivery Zones</h3>
                        <p className="text-stone-600 mb-4 leading-relaxed">
                            We currently serve a 50km radius from our farm in the Shivalik Hills. Delivery is free for all orders over ₹2,000.
                            Standard delivery occurs within 24 hours of harvest to ensure peak freshness.
                        </p>
                        <h3 className="text-lg font-medium text-stone-800 mb-2">The Freshness Guarantee</h3>
                        <p className="text-stone-600 leading-relaxed">
                            We accept reports of damaged or non-fresh produce within 6 hours of delivery. As our items are perishable,
                            we provide replacements or credits rather than traditional returns. Custom hampers and seasonal surprise boxes are non-refundable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-stone-900 mb-4">Organic Warranty</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Every Harvest Fresh item comes with a guarantee of being 100% organic and free from synthetic chemicals.
                            Our soil health and sustainable practices are our promise to you. We offer complimentary soil reports for
                            members interested in our regenerative farming methods.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
