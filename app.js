/* ==========================================================================
   ORANGEBITES APP CONTROLLER & DUMMY DATA
   ========================================================================== */

// 1. DUMMY DATA: 5 Restaurants, 5 Menu Items Each
const RESTAURANT_DATA = [
  {
    id: "burger-lab",
    name: "Burger Lab",
    cuisine: "Gourmet Burgers • American • Fries",
    rating: 4.8,
    deliveryTime: "15-25 min",
    category: "burgers",
    image: "🍔",
    banner: "linear-gradient(135deg, #FF9F1C 0%, #FF6B35 100%)",
    menu: [
      {
        id: "burger-classic",
        name: "Classic Cheeseburger",
        price: 9.99,
        description: "Juicy hand-pressed beef smash patty, melted sharp cheddar cheese, signature house sauce, and pickles on a toasted brioche bun.",
        image: "🍔"
      },
      {
        id: "burger-truffle",
        name: "Truffle Mushroom Swiss",
        price: 12.49,
        description: "Premium beef patty topped with sautéed wild mushrooms, melted Swiss cheese, and luxurious white truffle aioli.",
        image: "🍄"
      },
      {
        id: "burger-crispy",
        name: "Crispy Chicken Burger",
        price: 10.99,
        description: "Spicy buttermilk fried chicken breast, shredded lettuce, fresh tomato slices, and chipotle mayo.",
        image: "🍗"
      },
      {
        id: "burger-fries-sweet",
        name: "Sweet Potato Fries",
        price: 4.49,
        description: "Crispy, sweet, and golden fries served with a honey mustard dipping sauce.",
        image: "🍟"
      },
      {
        id: "burger-fries-loaded",
        name: "Loaded Bacon Fries",
        price: 6.99,
        description: "Golden fries smothered in warm cheddar cheese sauce, topped with crispy smoked bacon bits and fresh chives.",
        image: "🥓"
      }
    ]
  },
  {
    id: "pizza-republic",
    name: "Pizza Republic",
    cuisine: "Neapolitan Pizza • Italian • Sides",
    rating: 4.7,
    deliveryTime: "20-30 min",
    category: "pizza",
    image: "🍕",
    banner: "linear-gradient(135deg, #E63946 0%, #FF6B35 100%)",
    menu: [
      {
        id: "pizza-margherita",
        name: "Margherita Pizza",
        price: 11.99,
        description: "Traditional San Marzano tomato sauce, fresh buffalo mozzarella, fresh basil leaves, and a drizzle of extra virgin olive oil.",
        image: "🌿"
      },
      {
        id: "pizza-pepperoni",
        name: "Double Pepperoni Pizza",
        price: 13.99,
        description: "Loaded with mozzarella, double portions of spicy cup-and-char pepperoni, and drizzled with hot chili honey.",
        image: "🍕"
      },
      {
        id: "pizza-veggie",
        name: "Garden Veggie Pizza",
        price: 12.99,
        description: "Assorted bell peppers, red onions, mushrooms, black olives, and sweet corn over a house tomato base.",
        image: "🥗"
      },
      {
        id: "pizza-truffle",
        name: "Truffle Bianca Pizza",
        price: 14.99,
        description: "White sauce pizza with wild forest mushrooms, fresh mozzarella, truffle oil, and dressed arugula.",
        image: "🍄"
      },
      {
        id: "pizza-doughballs",
        name: "Garlic Dough Balls",
        price: 5.99,
        description: "Freshly baked soft dough balls brushed with herb-garlic butter, served with a marinara dipping sauce.",
        image: "🧄"
      }
    ]
  },
  {
    id: "wok-roll",
    name: "Wok & Roll",
    cuisine: "Asian Fusion • Noodles • Stir-Fry",
    rating: 4.6,
    deliveryTime: "25-35 min",
    category: "asian",
    image: "🍜",
    banner: "linear-gradient(135deg, #D00000 0%, #FF8C42 100%)",
    menu: [
      {
        id: "wok-teriyaki",
        name: "Teriyaki Chicken Bowl",
        price: 12.99,
        description: "Grilled chicken thigh, steamed broccoli, carrots, and sweet teriyaki glaze served over fluffy jasmine rice.",
        image: "🍛"
      },
      {
        id: "wok-padthai",
        name: "Pad Thai Noodles",
        price: 13.49,
        description: "Rice noodles stir-fried with tofu, scrambled eggs, fresh bean sprouts, crushed peanuts, and a tangy tamarind sauce.",
        image: "🍜"
      },
      {
        id: "wok-shrimp",
        name: "Sweet & Sour Shrimp",
        price: 14.99,
        description: "Crispy tempura shrimp, pineapple chunks, bell peppers, and onions tossed in a signature sweet and sour glaze.",
        image: "🍤"
      },
      {
        id: "wok-rolls",
        name: "Vegetable Spring Rolls",
        price: 5.49,
        description: "Four crispy, golden spring rolls filled with seasoned mixed vegetables, served with sweet chili sauce.",
        image: "🥢"
      },
      {
        id: "wok-dandan",
        name: "Spicy Dan Dan Noodles",
        price: 12.99,
        description: "Wheat noodles in a spicy sesame peanut broth, topped with minced seasoned chicken and steamed pak choi.",
        image: "🌶️"
      }
    ]
  },
  {
    id: "green-garden",
    name: "Green Garden Salad",
    cuisine: "Healthy Bowls • Smoothies • Vegan",
    rating: 4.9,
    deliveryTime: "10-20 min",
    category: "healthy",
    image: "🥗",
    banner: "linear-gradient(135deg, #2EC4B6 0%, #FF8C42 100%)",
    menu: [
      {
        id: "salad-avocado",
        name: "Avocado Greens Bowl",
        price: 11.49,
        description: "Fresh sliced avocado, tricolor quinoa, cherry tomatoes, cucumbers, organic spinach, and lemon-herb vinaigrette.",
        image: "🥑"
      },
      {
        id: "salad-cobb",
        name: "Harvest Cobb Salad",
        price: 12.99,
        description: "Grilled chicken breast, hard-boiled egg, crispy bacon, avocado, crumbled blue cheese, and mixed farm greens.",
        image: "🥗"
      },
      {
        id: "salad-acai",
        name: "Acai Berry Bowl",
        price: 9.99,
        description: "Organic acai puree topped with honey almond granola, fresh strawberries, blueberries, bananas, and chia seeds.",
        image: "🍓"
      },
      {
        id: "salad-smoothie",
        name: "Tropical Green Smoothie",
        price: 6.49,
        description: "Nutritious blend of spinach, sweet mango, pineapple, banana, and chilled coconut milk.",
        image: "🥤"
      },
      {
        id: "salad-protein",
        name: "Protein Power Bowl",
        price: 13.49,
        description: "Spiced chickpeas, steamed edamame, roasted sweet potatoes, avocado, quinoa, and creamy tahini dressing.",
        image: "🍠"
      }
    ]
  },
  {
    id: "sweet-treats",
    name: "Sweet Treats",
    cuisine: "Desserts • Pastries • Coffee",
    rating: 4.8,
    deliveryTime: "15-25 min",
    category: "desserts",
    image: "🍰",
    banner: "linear-gradient(135deg, #FF007F 0%, #FF6B35 100%)",
    menu: [
      {
        id: "sweet-waffle",
        name: "Belgian Chocolate Waffle",
        price: 7.99,
        description: "Warm, thick Belgian waffle drizzled with melted milk chocolate, topped with whipped cream and chocolate curls.",
        image: "🧇"
      },
      {
        id: "sweet-pancakes",
        name: "Strawberry Dream Pancakes",
        price: 8.99,
        description: "Three fluffy buttermilk pancakes stacked with fresh glazed strawberries, maple syrup, and vanilla ice cream.",
        image: "🥞"
      },
      {
        id: "sweet-cheesecake",
        name: "Salted Caramel Cheesecake",
        price: 6.49,
        description: "Rich and creamy baked New York cheesecake topped with warm caramel sauce and sea salt crystals.",
        image: "🍰"
      },
      {
        id: "sweet-lava",
        name: "Chocolate Lava Cake",
        price: 5.99,
        description: "Decadent warm chocolate cake filled with a rich liquid fudge center, served with vanilla bean gelato.",
        image: "🧁"
      },
      {
        id: "sweet-cupcake",
        name: "Red Velvet Cupcake",
        price: 3.99,
        description: "Classic moist red velvet sponge cake topped with a generous swirl of sweet vanilla cream cheese frosting.",
        image: "🧁"
      }
    ]
  }
];

