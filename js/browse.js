// js/browse.js - Enhanced with animations and advanced features
document.addEventListener("DOMContentLoaded", () => {
  try {
    initBrowse();
    updateCartCount();
    createParticles();
    initScrollAnimations();
  } catch (e) {
    console.error("browse init error", e);
  }
});

function updateCartCount() {
  try {
    const cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    document
      .querySelectorAll("#cart-count, .cart-count")
      .forEach((el) => (el.textContent = count));
  } catch (e) {
    console.error("updateCartCount error", e);
  }
}

function initBrowse() {
  buildPublisherFilter();
  renderComics(window.COMICS);
  attachBrowseHandlers();
  
  // Check for URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const publisher = urlParams.get('pub');
  if (publisher) {
    document.getElementById('filter-publisher').value = publisher;
    update();
  }
}

/**
 * Build publisher dropdown dynamically
 */
function buildPublisherFilter() {
  const select = document.getElementById("filter-publisher");
  if (!select || !window.COMICS) return;

  const pubs = [...new Set(window.COMICS.map((c) => c.publisher))];
  pubs.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    select.appendChild(opt);
  });
}

/**
 * RENDER ALL CARDS with animations
 */
function renderComics(list) {
  const grid = document.getElementById("comics-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = "<p class='no-results'>No comics found. Try adjusting your filters.</p>";
    return;
  }

  list.forEach((c, index) => {
    const card = document.createElement("div");
    card.className = `card fade-in publisher-${c.publisher.toLowerCase()}`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="comic-img">
        <img src="${c.cover}" alt="${c.title}" loading="lazy">
      </div>
      <div>
        <h3>${c.title}</h3>
        <p class="muted">${c.publisher}</p>
        <p class="price">₹ ${c.price}</p>
        <a class="btn" href="comic-detail.html?id=${c.id}">View Details</a>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Trigger animations after a short delay
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

/**
 * SEARCH + FILTER + SORT with enhanced UX
 */
function attachBrowseHandlers() {
  const search = document.getElementById("search");
  const filter = document.getElementById("filter-publisher");
  const sort = document.getElementById("sort-by");

  let timeoutId;

  function update() {
    let list = [...window.COMICS];

    // search
    const q = search.value.toLowerCase();
    if (q) {
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          (c.characters && c.characters.some((ch) => ch.toLowerCase().includes(q)))
      );
    }

    // filter
    if (filter.value !== "all") {
      list = list.filter((c) => c.publisher === filter.value);
    }

    // sort
    if (sort.value === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort.value === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sort.value === "title-az") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort.value === "title-za") {
      list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort.value === "date-desc") {
      list.sort((a, b) => new Date(b.release || 0) - new Date(a.release || 0));
    } else if (sort.value === "date-asc") {
      list.sort((a, b) => new Date(a.release || 0) - new Date(b.release || 0));
    }

    // Add visual feedback during filtering
    const grid = document.getElementById("comics-grid");
    if (grid) {
      grid.style.opacity = "0.5";
      grid.style.transition = "opacity 0.3s ease";
    }
    
    setTimeout(() => {
      renderComics(list);
      if (grid) {
        grid.style.opacity = "1";
      }
    }, 300);
  }

  // Debounced search
  search.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(update, 300);
  });
  
  filter.addEventListener("change", update);
  sort.addEventListener("change", update);
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
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 5 + 2;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 20 + 10;
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