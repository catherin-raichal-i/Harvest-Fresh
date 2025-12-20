import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQs = [
    {
        question: "How fresh is the produce?",
        answer: "We harvest our produce only after you place your order. Most items are harvested within 24 hours of delivery, ensuring you get the maximum nutritional value and the best possible flavor."
    },
    {
        question: "Is all your produce certified organic?",
        answer: "Yes, 100% of our produce is grown using organic practices. We are certified by multiple organic standards boards and strictly avoid synthetic pesticides, herbicides, and GMOs."
    },
    {
        question: "Do you deliver to my area?",
        answer: "We currently deliver within a 50km radius of our farm in the Shivalik Hills. This includes Dehradun, Rishikesh, and surrounding areas. For orders over ₹2,000, delivery is completely free."
    },
    {
        question: "What is your 'Freshness Guarantee'?",
        answer: "If anyitem in your harvest crate doesn't meet your freshness expectations, let us know within 6 hours of delivery. We will replace the item or provide a full refund for that specific produce, no questions asked."
    },
    {
        question: "How should I store my farm-fresh produce?",
        answer: "We include specific storage tips with every order. Generally, leafy greens should be kept damp in the fridge, while root vegetables prefer a cool, dark place. Most of our packaging is breathable to help maintain freshness."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-stone-50 min-h-screen py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-serif text-stone-900 mb-4">Farm FAQ</h1>
                    <p className="text-stone-600">Got questions about our harvest? Find everything you need to know about our organic produce and delivery.</p>
                </motion.div>

                <div className="space-y-4">
                    {FAQs.map((faq, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left active:bg-stone-50 transition-colors"
                            >
                                <span className={`font-medium text-lg ${activeIndex === index ? 'text-emerald-800' : 'text-stone-900'}`}>
                                    {faq.question}
                                </span>
                                {activeIndex === index ? (
                                    <Minus className="text-emerald-800 flex-shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-stone-400 flex-shrink-0" size={20} />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