// 2. APP STATE MANAGEMENT
const STATE = {
  currentScreen: "home",
  selectedRestaurant: null,
  cart: [], // Array of { item, quantity, restaurantId, restaurantName }
  activeCategory: "all",
  orders: [] // Completed order records
};

// Pricing config
const PRICE_CONFIG = {
  deliveryFee: 2.00,
  taxRate: 0.08 // 8% tax
};

// 3. INITIALIZATION & ROUTING
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initEventListeners();
  renderHomeScreen();
  updateCartBadges();
  
  // Set initial icon renders
  feather.replace();
});

// Update the simulated phone status bar time
function initClock() {
  const timeEl = document.getElementById("status-time");
  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeEl.textContent = `${hours}:${minutes}`;
  };
  updateTime();
  setInterval(updateTime, 60000);
}

// Navigation screen transition controller
function navigateTo(screenId) {
  // Hide active screen
  const currentActive = document.querySelector(".app-screen.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }

  // Show target screen
  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) {
    targetScreen.classList.add("active");
    STATE.currentScreen = screenId;
    
    // Auto-scroll screen to top on navigation
    document.querySelector(".app-main-content").scrollTop = 0;
  }

  // Handle header controls configuration
  const header = document.getElementById("app-header");
  const backBtn = document.getElementById("header-back-btn");
  const titleEl = document.getElementById("header-title");
  const subtitleEl = document.getElementById("header-subtitle");
  const cartBtn = document.getElementById("header-cart-btn");

  // Default display states
  header.classList.remove("hidden");
  backBtn.classList.remove("hidden");
  cartBtn.classList.remove("hidden");

  switch (screenId) {
    case "home":
      backBtn.classList.add("hidden");
      titleEl.textContent = "OrangeBites";
      titleEl.style.color = "var(--primary)";
      subtitleEl.textContent = "Deliver to: Gourmet City";
      break;

    case "menu":
      titleEl.textContent = STATE.selectedRestaurant ? STATE.selectedRestaurant.name : "Restaurant Menu";
      titleEl.style.color = "var(--dark)";
      subtitleEl.textContent = STATE.selectedRestaurant ? STATE.selectedRestaurant.cuisine.split("•")[0] : "";
      break;

    case "cart":
      titleEl.textContent = "Your Cart";
      titleEl.style.color = "var(--dark)";
      subtitleEl.textContent = STATE.cart.length > 0 ? `${STATE.cart.reduce((sum, item) => sum + item.quantity, 0)} items selected` : "Empty";
      cartBtn.classList.add("hidden");
      break;

    case "checkout":
      titleEl.textContent = "Checkout";
      titleEl.style.color = "var(--dark)";
      subtitleEl.textContent = "Confirm details";
      cartBtn.classList.add("hidden");
      break;

    case "success":
      // Success screen has no default header (it stands alone visually)
      header.classList.add("hidden");
      break;
      
    case "orders-list":
      titleEl.textContent = "Your Orders";
      titleEl.style.color = "var(--dark)";
      subtitleEl.textContent = `${STATE.orders.length} orders total`;
      backBtn.classList.add("hidden");
      break;
  }

  // Highlight bottom navigation tabs
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  
  if (screenId === "home") {
    document.getElementById("nav-home").classList.add("active");
  } else if (screenId === "cart" || screenId === "checkout") {
    document.getElementById("nav-cart").classList.add("active");
  } else if (screenId === "orders-list" || screenId === "success") {
    document.getElementById("nav-orders").classList.add("active");
  }

  // Refresh Feather Vector Icons
  feather.replace();
}

