const products = [
    {
        id: 101,
        name: "Apple iPhone 17",
        slug: "apple-iphone-17",
        brand: "Apple",
        category: "Mobiles",
        subCategory: "Smartphones",

        images: [
            "https://m.media-amazon.com/images/I/71JGCn1z1TL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/917GUQT35bL._SX679_.jpg"
        ],

        price: 69999,
        originalPrice: 79900,
        discountPercentage: 12,
        discountAmount: 9901,
        currency: "INR",

        rating: 4.6,
        totalReviews: 1248,
        totalRatings: 1560,

        stock: 24,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Apple iPhone 15 with A16 Bionic chip and advanced camera system.",

        description:
            "Apple iPhone 15 features a beautiful display, powerful A16 Bionic processor, advanced camera system and USB-C connectivity.",

        colors: [
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            },
            {
                name: "Blue",
                value: "#4A90E2",
                available: true,
                additionalPrice: 0
            },
            {
                name: "Pink",
                value: "#F4A6B8",
                available: true,
                additionalPrice: 1000
            }
        ],

        storageOptions: [
            {
                value: "128GB",
                price: 69999,
                available: true
            },
            {
                value: "256GB",
                price: 79999,
                available: true
            }
        ],

        specifications: {
            display: "6.1-inch Super Retina XDR",
            processor: "Apple A16 Bionic",
            ram: "6GB",
            storage: "128GB",
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "3349 mAh",
            operatingSystem: "iOS",
            connectivity: "5G, Wi-Fi, Bluetooth"
        },

        features: [
            "Super Retina XDR Display",
            "A16 Bionic Chip",
            "48MP Main Camera",
            "5G Connectivity",
            "Face ID",
            "USB-C Port"
        ],

        boxContents: [
            "iPhone 15",
            "USB-C Cable",
            "Documentation"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "2-4 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Apple Authorized Seller",
            rating: 4.8,
            verified: true
        },

        offers: [
            {
                title: "Bank Offer",
                description: "Get ₹2,000 instant discount on selected cards.",
                type: "bank"
            },
            {
                title: "EMI Offer",
                description: "No-cost EMI available.",
                type: "emi"
            }
        ],

        tags: [
            "iPhone",
            "Apple",
            "Smartphone",
            "5G",
            "Mobile"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,

        reviews: [
            {
                id: 1,
                userName: "Rahul",
                rating: 5,
                title: "Excellent phone",
                comment: "Camera and performance are excellent.",
                date: "2026-08-21",
                verifiedPurchase: true
            }
        ]
    },

    {
        id: 102,
        name: "Samsung Galaxy S24",
        slug: "samsung-galaxy-s24",
        brand: "Samsung",
        category: "Mobiles",
        subCategory: "Smartphones",

        images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"
        ],

        price: 64999,
        originalPrice: 74999,
        discountPercentage: 13,
        discountAmount: 10000,

        rating: 4.5,
        totalReviews: 986,
        totalRatings: 1200,

        stock: 18,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Samsung Galaxy S24 with premium AMOLED display and powerful processor.",

        description:
            "Samsung Galaxy S24 combines premium design, excellent cameras and powerful performance.",

        colors: [
            {
                name: "Black",
                value: "#111111",
                available: true,
                additionalPrice: 0
            },
            {
                name: "Blue",
                value: "#3366CC",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [
            {
                value: "128GB",
                price: 64999,
                available: true
            },
            {
                value: "256GB",
                price: 69999,
                available: true
            }
        ],

        specifications: {
            display: "6.2-inch AMOLED",
            processor: "Snapdragon",
            ram: "8GB",
            storage: "128GB",
            rearCamera: "50MP",
            frontCamera: "12MP",
            battery: "4000 mAh",
            operatingSystem: "Android",
            connectivity: "5G"
        },

        features: [
            "AMOLED Display",
            "5G",
            "50MP Camera",
            "Fast Charging",
            "Water Resistant"
        ],

        boxContents: [
            "Samsung Galaxy S24",
            "USB Cable",
            "Documentation"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "2-4 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Samsung Authorized Seller",
            rating: 4.7,
            verified: true
        },

        offers: [
            {
                title: "Bank Offer",
                description: "Get instant discount on selected cards.",
                type: "bank"
            }
        ],

        tags: [
            "Samsung",
            "Galaxy",
            "Android",
            "Smartphone",
            "5G"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 103,
        name: "Men's Casual Cotton Shirt",
        slug: "mens-casual-cotton-shirt",
        brand: "Roadster",
        category: "Men's Shirts",
        subCategory: "Casual Shirts",

        images: [
            "https://m.media-amazon.com/images/I/61mx-U3lepL._SX679_.jpg",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80"
        ],

        price: 899,
        originalPrice: 1499,
        discountPercentage: 40,
        discountAmount: 600,

        rating: 4.3,
        totalReviews: 532,
        totalRatings: 700,

        stock: 35,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Comfortable cotton casual shirt for men.",

        description:
            "A stylish and comfortable cotton casual shirt suitable for everyday wear.",

        colors: [
            {
                name: "Blue",
                value: "#1E5AA8",
                available: true,
                additionalPrice: 0
            },
            {
                name: "White",
                value: "#FFFFFF",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "100% Cotton",
            fit: "Regular Fit",
            sleeve: "Full Sleeve",
            pattern: "Solid",
            washCare: "Machine Wash"
        },

        features: [
            "100% Cotton",
            "Regular Fit",
            "Breathable Fabric",
            "Full Sleeves"
        ],

        boxContents: [
            "1 Men's Shirt"
        ],

        warranty: {
            available: false,
            duration: "",
            type: ""
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Roadster Store",
            rating: 4.5,
            verified: true
        },

        offers: [
            {
                title: "Fashion Offer",
                description: "Extra 10% off on selected products.",
                type: "discount"
            }
        ],

        tags: [
            "Men",
            "Shirt",
            "Casual",
            "Cotton",
            "Fashion"
        ],

        isFeatured: true,
        isBestSeller: false,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 104,
        name: "Women's Casual Cotton Shirt",
        slug: "womens-casual-cotton-shirt",
        brand: "Allen Solly",
        category: "Women's Shirts",
        subCategory: "Casual Shirts",

        images: [
            "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80"
        ],

        price: 599,
        originalPrice: 999,
        discountPercentage: 40,
        discountAmount: 400,

        rating: 4.2,
        totalReviews: 412,
        totalRatings: 550,

        stock: 40,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Stylish women's cotton casual shirt.",

        description:
            "Comfortable women's cotton shirt designed for casual everyday fashion.",

        colors: [
            {
                name: "Pink",
                value: "#E9A6B5",
                available: true,
                additionalPrice: 0
            },
            {
                name: "White",
                value: "#FFFFFF",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "Cotton",
            fit: "Regular Fit",
            sleeve: "Full Sleeve",
            pattern: "Solid"
        },

        features: [
            "Soft Cotton",
            "Comfortable",
            "Regular Fit",
            "Casual Design"
        ],

        boxContents: [
            "1 Women's Shirt"
        ],

        warranty: {
            available: false,
            duration: "",
            type: ""
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Allen Solly Store",
            rating: 4.4,
            verified: true
        },

        offers: [],

        tags: [
            "Women",
            "Shirt",
            "Casual",
            "Cotton",
            "Fashion"
        ],

        isFeatured: true,
        isBestSeller: false,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 105,
        name: "Nike Men's Running Shoes",
        slug: "nike-mens-running-shoes",
        brand: "Nike",
        category: "Footwear",
        subCategory: "Running Shoes",

        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        ],

        price: 3499,
        originalPrice: 4999,
        discountPercentage: 30,
        discountAmount: 1500,

        rating: 4.5,
        totalReviews: 821,
        totalRatings: 1000,

        stock: 25,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Lightweight running shoes for men.",

        description:
            "Comfortable running shoes with lightweight construction and cushioned sole.",

        colors: [
            {
                name: "Red",
                value: "#D71920",
                available: true,
                additionalPrice: 0
            },
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "Mesh",
            sole: "Rubber",
            closure: "Lace-up",
            type: "Running Shoes"
        },

        features: [
            "Lightweight",
            "Breathable",
            "Cushioned Sole",
            "Running Design"
        ],

        boxContents: [
            "1 Pair of Shoes"
        ],

        warranty: {
            available: true,
            duration: "3 Months",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Nike Store",
            rating: 4.8,
            verified: true
        },

        offers: [],

        tags: [
            "Nike",
            "Shoes",
            "Running",
            "Men",
            "Sports"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 106,
        name: "Women's Running Shoes",
        slug: "womens-running-shoes",
        brand: "Puma",
        category: "Footwear",
        subCategory: "Sports Shoes",

        images: [
            "https://m.media-amazon.com/images/I/71nNOYq9heL._SY500_.jpg"
        ],

        price: 2999,
        originalPrice: 4499,
        discountPercentage: 33,
        discountAmount: 1500,

        rating: 4.4,
        totalReviews: 623,
        totalRatings: 800,

        stock: 30,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Comfortable sports shoes for women.",

        description:
            "Stylish and lightweight sports shoes designed for walking, running and daily activities.",

        colors: [
            {
                name: "Pink",
                value: "#E91E63",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "Mesh",
            sole: "Rubber",
            closure: "Lace-up",
            type: "Sports Shoes"
        },

        features: [
            "Lightweight",
            "Flexible Sole",
            "Breathable",
            "Sports Design"
        ],

        boxContents: [
            "1 Pair of Shoes"
        ],

        warranty: {
            available: true,
            duration: "3 Months",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Puma Store",
            rating: 4.6,
            verified: true
        },

        offers: [],

        tags: [
            "Puma",
            "Women",
            "Shoes",
            "Sports",
            "Running"
        ],

        isFeatured: false,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 107,
        name: "Dell Inspiron Laptop",
        slug: "dell-inspiron-laptop",
        brand: "Dell",
        category: "Laptops",
        subCategory: "Windows Laptops",

        images: [
            "https://m.media-amazon.com/images/I/61BdsDQbMiL._SX679_.jpg",
            "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
        ],

        price: 54999,
        originalPrice: 64999,
        discountPercentage: 15,
        discountAmount: 10000,

        rating: 4.4,
        totalReviews: 932,
        totalRatings: 1200,

        stock: 15,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Dell laptop for work, study and entertainment.",

        description:
            "Dell Inspiron laptop with powerful processor, fast SSD storage and a large display.",

        colors: [
            {
                name: "Silver",
                value: "#C0C0C0",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [
            {
                value: "512GB SSD",
                price: 54999,
                available: true
            }
        ],

        specifications: {
            display: "15.6-inch Full HD",
            processor: "Intel Core i5",
            ram: "16GB",
            storage: "512GB SSD",
            operatingSystem: "Windows 11",
            connectivity: "Wi-Fi, Bluetooth"
        },

        features: [
            "Full HD Display",
            "Intel Core i5",
            "16GB RAM",
            "512GB SSD",
            "Windows 11"
        ],

        boxContents: [
            "Laptop",
            "Charger",
            "Documentation"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "2-4 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Dell Authorized Seller",
            rating: 4.7,
            verified: true
        },

        offers: [],

        tags: [
            "Dell",
            "Laptop",
            "Computer",
            "Windows",
            "Office"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 108,
        name: "HP Pavilion Laptop",
        slug: "hp-pavilion-laptop",
        brand: "HP",
        category: "Laptops",
        subCategory: "Windows Laptops",

        images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],

        price: 59999,
        originalPrice: 69999,
        discountPercentage: 14,
        discountAmount: 10000,

        rating: 4.3,
        totalReviews: 654,
        totalRatings: 850,

        stock: 12,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "HP Pavilion laptop for productivity and entertainment.",

        description:
            "Powerful HP Pavilion laptop suitable for office work, students and everyday computing.",

        colors: [
            {
                name: "Silver",
                value: "#C0C0C0",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [
            {
                value: "512GB SSD",
                price: 59999,
                available: true
            }
        ],

        specifications: {
            display: "15.6-inch Full HD",
            processor: "Intel Core i5",
            ram: "16GB",
            storage: "512GB SSD",
            operatingSystem: "Windows 11"
        },

        features: [
            "Full HD Display",
            "16GB RAM",
            "512GB SSD",
            "Windows 11"
        ],

        boxContents: [
            "Laptop",
            "Charger"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "2-4 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "HP Authorized Seller",
            rating: 4.6,
            verified: true
        },

        offers: [],

        tags: [
            "HP",
            "Laptop",
            "Computer",
            "Windows"
        ],

        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 109,
        name: "Sony Wireless Headphones",
        slug: "sony-wireless-headphones",
        brand: "Sony",
        category: "Electronics",
        subCategory: "Headphones",

        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
        ],

        price: 4999,
        originalPrice: 6999,
        discountPercentage: 29,
        discountAmount: 2000,

        rating: 4.6,
        totalReviews: 1150,
        totalRatings: 1400,

        stock: 20,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Premium wireless headphones with powerful sound.",

        description:
            "Sony wireless headphones with comfortable design and immersive sound quality.",

        colors: [
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            type: "Over Ear",
            connectivity: "Bluetooth",
            battery: "30 Hours",
            microphone: "Yes"
        },

        features: [
            "Wireless",
            "Bluetooth",
            "Long Battery",
            "Comfortable Ear Cups"
        ],

        boxContents: [
            "Headphones",
            "Charging Cable"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "2-4 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Sony Authorized Seller",
            rating: 4.8,
            verified: true
        },

        offers: [],

        tags: [
            "Sony",
            "Headphones",
            "Wireless",
            "Bluetooth",
            "Audio"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 110,
        name: "boAt Bluetooth Speaker",
        slug: "boat-bluetooth-speaker",
        brand: "boAt",
        category: "Electronics",
        subCategory: "Speakers",

        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
        ],

        price: 1999,
        originalPrice: 2999,
        discountPercentage: 33,
        discountAmount: 1000,

        rating: 4.4,
        totalReviews: 760,
        totalRatings: 900,

        stock: 32,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Portable Bluetooth speaker with powerful audio.",

        description:
            "Portable wireless speaker designed for music, travel and outdoor entertainment.",

        colors: [
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            type: "Bluetooth Speaker",
            connectivity: "Bluetooth",
            battery: "12 Hours",
            output: "20W"
        },

        features: [
            "Bluetooth",
            "Portable",
            "Water Resistant",
            "Powerful Bass"
        ],

        boxContents: [
            "Speaker",
            "Charging Cable"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "2-4 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "boAt Store",
            rating: 4.5,
            verified: true
        },

        offers: [],

        tags: [
            "boAt",
            "Speaker",
            "Bluetooth",
            "Audio"
        ],

        isFeatured: false,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 111,
        name: "Canon EOS Camera",
        slug: "canon-eos-camera",
        brand: "Canon",
        category: "Cameras",
        subCategory: "DSLR Cameras",

        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
        ],

        price: 45999,
        originalPrice: 52999,
        discountPercentage: 13,
        discountAmount: 7000,

        rating: 4.7,
        totalReviews: 430,
        totalRatings: 550,

        stock: 8,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Canon EOS camera for photography enthusiasts.",

        description:
            "Canon EOS camera offering excellent image quality and versatile photography features.",

        colors: [
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            type: "DSLR",
            sensor: "APS-C",
            resolution: "24MP",
            video: "4K",
            connectivity: "Wi-Fi, Bluetooth"
        },

        features: [
            "24MP Sensor",
            "4K Video",
            "Wi-Fi",
            "Bluetooth"
        ],

        boxContents: [
            "Camera",
            "Battery",
            "Charger",
            "Strap"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Canon Authorized Seller",
            rating: 4.8,
            verified: true
        },

        offers: [],

        tags: [
            "Canon",
            "Camera",
            "DSLR",
            "Photography"
        ],

        isFeatured: true,
        isBestSeller: false,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 112,
        name: "Women's Handbag",
        slug: "womens-handbag",
        brand: "Lavie",
        category: "Fashion",
        subCategory: "Handbags",

        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
        ],

        price: 1499,
        originalPrice: 2499,
        discountPercentage: 40,
        discountAmount: 1000,

        rating: 4.3,
        totalReviews: 620,
        totalRatings: 800,

        stock: 22,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Stylish women's handbag for everyday use.",

        description:
            "Elegant handbag with spacious compartments suitable for office and casual use.",

        colors: [
            {
                name: "Brown",
                value: "#8B4513",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "Faux Leather",
            type: "Handbag",
            closure: "Zip"
        },

        features: [
            "Spacious",
            "Stylish",
            "Durable",
            "Multiple Compartments"
        ],

        boxContents: [
            "1 Handbag"
        ],

        warranty: {
            available: false,
            duration: "",
            type: ""
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Lavie Store",
            rating: 4.4,
            verified: true
        },

        offers: [],

        tags: [
            "Women",
            "Handbag",
            "Fashion",
            "Bag"
        ],

        isFeatured: false,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 113,
        name: "Men's Leather Wallet",
        slug: "mens-leather-wallet",
        brand: "WildHorn",
        category: "Fashion",
        subCategory: "Wallets",

        images: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
        ],

        price: 699,
        originalPrice: 1299,
        discountPercentage: 46,
        discountAmount: 600,

        rating: 4.4,
        totalReviews: 910,
        totalRatings: 1100,

        stock: 50,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Premium leather wallet for men.",

        description:
            "Compact and durable wallet with multiple card slots and compartments.",

        colors: [
            {
                name: "Brown",
                value: "#6B3E26",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "Leather",
            type: "Bi-fold Wallet",
            compartments: "Multiple"
        },

        features: [
            "Leather",
            "Compact",
            "Multiple Card Slots",
            "Durable"
        ],

        boxContents: [
            "1 Wallet"
        ],

        warranty: {
            available: true,
            duration: "6 Months",
            type: "Brand Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "WildHorn Store",
            rating: 4.5,
            verified: true
        },

        offers: [],

        tags: [
            "Men",
            "Wallet",
            "Leather",
            "Fashion"
        ],

        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 114,
        name: "Prestige Electric Kettle",
        slug: "prestige-electric-kettle",
        brand: "Prestige",
        category: "Home & Kitchen",
        subCategory: "Kitchen Appliances",

        images: [
            "https://m.media-amazon.com/images/I/31gllQBI+FL._SY300_SX300_QL70_FMwebp_.jpg"
        ],

        price: 1299,
        originalPrice: 1999,
        discountPercentage: 35,
        discountAmount: 700,

        rating: 4.3,
        totalReviews: 550,
        totalRatings: 700,

        stock: 28,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Fast electric kettle for tea and hot water.",

        description:
            "Electric kettle with quick boiling, automatic shut-off and stainless steel body.",

        colors: [
            {
                name: "Silver",
                value: "#C0C0C0",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            capacity: "1.5 Litres",
            material: "Stainless Steel",
            power: "1500W",
            safety: "Auto Shut Off"
        },

        features: [
            "Fast Boiling",
            "Auto Shut Off",
            "Stainless Steel",
            "Easy Cleaning"
        ],

        boxContents: [
            "Electric Kettle",
            "User Manual"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Prestige Store",
            rating: 4.5,
            verified: true
        },

        offers: [],

        tags: [
            "Prestige",
            "Kettle",
            "Kitchen",
            "Appliance"
        ],

        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 115,
        name: "Philips Air Fryer",
        slug: "philips-air-fryer",
        brand: "Philips",
        category: "Home & Kitchen",
        subCategory: "Kitchen Appliances",

        images: [
            "https://m.media-amazon.com/images/I/41ptUlLhXUL._SY300_SX300_QL70_FMwebp_.jpg"
        ],

        price: 7999,
        originalPrice: 9999,
        discountPercentage: 20,
        discountAmount: 2000,

        rating: 4.5,
        totalReviews: 680,
        totalRatings: 850,

        stock: 10,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Philips air fryer for healthier cooking.",

        description:
            "Air fryer that helps prepare crispy food using significantly less oil.",

        colors: [
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            capacity: "4.1 Litres",
            power: "1400W",
            controls: "Digital",
            type: "Air Fryer"
        },

        features: [
            "Rapid Air Technology",
            "Digital Controls",
            "Easy Cleaning",
            "Low Oil Cooking"
        ],

        boxContents: [
            "Air Fryer",
            "User Manual"
        ],

        warranty: {
            available: true,
            duration: "2 Years",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Philips Store",
            rating: 4.7,
            verified: true
        },

        offers: [],

        tags: [
            "Philips",
            "Air Fryer",
            "Kitchen",
            "Appliance"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 116,
        name: "The Psychology of Money",
        slug: "psychology-of-money",
        brand: "Morgan Housel",
        category: "Books",
        subCategory: "Finance Books",

        images: [
            "https://m.media-amazon.com/images/I/61G1xdVXdJL._SY522_.jpg"
        ],

        price: 399,
        originalPrice: 599,
        discountPercentage: 33,
        discountAmount: 200,

        rating: 4.7,
        totalReviews: 2300,
        totalRatings: 2800,

        stock: 60,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "A popular book about money and financial behavior.",

        description:
            "An insightful book exploring how people think about money, wealth and financial decisions.",

        colors: [],

        storageOptions: [],

        specifications: {
            author: "Morgan Housel",
            language: "English",
            pages: "256",
            format: "Paperback"
        },

        features: [
            "Finance",
            "Personal Growth",
            "Money Management"
        ],

        boxContents: [
            "1 Book"
        ],

        warranty: {
            available: false,
            duration: "",
            type: ""
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Book Store",
            rating: 4.6,
            verified: true
        },

        offers: [],

        tags: [
            "Book",
            "Finance",
            "Money",
            "Self Help"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 117,
        name: "Adidas Men's Hoodie",
        slug: "adidas-mens-hoodie",
        brand: "Adidas",
        category: "Fashion",
        subCategory: "Men's Clothing",

        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
        ],

        price: 2499,
        originalPrice: 3999,
        discountPercentage: 37,
        discountAmount: 1500,

        rating: 4.4,
        totalReviews: 440,
        totalRatings: 600,

        stock: 25,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Comfortable Adidas hoodie for men.",

        description:
            "Warm and stylish hoodie suitable for casual outings and everyday wear.",

        colors: [
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "Cotton Blend",
            fit: "Regular",
            sleeve: "Full Sleeve"
        },

        features: [
            "Soft Fabric",
            "Warm",
            "Hooded",
            "Casual Design"
        ],

        boxContents: [
            "1 Hoodie"
        ],

        warranty: {
            available: false,
            duration: "",
            type: ""
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Adidas Store",
            rating: 4.7,
            verified: true
        },

        offers: [],

        tags: [
            "Adidas",
            "Men",
            "Hoodie",
            "Fashion"
        ],

        isFeatured: false,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 118,
        name: "Women's Summer Dress",
        slug: "womens-summer-dress",
        brand: "Tokyo Talkies",
        category: "Women's Clothing",
        subCategory: "Dresses",

        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
        ],

        price: 1299,
        originalPrice: 2199,
        discountPercentage: 41,
        discountAmount: 900,

        rating: 4.2,
        totalReviews: 390,
        totalRatings: 500,

        stock: 30,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Stylish summer dress for women.",

        description:
            "Lightweight and comfortable summer dress suitable for casual occasions.",

        colors: [
            {
                name: "Pink",
                value: "#E8A0BF",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            material: "Rayon",
            fit: "Regular",
            pattern: "Printed",
            sleeve: "Short Sleeve"
        },

        features: [
            "Lightweight",
            "Comfortable",
            "Summer Wear",
            "Stylish Design"
        ],

        boxContents: [
            "1 Dress"
        ],

        warranty: {
            available: false,
            duration: "",
            type: ""
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Fashion Store",
            rating: 4.4,
            verified: true
        },

        offers: [],

        tags: [
            "Women",
            "Dress",
            "Summer",
            "Fashion"
        ],

        isFeatured: true,
        isBestSeller: false,
        isNew: true,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 119,
        name: "Mi Smart LED TV",
        slug: "mi-smart-led-tv",
        brand: "Xiaomi",
        category: "Electronics",
        subCategory: "Televisions",

        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80"
        ],

        price: 28999,
        originalPrice: 39999,
        discountPercentage: 27,
        discountAmount: 11000,

        rating: 4.5,
        totalReviews: 1240,
        totalRatings: 1600,

        stock: 9,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Smart LED TV with 4K display and streaming apps.",

        description:
            "Xiaomi smart television with vivid picture quality, smart apps and modern connectivity.",

        colors: [
            {
                name: "Black",
                value: "#000000",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            display: "55-inch 4K",
            resolution: "3840 x 2160",
            operatingSystem: "Google TV",
            connectivity: "Wi-Fi, Bluetooth",
            ports: "HDMI, USB"
        },

        features: [
            "4K Display",
            "Smart TV",
            "Wi-Fi",
            "Bluetooth",
            "Streaming Apps"
        ],

        boxContents: [
            "TV",
            "Remote",
            "Stand",
            "Power Cable"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "3-5 Business Days",
            cashOnDelivery: true,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Xiaomi Authorized Seller",
            rating: 4.6,
            verified: true
        },

        offers: [],

        tags: [
            "Xiaomi",
            "TV",
            "Smart TV",
            "4K",
            "Electronics"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,

        reviews: []
    },

    {
        id: 120,
        name: "Samsung 1.5 Ton Split AC",
        slug: "samsung-split-ac",
        brand: "Samsung",
        category: "Home Appliances",
        subCategory: "Air Conditioners",

        images: [
            "https://m.media-amazon.com/images/I/61-kuokjN1L._SX679_.jpg"
        ],

        price: 34999,
        originalPrice: 44999,
        discountPercentage: 22,
        discountAmount: 10000,

        rating: 4.4,
        totalReviews: 820,
        totalRatings: 1000,

        stock: 7,
        stockStatus: "In Stock",
        availability: true,

        shortDescription:
            "Energy-efficient 1.5 ton split air conditioner.",

        description:
            "Samsung split AC designed for efficient cooling with modern features and low energy consumption.",

        colors: [
            {
                name: "White",
                value: "#FFFFFF",
                available: true,
                additionalPrice: 0
            }
        ],

        storageOptions: [],

        specifications: {
            capacity: "1.5 Ton",
            energyRating: "5 Star",
            type: "Split AC",
            compressor: "Digital Inverter",
            refrigerant: "R32"
        },

        features: [
            "5 Star Energy Rating",
            "Digital Inverter",
            "Fast Cooling",
            "Low Noise"
        ],

        boxContents: [
            "Indoor Unit",
            "Outdoor Unit",
            "Remote"
        ],

        warranty: {
            available: true,
            duration: "1 Year",
            type: "Manufacturer Warranty"
        },

        delivery: {
            freeDelivery: true,
            estimatedDelivery: "5-7 Business Days",
            cashOnDelivery: false,
            returnAvailable: true,
            returnPeriod: "7 Days"
        },

        seller: {
            name: "Samsung Authorized Seller",
            rating: 4.7,
            verified: true
        },

        offers: [],

        tags: [
            "Samsung",
            "AC",
            "Air Conditioner",
            "Home Appliance",
            "Cooling"
        ],

        isFeatured: true,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,

        reviews: []
    }
];

export default products;