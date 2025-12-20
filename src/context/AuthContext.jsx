import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in on mount
        const savedUser = localStorage.getItem('lumiere_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Simulate API call - check localStorage for registered users
        const users = JSON.parse(localStorage.getItem('lumiere_registered_users') || '[]');
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            const userData = { ...foundUser };
            delete userData.password; // Don't store password in state/session
            setUser(userData);
            localStorage.setItem('lumiere_user', JSON.stringify(userData));
            return { success: true };
        }
        return { success: false, message: 'Invalid email or password' };
    };

    const register = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem('lumiere_registered_users') || '[]');

        if (users.find(u => u.email === email)) {
            return { success: false, message: 'User already exists' };
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('lumiere_registered_users', JSON.stringify(users));

        // Auto login after register
        const userData = { name, email };
        setUser(userData);
        localStorage.setItem('lumiere_user', JSON.stringify(userData));

        return { success: true };
    };

    const resetPassword = (email, newPassword) => {
        const users = JSON.parse(localStorage.getItem('lumiere_registered_users') || '[]');
        const userIndex = users.findIndex(u => u.email === email);

        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem('lumiere_registered_users', JSON.stringify(users));
            return { success: true };
        }
        return { success: false, message: 'User not found' };
    };

    const checkUserExists = (email) => {
        const users = JSON.parse(localStorage.getItem('lumiere_registered_users') || '[]');
        return users.some(u => u.email === email);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('lumiere_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, resetPassword, checkUserExists, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
