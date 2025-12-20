import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Orders = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    const allOrders = JSON.parse(localStorage.getItem('lumiere_orders') || '[]');
    const userOrders = allOrders.filter(order => order.userEmail === user.email);

    return (
        <div className="min-h-screen bg-stone-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-serif text-stone-900">Your Orders</h1>
                        <p className="text-stone-500 mt-2">Track and manage your fresh harvest deliveries</p>
                    </div>
                    <Link to="/profile" className="text-emerald-800 font-medium hover:underline text-sm">Account Settings</Link>
                </div>

                <div className="space-y-4">
                    {userOrders.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-lg border border-stone-100 shadow-sm">
                            <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-stone-300 mx-auto mb-4">
                                <Package size={32} />
                            </div>
                            <h3 className="text-xl font-serif text-stone-900 mb-2">No orders yet</h3>
                            <p className="text-stone-500 mb-6 font-light">Your organic harvest journey starts here.</p>
                            <Link to="/categories" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-colors">
                                Browse Farm Shop
                            </Link>
                        </div>
                    ) : (
                        userOrders.map((order, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={order.id}
                                className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-800 flex-shrink-0">
                                        <Package size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-stone-900">{order.id}</h3>
                                            <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full uppercase font-bold tracking-tighter">{order.method}</span>
                                        </div>
                                        <p className="text-sm text-stone-500">{order.date} • {order.itemsCount} {order.itemsCount === 1 ? 'item' : 'items'}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-6">
                                    <div>
                                        <p className="text-xs text-stone-400 font-bold uppercase tracking-widest mb-1">Status</p>
                                        <div className="flex items-center gap-1.5 text-emerald-700 text-sm font-medium">
                                            <CheckCircle2 size={16} />
                                            {order.status}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 font-bold uppercase tracking-widest mb-1">Total</p>
                                        <p className="font-bold text-stone-900">₹{order.amount.toLocaleString()}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}

                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-lg text-center mt-12">
                        <Clock size={32} className="text-emerald-800 mx-auto mb-4" />
                        <h3 className="font-serif text-xl text-stone-900 mb-2">Expecting a delivery?</h3>
                        <p className="text-stone-600 mb-6 max-w-md mx-auto italic">All our produce is harvested and shipped within 24 hours. Check your email for real-time harvest tracking.</p>
                        <Link
                            to="/categories"
                            className="inline-block bg-emerald-800 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-900 transition-colors"
                        >
                            Shop More Freshness
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
