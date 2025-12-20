import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters")
});

const Contact = () => {
    const { register, handleSubmit, formState: { errors, headers, isSubmitting }, reset } = useForm({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
        alert('Message sent successfully! Our farmers will get back to you soon.');
        reset();
    };

    return (
        <div className="bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-serif text-stone-900 mb-4">Connect with the Farm</h1>
                    <p className="text-stone-600">Have questions about our harvest or your order? We're here to help.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100 h-full">
                            <h2 className="text-2xl font-serif mb-8 text-stone-900">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-50 p-3 rounded-full text-emerald-800">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-stone-900">The Farm Stall</h3>
                                        <p className="text-stone-600 mt-1">12/45, Mango Grove Road<br /> Sirumalai Hills,<br/> Dindigul, TN 624003</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-50 p-3 rounded-full text-emerald-800">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-stone-900">Phone</h3>
                                        <p className="text-stone-600 mt-1">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-50 p-3 rounded-full text-emerald-800">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-stone-900">Email</h3>
                                        <p className="text-stone-600 mt-1">hello@harvestfresh.farm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 w-full h-48 bg-stone-100 rounded-lg flex items-center justify-center text-stone-400">
                                {/* Farm Location Map Placeholder */}
                                <iframe
                                    src="https://www.google.com/maps?q=10.350142,77.989543&z=15&output=embed"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
                            <h2 className="text-2xl font-serif mb-8 text-stone-900">Send a Message</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:border-emerald-800'} focus:ring-1 focus:ring-emerald-800 outline-none transition-colors`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:border-emerald-800'} focus:ring-1 focus:ring-emerald-800 outline-none transition-colors`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                                    <textarea
                                        {...register("message")}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-stone-200 focus:border-emerald-800'} focus:ring-1 focus:ring-emerald-800 outline-none transition-colors`}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-stone-900 text-white py-4 rounded-md hover:bg-stone-800 transition-colors font-medium flex items-center justify-center disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>Send Message <Send size={18} className="ml-2" /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
