import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import { products, categories } from '../data/inventory';

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(1500); // Updated to accommodate higher price items like mangoes
    const [showFilters, setShowFilters] = useState(false);

    const { searchQuery } = useCart() || { searchQuery: '' };

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
        const priceMatch = product.price <= priceRange;
        const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && priceMatch && searchMatch;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <div>
                    <h1 className="text-3xl font-serif text-stone-900">Marketplace</h1>
                    <p className="text-stone-500 mt-2">{filteredProducts.length} items harvested today</p>
                </div>

                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="mt-4 md:mt-0 flex items-center gap-2 bg-white border border-stone-200 px-4 py-2 rounded-md hover:bg-stone-50 md:hidden"
                >
                    <Filter size={18} /> Filters
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className={`w-full md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
                    <div className="bg-white p-6 rounded-lg border border-stone-100 sticky top-24">
                        <div className="mb-8">
                            <h3 className="font-serif text-lg mb-4 text-stone-900 border-b border-stone-100 pb-2">Category</h3>
                            <ul className="space-y-2">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`flex items-center w-full text-left py-2 px-3 rounded-md transition-all ${selectedCategory === cat ? 'bg-emerald-50 text-emerald-900 font-medium' : 'text-stone-600 hover:bg-stone-50'}`}
                                        >
                                            <span className="flex-grow">{cat}</span>
                                            {selectedCategory === cat && <Check size={16} />}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-serif text-lg mb-4 text-stone-900 border-b border-stone-100 pb-2">Price Per Unit</h3>
                            <div className="px-2">
                                <div className="flex justify-between text-sm text-stone-600 mb-2">
                                    <span>₹0</span>
                                    <span>₹{priceRange.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1500"
                                    step="10"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800"
                                />
                                <div className="text-center mt-2 text-stone-500 text-xs">
                                    Max Price: ₹{priceRange.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={product.id}
                                    className="group bg-white rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                >
                                    <Link to={`/product/${product.id}`} className="block">
                                        <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative cursor-pointer">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                                                <button className="bg-white text-stone-900 px-6 py-2 rounded-full font-medium text-sm hover:bg-emerald-50">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="p-4">
                                        <p className="text-xs text-stone-500 mb-1">{product.category}</p>
                                        <Link to={`/product/${product.id}`}>
                                            <h3 className="font-serif text-lg text-stone-900 mb-1 truncate hover:text-emerald-800 transition-colors">{product.name}</h3>
                                        </Link>
                                        <div className="flex items-baseline gap-1">
                                            <p className="text-emerald-900 font-medium">₹{product.price.toLocaleString()}</p>
                                            <span className="text-xs text-stone-400 font-light">{product.unit}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 bg-stone-50 rounded-lg">
                            <p className="text-stone-500 text-lg">No fresh items found matching your criteria.</p>
                            <button
                                onClick={() => { setSelectedCategory('All'); setPriceRange(500); }}
                                className="mt-4 text-emerald-800 underline hover:text-emerald-900"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Categories;
