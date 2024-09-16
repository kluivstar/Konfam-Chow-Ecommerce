import {burger1,
    burger2,
    burger3,
    burger4,
    burger5,
    burger6} from "../assets"

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "testimmonies",
        title: "testimonies",
    },
]

export const products = [
        {
            id: 1,
            title: "Classic Cheeseburger",
            description: "A timeless burger with a juicy beef patty, melted cheddar cheese, crisp lettuce, tomato, and our signature sauce.",
            price: 8.99,
            flavors: ["Beef", "Cheese", "Signature Sauce"],
            more: "Available with gluten-free buns",
            image: burger1
        },

        {
            id: 2,
            title: "Spicy Jalapeño Burger",
            description: "Kick up the heat with this fiery burger loaded with jalapeños, pepper jack cheese, and spicy mayo.",
            price: 9.99,
            flavors: ["Beef", "Jalapeño", "Spicy Mayo"],
            more: "Add extra jalapeños for free!",
            image: burger2
        },

        {
            id: 3,
            title: "BBQ Bacon Burger",
            description: "A smoky BBQ masterpiece with crispy bacon, cheddar cheese, onion rings, and a sweet BBQ sauce.",
            price: 10.99,
            flavors: ["Beef", "BBQ Sauce", "Bacon"],
            more: "Try with extra crispy bacon",
            image: burger3
        },

        {
            id: 4,
            title: "Veggie Delight Burger",
            description: "A plant-based patty topped with avocado, grilled onions, lettuce, tomato, and vegan mayo.",
            price: 7.99,
            flavors: ["Plant-Based Patty", "Avocado", "Grilled Onions"],
            more: "100% vegan and gluten-free option available",
            image: burger4
        },

        {
            id: 5,
            title: "Mushroom Swiss Burger",
            description: "Savor the rich flavor of sautéed mushrooms, Swiss cheese, and garlic aioli on a buttery brioche bun.",
            price: 9.49,
            flavors: ["Beef", "Mushrooms", "Swiss Cheese"],
            more: "Perfect for mushroom lovers",
            image: burger5
        },

        {
            id: 6,
            title: "Double Decker Burger",
            description: "Two juicy beef patties, double the cheese, and all the fixings for a massive, flavor-packed burger.",
            price: 12.99,
            flavors: ["Double Beef Patties", "Cheese", "Lettuce"],
            more: "Comes with extra cheese and pickles",
            image: burger6
        }
    ]
    
export const stats = [
    {
        id: "stats-1",
        title: "Total Deliveries",
        value: "We've made a record breaking delivery of 35,000 with the last one year.",
    },
    {
        id: "stats-2",
        title: "Available Countries",
        value: "We've operational in over a 100 countries around the world.",
    },
    {
        id: "stats-1",
        title: "Daily Orders",
        value: "We've get a total daily order of over 2900",
    },
]

export const footerLinks = [
    {
        title: "Other Links",
        links: [
            {
                name: "Blog",
                link: "#"
            },
            {
                name: "Recipe",
                link: "#"
            },
            {
                name: "Suggestions",
                link: "#"
            },
            {
                name: "Customer Support",
                link: "#"
            },
        ]
    },
    {
        title: "Store Near You",
        links:  [
            {
                name: "England",
                link: "#"
            },
            {
                name: "China",
                link: "#"
            },
            {
                name: "Nigeria",
                link: "#"
            },
            {
                name: "USA",
                link: "#"
            },
        ]
    }
]
