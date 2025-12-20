export const categories = ['All', 'Vegetables', 'Fruits', 'Herbs'];

export const products = [
    // --- VEGETABLES (LOCAL) ---
    {
        id: 1,
        name: 'Country Tomatoes',
        price: 90,
        category: 'Vegetables',
        unit: '/ kg',
        image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?_gl=1*ykcja5*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDU0NDEkajM4JGwwJGgw',
        description: "Locally grown tomatoes with rich flavor and natural acidity. Perfect for everyday cooking, gravies, and rasam."
    },
    {
        id: 3,
        name: 'Fresh Palak (Spinach)',
        price: 50,
        category: 'Vegetables',
        unit: '/ bunch',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
        description: "Farm-fresh palak harvested daily from nearby fields. High in iron and ideal for curries, dals, and stir-fries."
    },
    {
        id: 5,
        name: 'Local Green Beans',
        price: 70,
        category: 'Vegetables',
        unit: '/ kg',
        image: 'https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?_gl=1*1kj591b*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDU5MTIkajUxJGwwJGgw',
        description: "Tender and crunchy green beans sourced from local farmers. Great for poriyal, stir-fry, and sambar."
    },
    {
        id: 7,
        name: 'Green Chillies',
        price: 80,
        category: 'Vegetables',
        unit: '/ kg',
        image: 'https://images.pexels.com/photos/33661721/pexels-photo-33661721.jpeg?_gl=1*140j3c0*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDU3NzkkajMyJGwwJGgw',
        description: "Fresh locally cultivated capsicum with mild spice and crisp texture. Ideal for curries and mixed vegetable dishes."
    },
    {
        id: 9,
        name: 'Desi Carrots',
        price: 60,
        category: 'Vegetables',
        unit: '/ kg',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
        description: "Naturally sweet Indian carrots grown in open fields. Perfect for salads, carrot poriyal, and halwa."
    },
    {
        id: 10,
        name: 'Local Cauliflower',
        price: 85,
        category: 'Vegetables',
        unit: '/ pc',
        image: 'https://images.pexels.com/photos/10899530/pexels-photo-10899530.jpeg?_gl=1*1h4hgxs*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDYwNjkkajYwJGwwJGgw',
        description: "Fresh white cauliflower sourced from nearby farms. Best for curries, fry, and paratha stuffing."
    },

    // --- FRUITS (LOCAL) ---
    {
        id: 2,
        name: 'Robusta Bananas',
        price: 55,
        category: 'Fruits',
        unit: '/ dozen',
        image: 'https://w0.peakpx.com/wallpaper/62/682/HD-wallpaper-banana-fruits-bunch.jpg',
        description: "Locally ripened robusta bananas. Naturally sweet and energy-rich, perfect for daily consumption."
    },
    {
        id: 4,
        name: 'Fresh Guava',
        price: 90,
        category: 'Fruits',
        unit: '/ kg',
        image:'https://sarvodayainstitute.org/cdn/shop/products/image_9bfe6cf2-5f6e-4d14-9f9a-0b7853cf4b2e.jpg?v=1682071244',
        description: "Juicy and aromatic guavas from local orchards. High in vitamin C and great for snacking."
    },
    {
        id: 8,
        name: 'Papaya',
        price: 60,
        category: 'Fruits',
        unit: '/ pc',
        image: 'https://images.pexels.com/photos/28613331/pexels-photo-28613331.jpeg?_gl=1*1o7itpm*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDYzMjUkajEwJGwwJGgw',
        description: "Fresh farm-grown papaya, rich in digestive enzymes and perfect for breakfast bowls."
    },
    {
        id: 11,
        name: 'Seasonal Mangoes',
        price: 180,
        category: 'Fruits',
        unit: '/ kg',
        image: 'https://images.pexels.com/photos/5097708/pexels-photo-5097708.jpeg?_gl=1*1jvme17*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDY0MzkkajU5JGwwJGgw',
        description: "Sweet seasonal mangoes sourced directly from local farmers. Juicy, fragrant, and naturally ripened."
    },
    {
        id: 12,
        name: 'Custard Apple (Sitaphal)',
        price: 120,
        category: 'Fruits',
        unit: '/ pc',
        image: 'https://www.farmatma.in/wp-content/uploads/2024/01/custard-apple-farm.jpg',
        description: "Fresh local custard apple with balanced sweetness and tang. Ideal for juices and desserts."
    },
    {
        id: 13,
        name: 'Lemon',
        price: 70,
        category: 'Fruits',
        unit: '/ kg',
        image: 'https://images.pexels.com/photos/32812605/pexels-photo-32812605.jpeg?_gl=1*1pcatbf*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDY3NzckajU1JGwwJGgw',
        description: "Juicy lemon sourced from nearby orchards. Refreshing and hydrating, perfect for fresh juice."
    },

    // --- HERBS (LOCAL) ---
    {
        id: 6,
        name: 'Fresh Pudina (Mint)',
        price: 30,
        category: 'Herbs',
        unit: '/ bunch',
        image: 'https://howtoculinaryherbgarden.com/wp-content/uploads/2021/09/Large-Mint-Plant-Growing-in-Garden.jpg',
        description: "Locally grown pudina with a strong refreshing aroma. Ideal for chutneys, tea, and garnishing."
    },
    {
        id: 14,
        name: 'Curry Leaves',
        price: 20,
        category: 'Herbs',
        unit: '/ bunch',
        image: 'https://inheritedseeds.com/cdn/shop/articles/curry3.jpg?v=1690518338',
        description: "Fresh curry leaves plucked daily from local gardens. Essential for South Indian cooking."
    },
    {
        id: 15,
        name: 'Coriander Leaves',
        price: 25,
        category: 'Herbs',
        unit: '/ bunch',
        image: 'https://images.pexels.com/photos/10329642/pexels-photo-10329642.jpeg?_gl=1*er53do*_ga*MTI1MDIxOTU0Mi4xNzYyMTY0MDk0*_ga_8JE65Q40S6*czE3NjYyNDQxMDckbzckZzEkdDE3NjYyNDY5NjUkajkkbDAkaDA.',
        description: "Bright and fragrant coriander leaves used for garnishing and fresh chutneys."
    }
];

export const getProductById = (id) =>
    products.find(p => p.id === parseInt(id));

export const getFeaturedProducts = (limit = 4) =>
    products.slice(0, limit);

export const getRelatedProducts = (currentProductId, limit = 4) => {
    return products
        .filter(p => p.id !== parseInt(currentProductId))
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);
};
