// detail.js - Enhanced with animations and better UX
document.addEventListener("DOMContentLoaded", () => {
  try {
    populateDetail();
    attachDetailHandlers();
    updateCartCountHeader();
    createParticles();
    initScrollAnimations();
  } catch (e) {
    console.error("detail init error", e);
  }
});

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function populateDetail() {
  const id = Number(getQueryParam("id"));

  // Find comic safely
  const comic =
    (window.COMICS || []).find((c) => Number(c.id) === id) ||
    (window.COMICS && window.COMICS[0]);

  if (!comic) {
    // Show error state
    document.querySelector('main').innerHTML = `
      <div class="error-state fade-in">
        <h2>Comic Not Found</h2>
        <p>The comic you're looking for doesn't exist.</p>
        <a href="browse.html" class="btn">Browse Comics</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${comic.title} — ComicVerse Hub`;

  // Populate details with animations
  const cover = document.getElementById("cover-img");
  if (cover) {
    cover.src = comic.cover || comic.image || "";
    cover.alt = comic.title;
    
    // Add loading state
    cover.style.opacity = '0';
    cover.onload = () => {
      cover.style.transition = 'opacity 0.5s ease';
      cover.style.opacity = '1';
    };
  }

  document.getElementById("comic-title").textContent = comic.title || "";
  document.getElementById("comic-synopsis").textContent = comic.synopsis || "No synopsis available.";
  document.getElementById("comic-publisher").textContent = comic.publisher || "Unknown";
  document.getElementById("comic-creators").textContent = comic.creators || "Unknown";
  document.getElementById("comic-price").textContent = comic.price || "0";
  
  // Add publisher class for styling
  const detailPage = document.querySelector('.detail-page');
  if (detailPage) {
    detailPage.classList.add(`publisher-${comic.publisher.toLowerCase()}`);
  }
  
  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

function attachDetailHandlers() {
  const addBtn = document.getElementById("add-cart");
  if (!addBtn) return;

  addBtn.addEventListener("click", () => {
    const id = Number(getQueryParam("id"));
    const comic = (window.COMICS || []).find((c) => Number(c.id) === id);

    if (!comic) {
      showMessage("Comic not found", "error");
      return;
    }

    const qty = Number(document.getElementById("qty").value) || 1;

    // Show loading state
    const originalText = addBtn.innerHTML;
    addBtn.innerHTML = '<span class="loading"></span> Adding...';
    addBtn.disabled = true;

    let cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");

    const existing = cart.find((item) => Number(item.id) === id);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: comic.id,
        title: comic.title,
        price: comic.price,
        cover: comic.cover,
        qty,
      });
    }

    // Simulate processing delay for better UX
    setTimeout(() => {
      localStorage.setItem("comic_cart", JSON.stringify(cart));
      updateCartCountHeader();
      
      // Reset button
      addBtn.innerHTML = originalText;
      addBtn.disabled = false;
      
      // Show success message
      showMessage(`Added ${qty} ${qty > 1 ? 'copies' : 'copy'} of "${comic.title}" to cart!`);
      
      // Add visual feedback
      addBtn.classList.add('pulse');
      setTimeout(() => {
        addBtn.classList.remove('pulse');
      }, 1000);
    }, 500);
  });
}

function updateCartCountHeader() {
  const cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");
  const count = cart.reduce((total, item) => total + (item.qty || 0), 0);

  document.querySelectorAll("#cart-count, .cart-count").forEach((el) => {
    el.textContent = count;
    
    // Add pulse animation when count changes
    if (count > 0) {
      el.classList.add('pulse');
      setTimeout(() => {
        el.classList.remove('pulse');
      }, 2000);
    }
  });
}

/**
 * Show message to user
 */
function showMessage(text, type = "success") {
  // Create message element if it doesn't exist
  let msg = document.getElementById("cart-msg");
  if (!msg) {
    msg = document.createElement("div");
    msg.id = "cart-msg";
    document.body.appendChild(msg);
  }

  // Set different colors based on message type
  if (type === "error") {
    msg.style.background = "linear-gradient(135deg, #ff3e6c, #ff6b9c)";
  } else if (type === "warning") {
    msg.style.background = "linear-gradient(135deg, #ffc107, #ffd54f)";
  } else {
    msg.style.background = "linear-gradient(135deg, #0066ff, #00c4ff)";
  }

  msg.innerHTML = text;
  msg.classList.add("show");

  setTimeout(() => {
    msg.classList.remove("show");
  }, 3000);
}

/**
 * Create background particles for visual effect
 */
function createParticles() {
  const container = document.querySelector('main');
  if (!container) return;
  
  // Check if particles already exist
  if (document.querySelector('.particles')) return;
  
  const particles = document.createElement('div');
  particles.className = 'particles';
  
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 12 + 8;
    const animationDelay = Math.random() * 5;
    
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