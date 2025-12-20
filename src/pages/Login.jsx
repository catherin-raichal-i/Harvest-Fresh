import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const res = login(email, password);
        if (res.success) {
            const from = location.state?.from || '/';
            navigate(from, { replace: true });
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
                        <LogIn size={32} />
                    </div>
                    <h2 className="text-3xl font-serif text-stone-900">Welcome Back</h2>
                    <p className="text-stone-500 mt-2">Signs in to your Lumière account</p>
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
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Password</label>
                                <Link to="/forgot-password" size="sm" className="text-xs text-amber-800 hover:text-amber-900">Forgot?</Link>
                            </div>
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

                    <button
                        type="submit"
                        className="w-full bg-stone-900 text-white py-4 rounded-sm font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                        Sign In
                    </button>

                    <p className="text-center text-stone-500 text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-amber-800 font-medium hover:text-amber-900 border-b border-amber-800">
                            Create one now
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