// Global Event Listeners setup
function initEventListeners() {
  // Header Back Button
  document.getElementById("header-back-btn").addEventListener("click", () => {
    if (STATE.currentScreen === "menu") {
      navigateTo("home");
    } else if (STATE.currentScreen === "cart") {
      if (STATE.selectedRestaurant) {
        navigateTo("menu");
      } else {
        navigateTo("home");
      }
    } else if (STATE.currentScreen === "checkout") {
      navigateTo("cart");
    }
  });

  // Header Cart Shortcut Button
  document.getElementById("header-cart-btn").addEventListener("click", () => {
    navigateTo("cart");
    renderCartScreen();
  });

  // Bottom Navigation tabs click handlers
  document.getElementById("nav-home").addEventListener("click", () => {
    navigateTo("home");
  });
  document.getElementById("nav-cart").addEventListener("click", () => {
    navigateTo("cart");
    renderCartScreen();
  });
  document.getElementById("nav-orders").addEventListener("click", () => {
    renderOrdersListScreen();
  });

  // Category filter selection pills
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const category = card.getAttribute("data-category");
      
      document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      
      STATE.activeCategory = category;
      renderHomeScreen();
    });
  });

  // Cart Button - Proceed to Checkout
  document.getElementById("btn-to-checkout").addEventListener("click", () => {
    if (STATE.cart.length > 0) {
      navigateTo("checkout");
      renderCheckoutScreen();
    }
  });

  // Checkout Button - Place Order
  document.getElementById("btn-place-order").addEventListener("click", () => {
    validateAndPlaceOrder();
  });

  // Success Screen - Back to home
  document.getElementById("btn-success-home").addEventListener("click", () => {
    navigateTo("home");
  });

  // Checkout Payment Option switching
  document.querySelectorAll(".payment-option-card:not(.disabled)").forEach(option => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".payment-option-card").forEach(o => o.classList.remove("active"));
      option.classList.add("active");
    });
  });
}

