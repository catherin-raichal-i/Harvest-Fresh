import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, Check } from 'lucide-react';

import { products, getRelatedProducts } from '../data/inventory';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    const { user } = useAuth();
    const navigate = useNavigate();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Produce item not found.</p>
                <Link to="/categories" className="text-emerald-800 ml-4 underline">Back to Marketplace</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/categories" className="inline-flex items-center text-stone-500 hover:text-stone-900 mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Marketplace
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-stone-50 rounded-lg overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-emerald-800 font-medium tracking-wide text-sm uppercase mb-2">{product.category}</p>
                        <h1 className="text-4xl font-serif text-stone-900 mb-4">{product.name}</h1>
                        <p className="text-2xl font-light text-stone-900 mb-6">₹{product.price.toLocaleString()} <span className="text-sm text-stone-500">{product.unit}</span></p>

                        <p className="text-stone-600 leading-relaxed mb-8">
                            {product.description || "Fresh from our farm to your table. Grown with care using sustainable, organic practices to ensure the highest quality and nutritional value."}
                        </p>

                        <div className="mb-8">
                            <button
                                onClick={() => {
                                    if (!user) {
                                        navigate('/login', { state: { from: `/product/${id}` } });
                                        return;
                                    }
                                    addToCart(product);
                                    alert(`${product.name} added to crate!`);
                                }}
                                className="w-full bg-stone-900 text-white py-4 rounded-md hover:bg-stone-800 transition-colors font-medium text-lg"
                            >
                                Add to Crate
                            </button>
                        </div>

                        <div className="border-t border-stone-100 pt-6 space-y-3 text-sm text-stone-500">
                            <div className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Harvested within 24 hours</div>
                            <div className="flex items-center gap-2"><Check size={16} className="text-green-600" /> 100% Organic Certified</div>
                            <div className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Sustainable packaging used</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Related Products */}
            <div className="max-w-7xl mx-auto mt-32">
                <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">Fresh Picks for You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {getRelatedProducts(id, 4).map((related) => (
                        <Link to={`/product/${related.id}`} key={related.id} className="group block" onClick={() => window.scrollTo(0, 0)}>
                            <div className="aspect-[4/5] bg-stone-50 overflow-hidden mb-4 relative rounded-sm">
                                <img
                                    src={related.image}
                                    alt={related.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-serif text-lg text-stone-900 group-hover:text-emerald-800 transition-colors">{related.name}</h3>
                            <p className="text-stone-500">₹{related.price.toLocaleString()} <span className="text-xs">{related.unit}</span></p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
