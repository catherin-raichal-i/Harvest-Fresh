/**
 * Payment Gateway Configuration
 * 
 * Replace the placeholder values below with your actual Merchant IDs and API Keys 
 * obtained from your payment provider's dashboard (PhonePe, Razorpay, etc.).
 */

export const paymentConfig = {
    // MERCHANT SETTINGS - Change these to your own details
    merchantDetails: {
        upiId: "merchant@upi",      // Replace with your UPI ID
        phoneNumber: "9876543210",  // Replace with your Phone Number
        merchantName: "Lumière Harvest"
    },

    // PhonePe Configuration
    phonepe: {
        merchantId: "MERCHANTUAT",
        saltKey: "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399",
        saltIndex: 1,
        env: "UAT"
    },

    // Razorpay Configuration
    razorpay: {
        keyId: "rzp_test_YOUR_KEY_HERE",
        keySecret: "YOUR_KEY_SECRET_HERE"
    },

    // Google Pay (UPI)
    gpay: {
        vpa: "merchant@upi",
        merchantName: "Lumière Jewelry"
    }
};