// 4. RENDERING FUNCTIONS

// Home Screen Rendering
function renderHomeScreen() {
  const container = document.getElementById("restaurants-list");
  container.innerHTML = "";

  // Filter restaurants by category
  const filtered = STATE.activeCategory === "all" 
    ? RESTAURANT_DATA 
    : RESTAURANT_DATA.filter(r => r.category === STATE.activeCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No restaurants found</h3>
        <p>Try searching for a different category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(restaurant => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
      <div class="restaurant-card-image-box">
        <div class="restaurant-card-img" style="background: ${restaurant.banner}"></div>
        <div class="card-fallback-badge">${restaurant.image}</div>
        <div class="card-badge-rating">
          <i data-feather="star"></i>
          <span>${restaurant.rating}</span>
        </div>
      </div>
      <div class="restaurant-card-info">
        <div class="card-title-row">
          <h3>${restaurant.name}</h3>
        </div>
        <p class="card-cuisine">${restaurant.cuisine}</p>
        <div class="card-footer-row">
          <div class="card-footer-item">
            <i data-feather="clock"></i>
            <span>${restaurant.deliveryTime}</span>
          </div>
          <div class="card-footer-item">
            <i data-feather="dollar-sign"></i>
            <span>Free Delivery</span>
          </div>
        </div>
      </div>
    `;

    // Click handler to open restaurant menu
    card.addEventListener("click", () => {
      openRestaurantMenu(restaurant.id);
    });

    container.appendChild(card);
  });

  feather.replace();
}

// Open Restaurant details screen
function openRestaurantMenu(restaurantId) {
  const restaurant = RESTAURANT_DATA.find(r => r.id === restaurantId);
  if (!restaurant) return;

  STATE.selectedRestaurant = restaurant;
  
  // Set Menu screen info
  document.getElementById("menu-restaurant-banner").style.background = restaurant.banner;
  document.getElementById("menu-restaurant-name").textContent = restaurant.name;
  document.getElementById("menu-restaurant-rating").textContent = restaurant.rating;
  document.getElementById("menu-restaurant-time").textContent = restaurant.deliveryTime;
  document.getElementById("menu-restaurant-cuisine").textContent = restaurant.cuisine;

  // Render menu items list
  renderMenuItems(restaurant);
  navigateTo("menu");
}

// Render Menu Items
function renderMenuItems(restaurant) {
  const container = document.getElementById("menu-items-list");
  container.innerHTML = "";

  restaurant.menu.forEach(item => {
    // Check if this item is currently in the cart
    const cartEntry = STATE.cart.find(c => c.item.id === item.id);
    const quantity = cartEntry ? cartEntry.quantity : 0;

    const card = document.createElement("div");
    card.className = "menu-item-card";
    card.innerHTML = `
      <div class="menu-item-image-wrapper">
        <div class="menu-item-img" style="font-size: 2.2rem; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
          ${item.image}
        </div>
      </div>
      <div class="menu-item-details">
        <div>
          <h4>${item.name}</h4>
          <p class="menu-item-desc">${item.description}</p>
        </div>
        <div class="menu-item-footer">
          <span class="menu-item-price">$${item.price.toFixed(2)}</span>
          <div class="action-btn-container" id="action-container-${item.id}">
            ${quantity > 0 
              ? `<div class="item-counter">
                  <button class="counter-btn dec-qty" data-id="${item.id}"><i data-feather="minus"></i></button>
                  <span class="counter-val">${quantity}</span>
                  <button class="counter-btn inc-qty" data-id="${item.id}"><i data-feather="plus"></i></button>
                 </div>`
              : `<button class="add-to-cart-btn" data-id="${item.id}">
                  <i data-feather="plus"></i> Add
                 </button>`
            }
          </div>
        </div>
      </div>
    `;

    // Add to cart click event
    const actionContainer = card.querySelector(`#action-container-${item.id}`);
    
    // Set up button listeners dynamically
    bindItemActionListeners(actionContainer, restaurant.id, item);

    container.appendChild(card);
  });

  feather.replace();
}

