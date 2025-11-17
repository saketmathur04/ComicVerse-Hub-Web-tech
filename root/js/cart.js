// js/cart.js - Enhanced with animations and better UX
document.addEventListener("DOMContentLoaded", () => {
  try {
    loadCart();
    attachCartHandlers();
    updateNavCount();
    createParticles();
    initScrollAnimations();
  } catch (e) {
    console.error("cart init error", e);
  }
});

/* ----------------------------
   LOAD MAIN CART LIST with animations
-----------------------------*/
function showMessage(text, type = "success") {
  const msg = document.getElementById("cart-msg");
  if (!msg) return;

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

function loadCart() {
  const list = JSON.parse(localStorage.getItem("comic_cart") || "[]");
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (!container) return;

  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = `
      <div class="empty-cart fade-in">
        <h3>Your cart is empty</h3>
        <p>Browse our collection and add some comics!</p>
        <a href="browse.html" class="btn">Start Shopping</a>
      </div>
    `;
    if (totalEl) totalEl.textContent = "0";
    
    // Show empty cart animation
    setTimeout(() => {
      document.querySelector('.empty-cart')?.classList.add('visible');
    }, 100);
    
    return;
  }

  let total = 0;

  list.forEach((item, index) => {
    const comic = (window.COMICS || []).find((c) => c.id === item.id);

    if (!comic) return;

    const row = document.createElement("div");
    row.className = `cart-item fade-in publisher-${comic.publisher.toLowerCase()}`;
    row.style.animationDelay = `${index * 0.1}s`;

    row.innerHTML = `
      <img src="${item.cover}" width="90" height="130" alt="${comic.title}" loading="lazy">
      
      <div style="flex:1; padding: 0 15px">
        <h4>${comic.title}</h4>
        <p class="muted">${comic.publisher}</p>
        <p>₹ ${comic.price} × 
          <input class="qty-input" 
            data-id="${comic.id}" 
            type="number" 
            min="1" 
            value="${item.qty}" 
            style="width:70px">
        </p>
      </div>

      <div style="text-align:right">
        <p class="price">₹ ${comic.price * item.qty}</p>
        <button class="remove-item" data-id="${comic.id}">
          <span class="loading" style="display:none"></span>
          Remove
        </button>
      </div>
    `;

    container.appendChild(row);
    total += comic.price * item.qty;
  });

  if (totalEl) totalEl.textContent = total;

  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

/* ----------------------------
   PREVIEW SECTION (IMAGES ONLY)
-----------------------------*/
function loadPreview() {
  const preview = document.getElementById("cart-preview");
  if (!preview) return;

  const list = JSON.parse(localStorage.getItem("comic_cart") || "[]");

  preview.innerHTML = "";

  if (!list.length) {
    preview.innerHTML = "<p class='muted'>No items in cart</p>";
    return;
  }

  list.forEach((item, index) => {
    const comic = (window.COMICS || []).find((c) => c.id === item.id);
    if (!comic) return;

    const card = document.createElement("div");
    card.className = "preview-card fade-in";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <img src="${item.cover}" alt="${comic.title}" loading="lazy">
      <p>${comic.title}</p>
      <small class="muted">Qty: ${item.qty}</small>
    `;

    preview.appendChild(card);
  });
  
  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

/* ----------------------------
   CART HANDLERS with enhanced UX
-----------------------------*/
function attachCartHandlers() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  // quantity change
  container.addEventListener("change", (e) => {
    if (e.target.classList.contains("qty-input")) {
      const id = parseInt(e.target.dataset.id);
      const qty = Math.max(1, parseInt(e.target.value));

      let cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");
      const it = cart.find((x) => x.id === id);

      if (it) {
        it.qty = qty;
        localStorage.setItem("comic_cart", JSON.stringify(cart));
        loadCart();
        updateNavCount();
        showMessage("Quantity updated!");
      }
    }
  });

  // remove item
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const button = e.target;
      const id = parseInt(button.dataset.id);
      
      // Show loading state
      const loading = button.querySelector('.loading');
      const text = button.innerHTML;
      button.innerHTML = '<span class="loading"></span> Removing...';
      button.disabled = true;

      let cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");
      const it = cart.find((x) => x.id === id);

      if (!it) return;

      if (it.qty > 1) {
        // reduce only 1 qty
        it.qty -= 1;
        showMessage("Item quantity decreased");
      } else {
        // remove full item if qty == 1
        cart = cart.filter((x) => x.id !== id);
        showMessage("Item removed from cart");
      }

      setTimeout(() => {
        localStorage.setItem("comic_cart", JSON.stringify(cart));
        loadCart();
        updateNavCount();
        
        // Reset button state
        button.innerHTML = text;
        button.disabled = false;
      }, 500);
    }
  });

  // checkout
  const checkout = document.getElementById("checkout");
  if (checkout) {
    checkout.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");

      if (!cart.length) {
        showMessage("Your cart is empty!", "warning");
        return;
      }

      // Show loading state
      const originalText = checkout.innerHTML;
      checkout.innerHTML = '<span class="loading"></span> Processing...';
      checkout.disabled = true;

      // Simulate processing delay
      setTimeout(() => {
        localStorage.removeItem("comic_cart");
        loadCart();
        updateNavCount();
        showMessage("Thank you for your order! Your comics are on the way!", "success");
        
        // Reset button
        checkout.innerHTML = originalText;
        checkout.disabled = false;
      }, 1500);
    });
  }
}

/* ----------------------------
   UPDATE CART COUNT IN HEADER
-----------------------------*/
function updateNavCount() {
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
    console.error("updateNavCount error", e);
  }
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
  
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 15 + 10;
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