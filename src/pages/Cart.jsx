import React, { useState } from 'react';
import { paymentConfig } from '../config/paymentConfig';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [paymentMethod, setPaymentMethod] = useState('phonepe');

    // Item-based Random Shipping Logic
    // Generate a consistent "random" shipping cost based on item ID (range: ₹50 - ₹250)
    const getShippingCost = (id) => {
        return (id * 53) % 200 + 50;
    };

    const totalShippingCost = cart.reduce((total, item) => total + (getShippingCost(item.id) * item.quantity), 0);
    const finalTotal = cartTotal + totalShippingCost;

    const handleCheckout = async () => {
        if (!user) {
            navigate('/login', { state: { from: '/cart' } });
            return;
        }

        navigate('/payment', {
            state: {
                amount: finalTotal,
                method: paymentMethod,
                cart: cart
            }
        });
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-stone-50 px-4">
                <div className="bg-white p-8 rounded-full shadow-md mb-6">
                    <ShoppingBag size={48} className="text-stone-300" />
                </div>
                <h2 className="text-2xl font-serif text-stone-900 mb-2">Your Harvest Crate is Empty</h2>
                <p className="text-stone-500 mb-8">Looks like you haven't added any fresh produce yet.</p>
                <Link
                    to="/categories"
                    className="bg-emerald-900 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2"
                >
                    Back to Market <ArrowRight size={18} />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-stone-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-serif text-stone-900 mb-8">Your Harvest Crate</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="flex-grow">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <AnimatePresence>
                                {cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-col sm:flex-row items-center gap-6 p-6 border-b border-stone-100 last:border-b-0"
                                    >
                                        <div className="w-24 h-24 bg-stone-100 rounded-md overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex-grow text-center sm:text-left">
                                            <h3 className="font-serif text-lg text-stone-900">{item.name}</h3>
                                            <p className="text-sm text-stone-500 mb-2">{item.category}</p>
                                            <p className="font-medium text-emerald-900">₹{item.price.toLocaleString()}</p>
                                            <p className="text-xs text-stone-400 mt-1">+ ₹{getShippingCost(item.id)} Freshness Fee</p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 text-stone-600 transition-colors"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} className="pointer-events-none" />
                                            </button>
                                            <span className="w-8 text-center font-medium text-stone-900">{item.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 text-stone-600 transition-colors"
                                            >
                                                <Plus size={14} className="pointer-events-none" />
                                            </button>
                                        </div>

                                        <div className="text-right min-w-[80px]">
                                            <p className="font-medium text-stone-900 mb-2">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 hover:text-red-600 text-sm flex items-center gap-1 justify-center sm:justify-end transition-colors"
                                            >
                                                <Trash2 size={14} className="pointer-events-none" /> Remove
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-96 flex-shrink-0">
                        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                            <h2 className="font-serif text-xl text-stone-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-stone-600">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-stone-600">
                                    <span>Logistics Fee</span>
                                    {totalShippingCost === 0 ? (
                                        <span className="text-green-600">Free</span>
                                    ) : (
                                        <span>₹{totalShippingCost.toLocaleString()}</span>
                                    )}
                                </div>
                                <div className="pt-4 border-t border-stone-100 flex justify-between font-serif text-lg text-stone-900">
                                    <span>Total</span>
                                    <span>₹{finalTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Payment Method Selection */}
                            <div className="mb-6 space-y-3">
                                <p className="font-medium text-stone-900 mb-2">Select Payment Method</p>

                                <label className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-colors ${paymentMethod === 'phonepe' ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200 hover:bg-stone-50'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="phonepe"
                                        checked={paymentMethod === 'phonepe'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="text-emerald-600 focus:ring-emerald-500"
                                    />
                                    <span className="font-medium text-stone-700">PhonePe</span>
                                </label>

                                <label className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-colors ${paymentMethod === 'gpay' ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200 hover:bg-stone-50'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="gpay"
                                        checked={paymentMethod === 'gpay'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="text-emerald-600 focus:ring-emerald-500"
                                    />
                                    <span className="font-medium text-stone-700">Google Pay</span>
                                </label>

                                <label className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-colors ${paymentMethod === 'razorpay' ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200 hover:bg-stone-50'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="razorpay"
                                        checked={paymentMethod === 'razorpay'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="text-emerald-600 focus:ring-emerald-500"
                                    />
                                    <span className="font-medium text-stone-700">Razorpay / Cards</span>
                                </label>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-emerald-900 text-white py-4 rounded-md hover:bg-emerald-800 transition-colors font-medium text-lg shadow-lg shadow-emerald-200"
                            >
                                Pay ₹{finalTotal.toLocaleString()}
                            </button>

                            <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
                                {/* Payment Icons */}
                                <div className="h-6 px-2 bg-stone-200 rounded flex items-center justify-center text-[10px] font-bold text-stone-600">Secure</div>
                                <div className="h-6 px-2 bg-stone-200 rounded flex items-center justify-center text-[10px] font-bold text-stone-600">Encrypted</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