// Bind clicks inside item action containers
function bindItemActionListeners(container, restaurantId, item) {
  // Add item to cart button click
  const addBtn = container.querySelector(".add-to-cart-btn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      addToCart(restaurantId, item);
    });
  }

  // Inc quantity
  const incBtn = container.querySelector(".inc-qty");
  if (incBtn) {
    incBtn.addEventListener("click", () => {
      changeQuantity(item.id, 1);
    });
  }

  // Dec quantity
  const decBtn = container.querySelector(".dec-qty");
  if (decBtn) {
    decBtn.addEventListener("click", () => {
      changeQuantity(item.id, -1);
    });
  }
}

// 5. CART OPERATIONS

// Add item to cart logic
function addToCart(restaurantId, item) {
  // Check if cart already has items from another restaurant
  const otherRestaurantItem = STATE.cart.find(c => c.restaurantId !== restaurantId);
  
  if (otherRestaurantItem) {
    const confirmClear = confirm(`Your cart contains items from "${otherRestaurantItem.restaurantName}". Clear cart and start a new order from "${STATE.selectedRestaurant.name}"?`);
    if (confirmClear) {
      STATE.cart = [];
    } else {
      return; // Do nothing
    }
  }

  // Add the item
  STATE.cart.push({
    item: item,
    quantity: 1,
    restaurantId: restaurantId,
    restaurantName: STATE.selectedRestaurant.name
  });

  updateCartBadges();
  
  // Refresh menu list items to show counter
  if (STATE.currentScreen === "menu") {
    renderMenuItems(STATE.selectedRestaurant);
  }
}

// Change Quantity
function changeQuantity(itemId, delta) {
  const cartIndex = STATE.cart.findIndex(c => c.item.id === itemId);
  if (cartIndex === -1) return;

  STATE.cart[cartIndex].quantity += delta;

  // If quantity is 0 or less, remove item from cart
  if (STATE.cart[cartIndex].quantity <= 0) {
    STATE.cart.splice(cartIndex, 1);
  }

  updateCartBadges();

  // Re-render appropriate screen based on where action happened
  if (STATE.currentScreen === "menu") {
    renderMenuItems(STATE.selectedRestaurant);
  } else if (STATE.currentScreen === "cart") {
    renderCartScreen();
  }
}

// Remove item entirely from cart
function removeCartItem(itemId) {
  STATE.cart = STATE.cart.filter(c => c.item.id !== itemId);
  updateCartBadges();
  if (STATE.currentScreen === "cart") {
    renderCartScreen();
  }
}

