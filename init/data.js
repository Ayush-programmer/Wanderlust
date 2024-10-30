const sampleListings = [
    {
        title: "Beautiful Travel Spot",
        description: "A stunning location to visit.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        price: 120,
        location: "Beach",
        country: "Thailand"
    },
    {
        title: "Mountain Retreat",
        description: "A peaceful retreat in the mountains.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191238-8bdd7179f86c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        price: 200,
        location: "Mountain",
        country: "Nepal"
    },
    {
        title: "City Lights",
        description: "An energetic city experience.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 150,
        location: "Downtown",
        country: "Japan"
    },
    {
        title: "Desert Adventure",
        description: "A thrilling adventure in the desert.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191238-8bdd7179f86c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 250,
        location: "Desert",
        country: "Morocco"
    },
    {
        title: "Lakeside Camping",
        description: "A relaxing time by the lake.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 180,
        location: "Lake",
        country: "Canada"
    },
    {
        title: "Tropical Getaway",
        description: "A tropical paradise to relax and rejuvenate.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1614690549356-6268356dbcb4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 300,
        location: "Island",
        country: "Maldives"
    },
    {
        title: "Historical Ruins",
        description: "Explore ancient ruins full of history.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727709152213-3605887ca03e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 90,
        location: "Historical Site",
        country: "Italy"
    },
    {
        title: "Winter Wonderland",
        description: "A magical winter escape.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1583571941226-bd53b15c82b9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 220,
        location: "Mountain",
        country: "Switzerland"
    },
    {
        title: "Rainforest Exploration",
        description: "An adventure deep into the rainforest.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1590170649029-01573b1923fe?q=80&w=959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 200,
        location: "Rainforest",
        country: "Brazil"
    },
    {
        title: "Safari Adventure",
        description: "A wild journey through the African savanna.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191293-f7e14cf7c75b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 400,
        location: "Savanna",
        country: "Kenya"
    },
    {
        title: "Waterfall Hike",
        description: "A breathtaking hike to a stunning waterfall.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1677494867324-843044ce2f98?q=80&w=757&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 100,
        location: "Forest",
        country: "Iceland"
    },
    {
        title: "Hot Air Balloon Ride",
        description: "An unforgettable journey in a hot air balloon.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 250,
        location: "Desert",
        country: "Turkey"
    },
    {
        title: "Cultural Festival",
        description: "Experience a traditional cultural festival.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1682377521590-bc565126cb4d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 60,
        location: "Village",
        country: "India"
    },
    {
        title: "Countryside Escape",
        description: "A peaceful retreat in the countryside.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 140,
        location: "Countryside",
        country: "France"
    },
    {
        title: "Coastal Road Trip",
        description: "A scenic drive along the coast.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994582937-da738a5a6233?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 130,
        location: "Coast",
        country: "Australia"
    },
    {
        title: "Skiing Adventure",
        description: "A thrilling skiing trip.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994961623-98ed2aae09f8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 350,
        location: "Mountain",
        country: "Austria"
    },
    {
        title: "Whale Watching",
        description: "An exciting whale-watching experience.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1618426018046-77564bc4b0eb?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 290,
        location: "Ocean",
        country: "South Africa"
    },
    {
        title: "Volcano Exploration",
        description: "Explore active volcanoes safely.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 320,
        location: "Volcano",
        country: "Indonesia"
    },
    {
        title: "Wine Tasting Tour",
        description: "A delightful wine-tasting experience.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 180,
        location: "Vineyard",
        country: "Italy"
    },
    {
        title: "River Rafting",
        description: "An adrenaline-pumping river rafting adventure.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 220,
        location: "River",
        country: "USA"
    },
    {
        title: "Scuba Diving",
        description: "Explore the vibrant underwater world.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 270,
        location: "Ocean",
        country: "Australia"
    },
    {
        title: "Northern Lights",
        description: "Witness the mesmerizing Northern Lights.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 400,
        location: "Arctic",
        country: "Norway"
    },
    {
        title: "Wildlife Photography",
        description: "Capture breathtaking wildlife photography.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191238-8bdd7179f86c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 350,
        location: "Forest",
        country: "South Africa"
    },
    {
        title: "Ice Climbing",
        description: "A challenging ice-climbing experience.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 450,
        location: "Glacier",
        country: "Iceland"
    },
    {
        title: "Beach Yoga Retreat",
        description: "A relaxing yoga retreat by the beach.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191238-8bdd7179f86c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        price: 280,
        location: "Beach",
        country: "Bali"
    },
    {
        title: "Kayaking Adventure",
        description: "An exciting kayaking trip through rivers and lakes.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191238-8bdd7179f86c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 210,
        location: "River",
        country: "Canada"
    },
    {
        title: "Desert Stargazing",
        description: "A peaceful night of stargazing in the desert.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 180,
        location: "Desert",
        country: "Jordan"
    },
    {
        title: "Surfing Adventure",
        description: "Catch the waves on a surfing adventure.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727709152213-3605887ca03e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 260,
        location: "Beach",
        country: "Hawaii"
    },
    {
        title: "Rock Climbing",
        description: "Challenge yourself with rock climbing.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1583571941226-bd53b15c82b9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 300,
        location: "Cliff",
        country: "USA"
    },
    {
        title: "Canyon Hiking",
        description: "Explore the stunning canyons on foot.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1590170649029-01573b1923fe?q=80&w=959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 200,
        location: "Canyon",
        country: "USA"
    },
    {
        title: "Art and Culture",
        description: "Immerse yourself in art and culture.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191293-f7e14cf7c75b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 75,
        location: "City",
        country: "Spain"
    },
    {
        title: "Culinary Tour",
        description: "Discover the flavors of a new cuisine.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191238-8bdd7179f86c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        price: 100,
        location: "City",
        country: "Italy"
    },
    {
        title: "Wellness Retreat",
        description: "Focus on wellness and relaxation.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 200,
        location: "Spa",
        country: "Thailand"
    },
    {
        title: "Fishing Expedition",
        description: "A relaxing fishing expedition.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191238-8bdd7179f86c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 90,
        location: "Lake",
        country: "Canada"
    },
    {
        title: "Hot Springs",
        description: "Relax in natural hot springs.",
        image: {
            filename: 'listing image',
            url: 'https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 150,
        location: "Mountain",
        country: "Japan"
    },
    {
        title: "Historical Tour",
        description: "Explore the rich history of a city.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1614690549356-6268356dbcb4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 130,
        location: "City",
        country: "Greece"
    },
    {
        title: "Glacier Hiking",
        description: "An adventure on a glacier.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1583571941226-bd53b15c82b9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 300,
        location: "Glacier",
        country: "Argentina"
    },
    {
        title: "Eco-Lodge Experience",
        description: "Stay in an eco-friendly lodge.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1583571941226-bd53b15c82b9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 250,
        location: "Forest",
        country: "Costa Rica"
    },
    {
        title: "Caving Adventure",
        description: "Explore underground caves.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1590170649029-01573b1923fe?q=80&w=959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 130,
        location: "Caves",
        country: "New Zealand"
    },
    {
        title: "Bungee Jumping",
        description: "Experience the thrill of bungee jumping.",
        image: {
            filename: 'listing image',
            url: 'https://images.unsplash.com/photo-1727994191293-f7e14cf7c75b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        price: 350,
        location: "Bridge",
        country: "New Zealand"
    },
];

module.exports = { data: sampleListings };