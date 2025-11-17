// main.js – Enhanced home page functionality with animations
document.addEventListener("DOMContentLoaded", () => {
  try {
    updateCartCount();
    initHomePage();
    createParticles();
    initScrollAnimations();
  } catch (e) {
    console.error("main.js init error", e);
  }
});

function updateCartCount() {
  try {
    const cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    document
      .querySelectorAll("#cart-count, .cart-count")
      .forEach((el) => {
        el.textContent = count;
        
        // Add pulse animation when count changes
        if (count > 0) {
          el.classList.add('pulse');
          setTimeout(() => {
            el.classList.remove('pulse');
          }, 2000);
        }
      });
  } catch (e) {
    console.error("updateCartCount error", e);
  }
}

// Generic card generator with enhanced styling
function createCard(comic) {
  return `
    <div class="card fade-in publisher-${comic.publisher.toLowerCase()}" onclick="openComic(${comic.id})">
      <div class="comic-img">
        <img src="${comic.cover}" alt="${comic.title}" loading="lazy" />
        <div class="card-overlay">
          <span class="btn">Quick View</span>
        </div>
      </div>
      <div class="card-content">
        <h3>${comic.title}</h3>
        <p class="muted">${comic.publisher}</p>
        <p class="price">₹${comic.price}</p>
        <button class="add-btn" onclick="event.stopPropagation(); addToCart(${comic.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// Render comics by category with animations
function loadSection(sectionId, category) {
  const container = document.getElementById(sectionId);
  if (!container) return;

  const filtered = window.COMICS.filter((c) => c.category === category);

  container.innerHTML = filtered.map(createCard).join("");
  
  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

// Open detail page
function openComic(id) {
  // Add click animation
  const card = event.currentTarget;
  card.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    window.location.href = `comic-detail.html?id=${id}`;
  }, 200);
}

// Add to cart with enhanced UX
function addToCart(id) {
  const button = event.target;
  const comic = window.COMICS.find(c => c.id === id);
  
  if (!comic) return;
  
  // Show loading state
  const originalText = button.innerHTML;
  button.innerHTML = '<span class="loading"></span>';
  button.disabled = true;

  let cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");

  const item = cart.find((c) => c.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ 
      id, 
      qty: 1,
      title: comic.title,
      price: comic.price,
      cover: comic.cover
    });
  }

  // Simulate processing delay for better UX
  setTimeout(() => {
    localStorage.setItem("comic_cart", JSON.stringify(cart));
    updateCartCount();
    
    // Reset button with success state
    button.innerHTML = '✓ Added!';
    button.style.background = 'var(--success)';
    
    // Show message
    showMessage(`"${comic.title}" added to cart!`);
    
    // Reset button after delay
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '';
      button.disabled = false;
    }, 1500);
  }, 500);
}

// Show message to user
function showMessage(text) {
  // Create message element if it doesn't exist
  let msg = document.getElementById("cart-msg");
  if (!msg) {
    msg = document.createElement("div");
    msg.id = "cart-msg";
    document.body.appendChild(msg);
  }

  msg.innerHTML = text;
  msg.classList.add("show");

  setTimeout(() => {
    msg.classList.remove("show");
  }, 3000);
}

// Initialize homepage
function initHomePage() {
  // New Releases = latest by date or manually defined
  const newReleases = window.COMICS.filter(c => c.category === 'new').slice(0, 6);
  renderHomeCards("new-releases", newReleases);

  // Popular Series = highest rated / manually pick
  const popular = window.COMICS.filter(c => c.category === 'popular').slice(0, 6);
  renderHomeCards("popular-series", popular);
  
  // Add publisher cards with hover effects
  initPublisherCards();
}

function renderHomeCards(targetId, list) {
  const box = document.getElementById(targetId);
  if (!box) return;

  box.innerHTML = "";
  list.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = `card fade-in publisher-${c.publisher.toLowerCase()}`;
    div.style.animationDelay = `${index * 0.1}s`;
    div.innerHTML = `
      <div class="comic-img">
        <img src="${c.cover}" alt="${c.title}" loading="lazy">
      </div>
      <div class="card-content">
        <h3>${c.title}</h3>
        <p class="muted">${c.publisher}</p>
        <p class="price">₹${c.price}</p>
        <a href="comic-detail.html?id=${c.id}" class="btn">View Details</a>
      </div>
    `;
    box.appendChild(div);
  });
  
  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

// Initialize publisher cards with enhanced interactions
function initPublisherCards() {
  const publisherRow = document.querySelector('.publisher-row');
  if (!publisherRow) return;
  
  publisherRow.innerHTML = `
    <div class="publisher-card glow" onclick="window.location='browse.html?pub=Marvel'">
      <div class="publisher-logo">Marvel Comics</div>
      <p>Explore the Marvel Universe</p>
    </div>
    <div class="publisher-card glow" onclick="window.location='browse.html?pub=DC'">
      <div class="publisher-logo">DC Comics</div>
      <p>Discover DC Multiverse</p>
    </div>
    <div class="publisher-card glow" onclick="window.location='browse.html?pub=Image'">
      <div class="publisher-logo">Image Comics</div>
      <p>Independent Creators</p>
    </div>
  `;
}

/**
 * Create background particles for visual effect
 */
function createParticles() {
  const container = document.querySelector('.hero-section');
  if (!container) return;
  
  // Check if particles already exist
  if (document.querySelector('.particles')) return;
  
  const particles = document.createElement('div');
  particles.className = 'particles';
  
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 6 + 2;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 25 + 15;
    const animationDelay = Math.random() * 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${animationDuration}s`;
    particle.style.animationDelay = `${animationDelay}s`;
    
    particles.appendChild(particle);
  }
  
  container.appendChild(particles);
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Add card overlay styles dynamically
const style = document.createElement('style');
style.textContent = `
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
    border-radius: 8px;
  }
  
  .card:hover .card-overlay {
    opacity: 1;
  }
  
  .card-content {
    padding: 10px 0 0;
  }
  
  .empty-cart {
    text-align: center;
    padding: 40px 20px;
  }
  
  .empty-cart h3 {
    margin-bottom: 10px;
    color: var(--primary);
  }
  
  .error-state {
    text-align: center;
    padding: 60px 20px;
  }
  
  .error-state h2 {
    margin-bottom: 15px;
    color: var(--danger);
  }
  
  .publisher-logo {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;
document.head.appendChild(style);