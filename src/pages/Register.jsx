import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, AlertCircle } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const res = register(name, email, password);
        if (res.success) {
            navigate('/');
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white p-8 rounded-sm shadow-xl border border-stone-100"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-900 mb-4">
                        <UserPlus size={32} />
                    </div>
                    <h2 className="text-3xl font-serif text-stone-900">Create Account</h2>
                    <p className="text-stone-500 mt-2">Join the Lumière Inner Circle</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm flex items-center gap-3">
                            <AlertCircle size={18} />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="relative">
                            <label className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-stone-400">
                        By creating an account, you agree to our <Link to="/terms" className="text-amber-800 hover:text-amber-900 underline">Terms and Conditions</Link>.
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-stone-900 text-white py-4 rounded-sm font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-stone-500 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-amber-800 font-medium hover:text-amber-900 border-b border-amber-800">
                            Sign in instead
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    );
};

export default Register;
