import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CreditCard, Smartphone, CheckCircle2, XCircle, Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { paymentConfig } from '../config/paymentConfig';

const PaymentGateway = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { clearCart } = useCart();
    const { user } = useAuth();
    const { amount, method, cart } = location.state || { amount: 0, method: 'phonepe', cart: [] };

    const [status, setStatus] = useState('input'); // input, processing, success, failure
    const [cardData, setCardData] = useState({ number: '', expiry: '', cvc: '', name: '' });

    useEffect(() => {
        if (!location.state) {
            navigate('/cart');
        }
    }, [location.state, navigate]);

    const handleProcessPayment = (e) => {
        if (e) e.preventDefault();
        setStatus('processing');

        // Simulate real-time processing delay
        setTimeout(() => {
            const isSuccess = Math.random() > 0.1; // 90% success rate
            if (isSuccess) {
                // Save order to localStorage
                const orderId = `HARV-${Math.floor(Math.random() * 1000000000)}`;
                const newOrder = {
                    id: orderId,
                    userEmail: user.email,
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    amount: amount,
                    method: method,
                    itemsCount: cart.reduce((total, item) => total + item.quantity, 0),
                    items: cart,
                    status: 'Processing'
                };

                const existingOrders = JSON.parse(localStorage.getItem('lumiere_orders') || '[]');
                existingOrders.unshift(newOrder); // Add to beginning
                localStorage.setItem('lumiere_orders', JSON.stringify(existingOrders));

                setStatus('success');
                clearCart();
            } else {
                setStatus('failure');
            }
        }, 3000);
    };

    const renderInputStage = () => {
        if (method === 'razorpay' || method === 'phonepe' || method === 'gpay') {
            const displayMethod = method === 'razorpay' ? 'Card/All-in-One' : method === 'phonepe' ? 'PhonePe' : 'Google Pay';
            return (
                <div className="text-center space-y-6 py-4">
                    <div className="flex justify-center">
                        <div className="p-4 bg-white border-2 border-emerald-100 rounded-xl shadow-inner relative group">
                            {/* Simulated QR Code */}
                            <div className="w-48 h-48 bg-stone-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="grid grid-cols-4 gap-1 p-2">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className={`w-8 h-8 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`}></div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                        <div className="w-8 h-8 bg-emerald-800 rounded-md"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Scanning Animation */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-0.5 bg-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.5)] z-10 pointer-events-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm text-stone-500 font-medium">Scan to pay using any UPI App or Card</p>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-xs text-stone-400 font-bold uppercase tracking-widest leading-none">Merchant UPI ID</span>
                            <span className="text-lg font-mono text-emerald-900 bg-emerald-50 px-3 py-1 rounded border border-emerald-100">{paymentConfig.merchantDetails.upiId}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-stone-400 text-xs mt-2">
                            <span>Phone: {paymentConfig.merchantDetails.phoneNumber}</span>
                            <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                            <span>{paymentConfig.merchantDetails.merchantName}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-emerald-700 font-medium bg-emerald-50 py-2 rounded-lg">
                        <Loader2 size={16} className="animate-spin" />
                        Awaiting confirmation...
                    </div>

                    <button onClick={handleProcessPayment} className="w-full bg-stone-900 text-white py-4 rounded-md font-medium hover:bg-stone-800 transition-all shadow-lg">
                        Simulate Payment Success
                    </button>

                    {method === 'razorpay' && (
                        <p className="text-[10px] text-stone-400 italic">
                            Scanning this QR supports Credit Cards, Debit Cards, and UPI.
                        </p>
                    )}
                </div>
            );
        }

        return (
            <div className="text-center space-y-6 py-6">
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-700 mx-auto">
                    <Smartphone size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-serif text-stone-900 mb-2">Cash on Delivery</h3>
                    <p className="text-stone-500 text-sm">You will pay ₹{amount.toLocaleString()} when your fresh harvest arrives at your doorstep.</p>
                </div>
                <button onClick={handleProcessPayment} className="w-full bg-stone-900 text-white py-4 rounded-md font-medium hover:bg-stone-800 transition-all">
                    Confirm Order
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <AnimatePresence mode="wait">
                    {status === 'input' && (
                        <motion.div
                            key="input"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100"
                        >
                            <div className="p-8 border-b border-stone-50 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Payment Method</p>
                                    <h2 className="text-2xl font-serif text-stone-900 capitalize">{method} Gateway</h2>
                                </div>
                                <ShieldCheck className="text-emerald-700" size={32} />
                            </div>
                            <div className="p-8">
                                {renderInputStage()}
                            </div>
                            <div className="p-4 bg-stone-50 text-center">
                                <button onClick={() => navigate('/cart')} className="text-stone-400 hover:text-stone-800 text-xs flex items-center justify-center gap-1 mx-auto">
                                    <ArrowLeft size={12} /> Cancel and return to cart
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {status === 'processing' && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-2xl shadow-2xl p-12 text-center space-y-8"
                        >
                            <div className="relative w-24 h-24 mx-auto">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-4 border-stone-100 border-t-emerald-800 rounded-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-emerald-800">
                                    <CreditCard size={32} />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif text-stone-900 mb-2">Processing Payment</h2>
                                <p className="text-stone-500">Contacting bank servers. Please do not refresh or close this window.</p>
                            </div>
                            <div className="flex gap-1 justify-center">
                                {[0, 1, 2].map(i => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                        className="w-2 h-2 bg-emerald-800 rounded-full"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {status === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-2xl shadow-2xl p-12 text-center space-y-6"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto"
                            >
                                <CheckCircle2 size={48} />
                            </motion.div>
                            <div>
                                <h2 className="text-3xl font-serif text-stone-900 mb-2">Payment Successful!</h2>
                                <p className="text-stone-500">Thank you for your harvest purchase. Your organic produce is being prepared for shipment.</p>
                            </div>
                            <div className="bg-stone-50 p-4 rounded-lg text-sm text-stone-600 font-mono">
                                TXN ID: HARV-{Math.floor(Math.random() * 1000000000)}
                            </div>
                            <button
                                onClick={() => navigate('/orders')}
                                className="w-full bg-stone-900 text-white py-4 rounded-md font-medium hover:bg-stone-800 transition-all shadow-lg"
                            >
                                View My Orders
                            </button>
                        </motion.div>
                    )}

                    {status === 'failure' && (
                        <motion.div
                            key="failure"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-2xl shadow-2xl p-12 text-center space-y-6"
                        >
                            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-red-600 mx-auto">
                                <XCircle size={48} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif text-stone-900 mb-2">Payment Failed</h2>
                                <p className="text-stone-500">We couldn't process your payment. This could be due to insufficient funds or a temporary server error.</p>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setStatus('input')}
                                    className="flex-1 border-2 border-stone-200 text-stone-900 py-3 rounded-md font-medium hover:bg-stone-50 transition-all"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => navigate('/cart')}
                                    className="flex-1 bg-stone-900 text-white py-3 rounded-md font-medium hover:bg-stone-800 transition-all"
                                >
                                    Back to Cart
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PaymentGateway;
