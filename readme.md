🌌 ComicVerse Hub

A Cyberpunk-Inspired Online Comic Store — Built with Pure Web Technologies

ComicVerse Hub is a front-end–only comic book storefront that blends a futuristic cyberpunk aesthetic with smooth UI interactions and animated elements. Designed as a portfolio-grade project, it demonstrates how much can be achieved using nothing but HTML, CSS, and JavaScript — no frameworks, no backends.

🔗 Live Demo:
👉 https://saketmathur04.github.io/ComicVerse-Hub-Web-tech/

🎮 Overview

ComicVerse Hub recreates the feel of a modern comic-book shopping experience. It includes a comic catalog, detail pages, a persistent shopping cart, and multiple micro-interactions that make the UI feel alive.

The design direction leans heavily into neon lighting, holographic surfaces, glitch transitions, and dark cyberpunk palettes — making the whole system feel more like an interface out of a sci-fi universe than a traditional shop.

✨ Features at a Glance
🎨 Design & UI

Neon-accented cyberpunk visual theme

Holographic cards, glass-morphism layers, and glow effects

Smooth page transitions and animated UI feedback

Mobile-first, responsive layout

Dark mode–optimized experience

🛍️ E-Commerce Simulation

Browse, filter, and sort comics

Detailed product pages with zoomable covers

Persistent shopping cart using localStorage

Real-time cart count and total updates

Basic checkout success state

⚙️ Tech Highlights

HTML5 + Vanilla JavaScript (ES6 modules & DOM APIs)

CSS3 (Grid, Flexbox, Variables, Keyframes)

No build tools or frameworks

All data stored locally via JavaScript objects

🚀 Getting Started
1️⃣ Clone the Repo
git clone https://github.com/saketmathur04/ComicVerse-Hub-Web-tech.git
cd ComicVerse-Hub-Web-tech

2️⃣ Run a Local Server

Any lightweight server works:

# Python
python -m http.server 8000

# Node
npx serve .

# PHP
php -S localhost:8000

3️⃣ Visit:
http://localhost:8000

📁 Project Structure
📦 ComicVerse-Hub-Web-tech
├── index.html              # Landing page
├── browse.html             # Full comic catalog
├── comic-detail.html       # Comic detail page
├── cart.html               # Cart and checkout simulation
├── style.css               # Global styles + animations
│
├── js/
│   ├── comics.js           # Comic dataset
│   ├── main.js             # Homepage logic
│   ├── browse.js           # Filtering/sorting
│   ├── detail.js           # Product detail loader
│   └── cart.js             # Cart management system
│
├── assets/                 # Images, icons, covers
└── README.md               # Documentation

🎯 Key Pages & Functionality
🏠 Homepage

Animated hero section

Auto-scrolling cover slider

New releases + popular picks

Interactive publisher chips

🔍 Browse Page

Full comic library display

Filter by publisher

Sort by price, title, or release date

Responsive grid layout

📖 Detail Page

High-resolution comic cover

Dynamic content loaded via URL parameters

“Add to Cart” with quantity selector

Short previews / metadata

🛒 Cart Page

Items persist even after refresh

Live price calculation

Quantity adjustments

Remove items individually

Checkout confirmation animation

🔧 Under the Hood: Core Mechanics
Animation System

The UI uses handcrafted CSS keyframes for:

Neon glow pulses

Glitch text effects

Parallax slider movement

Micro-animations on hover

Data Layer

All comic data lives in comics.js as a static array — simple, transparent, and easily extendable.

URL Routing

Detail pages use:

comic-detail.html?id=##


to load the correct comic dynamically.

Cart Persistence

The entire cart is stored in:

localStorage.setItem("CV_CART", ...)


This makes the site fully functional without a backend.

👥 Contributors
Contributor	Responsibility
Saket Mathur	CSS architecture, animation system, responsive layouts
Swaraj Kazi	UI/UX, cyberpunk visual design, presentation
Anshul Dhamija	JavaScript logic, cart system, data handling
🌐 Browser Support

Chrome 90+

Firefox 88+

Safari 14+

Edge 90+

🚀 Deployment
GitHub Pages

Push repository

Settings → Pages

Select: Branch: main → / (root)

Deploy

Live URL:
👉 https://saketmathur04.github.io/ComicVerse-Hub-Web-tech/

🔮 Planned Enhancements

Search bar across the catalog

User login / favorites

Payment simulation

PWA mode (installable app)

In-browser comic reader



<div align="center">
💙 Built by Team ComicVerse

Saket Mathur • Swaraj Kazi • Anshul Dhamija

“Exploring the multiverse, one comic at a time.” 🚀

</div>
