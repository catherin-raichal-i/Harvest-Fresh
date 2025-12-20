import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { KeyRound, Mail, Lock, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const { checkUserExists, resetPassword } = useAuth();
    const navigate = useNavigate();

    const handleVerifyEmail = (e) => {
        e.preventDefault();
        setError('');
        if (checkUserExists(email)) {
            setStep(2);
        } else {
            setError('No account found with this email address.');
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        setError('');

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        const res = resetPassword(email, newPassword);
        if (res.success) {
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 3000);
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
                        <KeyRound size={32} />
                    </div>
                    <h2 className="text-3xl font-serif text-stone-900">Reset Password</h2>
                    <p className="text-stone-500 mt-2">
                        {success
                            ? "Password updated successfully!"
                            : step === 1
                                ? "Enter your email to reset your password"
                                : "Enter your new password below"}
                    </p>
                </div>

                {success ? (
                    <div className="text-center space-y-6">
                        <div className="flex justify-center">
                            <CheckCircle2 size={64} className="text-green-500" />
                        </div>
                        <p className="text-stone-600">You will be redirected to the login page in a few seconds.</p>
                        <Link
                            to="/login"
                            className="inline-block w-full bg-stone-900 text-white py-4 rounded-sm font-medium hover:bg-stone-800 transition-all text-center"
                        >
                            Go to Login Now
                        </Link>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={step === 1 ? handleVerifyEmail : handleResetPassword}>
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm flex items-center gap-3">
                                <AlertCircle size={18} />
                                <p className="text-sm">{error}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            {step === 1 ? (
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
                            ) : (
                                <>
                                    <div className="relative">
                                        <label className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">New Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                                            <input
                                                type="password"
                                                required
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">Confirm Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                                            <input
                                                type="password"
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-stone-900 text-white py-4 rounded-sm font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                        >
                            {step === 1 ? 'Verify Email' : 'Reset Password'}
                        </button>

                        <div className="text-center">
                            <Link to="/login" className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 transition-colors">
                                <ArrowLeft size={14} className="mr-2" /> Back to Login
                            </Link>
                        </div>
                    </form>
                )}
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
