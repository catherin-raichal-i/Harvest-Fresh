import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { cartCount, isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useCart();
    const { user, logout } = useAuth();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (location.pathname !== '/categories') {
            navigate('/categories');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Farm Shop', path: '/categories' },
        { name: 'Our Farm', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Delivery', path: '/delivery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-serif tracking-in-expand font-bold bg-gradient-to-r from-emerald-700 to-green-900 bg-clip-text text-transparent">
                            HARVEST FRESH
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200
                  ${location.pathname === link.path ? 'text-emerald-900' : 'text-gray-600 hover:text-emerald-800'}
                `}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-800"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Icons and Actions */}
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        {/* Search (Desktop) */}
                        <div className="hidden lg:flex items-center">
                            <div className="relative flex items-center">
                                <AnimatePresence>
                                    {isSearchOpen && (
                                        <motion.div
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{ width: 300, opacity: 1 }}
                                            exit={{ width: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                                            className="overflow-hidden mr-2"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Search our harvest..."
                                                value={searchQuery}
                                                onChange={handleSearchChange}
                                                className="w-full bg-white border-b-2 border-emerald-800 px-4 py-2 text-sm focus:outline-none placeholder:text-stone-400 placeholder:italic bg-transparent"
                                                autoFocus
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <button
                                    onClick={() => {
                                        setIsSearchOpen(!isSearchOpen);
                                        if (isUserMenuOpen) setIsUserMenuOpen(false);
                                    }}
                                    className="text-gray-600 hover:text-emerald-800 transition-colors z-10 p-2"
                                >
                                    {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Cart (Desktop & Mobile) */}
                        <Link to="/cart" className="text-gray-600 hover:text-emerald-800 transition-transform hover:scale-110 relative p-2">
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-1 bg-emerald-800 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* User Menu (Desktop) */}
                        <div className="hidden lg:flex items-center">
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => {
                                            setIsUserMenuOpen(!isUserMenuOpen);
                                            if (isSearchOpen) setIsSearchOpen(false);
                                        }}
                                        className="flex items-center space-x-2 text-gray-600 hover:text-emerald-800 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                                            <User size={18} />
                                        </div>
                                        <span className="text-sm font-medium">{user.name.split(' ')[0]}</span>
                                    </button>

                                    <AnimatePresence>
                                        {isUserMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute right-0 mt-2 w-48 bg-white border border-stone-100 shadow-xl rounded-sm py-2 z-50"
                                            >
                                                <div className="px-4 py-2 border-b border-stone-50 mb-1 text-xs text-stone-400 uppercase tracking-widest font-bold">Account</div>
                                                <Link to="/profile" className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50" onClick={() => setIsUserMenuOpen(false)}>My Profile</Link>
                                                <Link to="/orders" className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50" onClick={() => setIsUserMenuOpen(false)}>Orders</Link>
                                                <button
                                                    onClick={() => {
                                                        logout();
                                                        setIsUserMenuOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                                >
                                                    <LogOut size={14} /> Logout
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link to="/login" className="text-gray-600 hover:text-emerald-800 transition-colors p-2">
                                    <User size={20} />
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-900 hover:text-emerald-800 focus:outline-none p-2"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors 
                    ${location.pathname === link.path ? 'bg-emerald-50 text-emerald-900' : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-900'}
                  `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-stone-100">
                                {user ? (
                                    <div className="space-y-1">
                                        <div className="px-3 py-2 text-sm font-bold text-stone-400 uppercase tracking-widest">Hi, {user.name}</div>
                                        <Link
                                            to="/profile"
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-900 rounded-md"
                                        >
                                            My Profile
                                        </Link>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsOpen(false);
                                            }}
                                            className="w-full text-left px-3 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-md flex items-center gap-2"
                                        >
                                            <LogOut size={18} /> Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        to="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-3 text-base font-medium text-emerald-900 bg-emerald-50 rounded-md text-center"
                                    >
                                        Sign In
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