// Update badges on headers/nav bar
function updateCartBadges() {
  const totalQty = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const headerBadge = document.getElementById("header-cart-badge");
  const navBadge = document.getElementById("nav-cart-badge");

  if (totalQty > 0) {
    headerBadge.textContent = totalQty;
    headerBadge.classList.remove("hidden");
    navBadge.textContent = totalQty;
    navBadge.classList.remove("hidden");
  } else {
    headerBadge.classList.add("hidden");
    navBadge.classList.add("hidden");
  }

  // Update header subtitle if on cart page
  if (STATE.currentScreen === "cart") {
    document.getElementById("header-subtitle").textContent = totalQty > 0 ? `${totalQty} items selected` : "Empty";
  }
}

// Render Cart Screen
function renderCartScreen() {
  const container = document.getElementById("cart-items-list");
  const emptyState = document.getElementById("cart-empty-state");
  const priceSummary = document.getElementById("cart-price-summary");

  container.innerHTML = "";

  if (STATE.cart.length === 0) {
    emptyState.classList.remove("hidden");
    priceSummary.classList.add("hidden");
    
    // Add event listener to empty state browse button
    emptyState.querySelector(".return-home-btn").addEventListener("click", () => {
      navigateTo("home");
    });
    return;
  }

  emptyState.classList.add("hidden");
  priceSummary.classList.remove("hidden");

  // Render Restaurant Header block in cart
  const cartHeader = document.createElement("div");
  cartHeader.className = "cart-restaurant-banner";
  cartHeader.innerHTML = `
    <i data-feather="shopping-bag" style="width:16px; height:16px;"></i>
    <span>Ordering from: <strong>${STATE.cart[0].restaurantName}</strong></span>
  `;
  container.appendChild(cartHeader);

  // Render items rows
  let subtotal = 0;

  STATE.cart.forEach(entry => {
    const itemTotal = entry.item.price * entry.quantity;
    subtotal += itemTotal;

    const row = document.createElement("div");
    row.className = "cart-item-row";
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-img-box">
          <span style="font-size: 1.5rem">${entry.item.image}</span>
        </div>
        <div class="cart-item-meta">
          <h4>${entry.item.name}</h4>
          <p>$${entry.item.price.toFixed(2)}</p>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="item-counter">
          <button class="counter-btn dec-qty" data-id="${entry.item.id}"><i data-feather="minus"></i></button>
          <span class="counter-val">${entry.quantity}</span>
          <button class="counter-btn inc-qty" data-id="${entry.item.id}"><i data-feather="plus"></i></button>
        </div>
        <button class="remove-cart-item-btn" data-id="${entry.item.id}">
          <i data-feather="trash-2"></i>
        </button>
      </div>
    `;

    // Hook events
    row.querySelector(".dec-qty").addEventListener("click", () => changeQuantity(entry.item.id, -1));
    row.querySelector(".inc-qty").addEventListener("click", () => changeQuantity(entry.item.id, 1));
    row.querySelector(".remove-cart-item-btn").addEventListener("click", () => removeCartItem(entry.item.id));

    container.appendChild(row);
  });

  // Calculate pricing totals
  const tax = subtotal * PRICE_CONFIG.taxRate;
  const grandTotal = subtotal + PRICE_CONFIG.deliveryFee + tax;

  document.getElementById("price-subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("price-delivery").textContent = `$${PRICE_CONFIG.deliveryFee.toFixed(2)}`;
  document.getElementById("price-tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("price-grand-total").textContent = `$${grandTotal.toFixed(2)}`;

  feather.replace();
}

// Render Checkout Screen details
function renderCheckoutScreen() {
  let subtotal = STATE.cart.reduce((sum, entry) => sum + (entry.item.price * entry.quantity), 0);
  const tax = subtotal * PRICE_CONFIG.taxRate;
  const grandTotal = subtotal + PRICE_CONFIG.deliveryFee + tax;

  document.getElementById("checkout-amount").textContent = `$${grandTotal.toFixed(2)}`;
  
  // Hide errors initially
  document.querySelectorAll(".validation-error").forEach(err => err.classList.remove("visible"));
}

// 6. ORDER PLACEMENT AND SUCCESS SCREEN
function validateAndPlaceOrder() {
  const nameInput = document.getElementById("input-name");
  const phoneInput = document.getElementById("input-phone");
  const addressInput = document.getElementById("input-address");

  const nameError = document.getElementById("error-name");
  const phoneError = document.getElementById("error-phone");
  const addressError = document.getElementById("error-address");

  let isValid = true;

  // Name Validation
  if (nameInput.value.trim() === "") {
    nameError.classList.add("visible");
    isValid = false;
  } else {
    nameError.classList.remove("visible");
  }

  // Phone Validation: Basic digits count check
  const cleanPhone = phoneInput.value.replace(/\D/g, "");
  if (cleanPhone.length < 7) {
    phoneError.classList.add("visible");
    isValid = false;
  } else {
    phoneError.classList.remove("visible");
  }

  // Address Validation
  if (addressInput.value.trim() === "") {
    addressError.classList.add("visible");
    isValid = false;
  } else {
    addressError.classList.remove("visible");
  }

  if (!isValid) return;

  // Generate order details
  const randomOrderNum = "OB-" + Math.floor(10000 + Math.random() * 90000);
  const deliveryAddress = addressInput.value.trim();
  const restaurantName = STATE.cart[0].restaurantName;
  const orderTotal = document.getElementById("checkout-amount").textContent;

  // Add order to database list
  const newOrder = {
    orderNumber: randomOrderNum,
    restaurantName: restaurantName,
    amount: orderTotal,
    date: new Date().toLocaleDateString(),
    address: deliveryAddress
  };
  STATE.orders.unshift(newOrder);

  // Configure success screen values
  document.getElementById("success-order-number").textContent = randomOrderNum;
  document.getElementById("success-delivery-address").textContent = deliveryAddress;

  // Clear Cart State
  STATE.cart = [];
  STATE.selectedRestaurant = null;
  updateCartBadges();

  // Redirect to success screen
  navigateTo("success");
}

// Render Orders List screen (for "Orders" tab in bottom navigation)
function renderOrdersListScreen() {
  navigateTo("orders-list");
  
  const container = document.getElementById("restaurants-list"); // Reusing list body dynamically
  container.innerHTML = "";

  const sectionTitle = document.createElement("h2");
  sectionTitle.className = "section-title";
  sectionTitle.style.margin = "20px 0 10px 0";
  sectionTitle.textContent = "Past Orders";
  container.appendChild(sectionTitle);

  if (STATE.orders.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <div class="empty-icon-wrapper" style="background: var(--primary-light)">
        <i data-feather="clipboard" class="empty-icon" style="color:var(--primary)"></i>
      </div>
      <h3>No Orders Yet</h3>
      <p>Your order history is empty. Go ahead, place a delicious order!</p>
      <button class="primary-btn return-home-btn" style="margin-top:16px;">Order Food</button>
    `;
    empty.querySelector(".return-home-btn").addEventListener("click", () => {
      navigateTo("home");
      renderHomeScreen();
    });
    container.appendChild(empty);
    feather.replace();
    return;
  }

  const listCard = document.createElement("div");
  listCard.style.display = "flex";
  listCard.style.flexDirection = "column";
  listCard.style.gap = "12px";

  STATE.orders.forEach(order => {
    const card = document.createElement("div");
    card.className = "checkout-section-card";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.gap = "6px";
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 1px dashed var(--gray-light); padding-bottom:6px;">
        <span style="font-weight:700; color:var(--primary); font-size:0.85rem;">${order.orderNumber}</span>
        <span style="font-size:0.75rem; color:var(--gray-medium);">${order.date}</span>
      </div>
      <div style="font-family:var(--font-title); font-size:0.95rem; font-weight:800; color:var(--dark); margin-top:2px;">
        ${order.restaurantName}
      </div>
      <div style="font-size:0.75rem; color:var(--gray-dark); margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
        Deliver to: ${order.address}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; padding-top:6px; border-top:1px solid var(--gray-light);">
        <span style="font-size:0.75rem; color:var(--gray-medium);">Total Amount paid:</span>
        <strong style="color:var(--dark); font-size:0.9rem;">${order.amount}</strong>
      </div>
    `;
    listCard.appendChild(card);
  });

  container.appendChild(listCard);
  feather.replace();
}
