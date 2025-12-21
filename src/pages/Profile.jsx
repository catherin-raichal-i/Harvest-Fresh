import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, ShieldCheck, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-stone-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden"
                >
                    {/* Header/Cover */}
                    <div className="h-32 bg-emerald-800 relative">
                        <div className="absolute -bottom-12 left-8">
                            <div className="w-24 h-24 rounded-full bg-white p-1 border-4 border-white shadow-md">
                                <div className="w-full h-full rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800">
                                    <User size={40} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pb-8 px-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h1 className="text-3xl font-serif text-stone-900">{user.name}</h1>
                                <p className="text-stone-500">Lumière Harvest Member</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-100 transition-colors"
                            >
                                <LogOut size={18} /> Sign Out
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest border-b border-stone-50 pb-2">Profile Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-stone-700">
                                        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 flex-shrink-0">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-stone-400 font-medium">Email Address</p>
                                            <p className="font-medium">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-stone-700">
                                        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 flex-shrink-0">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-stone-400 font-medium">Account Status</p>
                                            <p className="font-medium text-emerald-700 flex items-center gap-1">
                                                Verified Member
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-stone-700">
                                        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 flex-shrink-0">
                                            <Calendar size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-stone-400 font-medium">Member Since</p>
                                            <p className="font-medium">December 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest border-b border-stone-50 pb-2">Preferences</h3>
                                <div className="space-y-4">
                                    <div className="p-4 border border-stone-100 rounded-lg">
                                        <p className="text-sm font-medium text-stone-900 mb-1">Sustainable Delivery</p>
                                        <p className="text-xs text-stone-500">Prioritize grouped deliveries to reduce carbon footprint.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;

