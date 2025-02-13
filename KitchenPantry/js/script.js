document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const detailPanel = document.querySelector('.detail-panel');
    const closeBtn = document.querySelector('.close-btn');
    const detailTitle = document.getElementById('detail-title');
    const detailQuantity = document.getElementById('detail-quantity');
    const detailDescription = document.getElementById('detail-description');

    // Mock data for pantry items details
    const pantryItems = {
        1: { title: 'Flour', quantity: '5kg', description: 'All-purpose flour for baking.' },
        2: { title: 'Sugar', quantity: '3kg', description: 'Granulated sugar for sweetening.' },
        3: { title: 'Rice', quantity: '10kg', description: 'Basmati rice for daily meals.' }
    };

    // To toggle dark theme

    const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark")
    })


    cards.forEach(card => {
        card.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            const item = pantryItems[itemId];

            detailTitle.textContent = item.title;
            detailQuantity.textContent = `Quantity: ${item.quantity}`;
            detailDescription.textContent = item.description;

            detailPanel.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', function() {
        detailPanel.classList.remove('active');
    });
});
// Toggle Cart Pane
const cartIcon = document.getElementById('cart-icon');
const cartPane = document.getElementById('cart-pane');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');

cartIcon.addEventListener('click', () => {
    cartPane.classList.add('active');
    overlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartPane.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    cartPane.classList.remove('active');
    overlay.classList.remove('active');
});

// Toggle Notification Pane
const envelopeIcon = document.getElementById('envelope-icon');
const notificationPane = document.getElementById('notification-pane');
const closeNotifications = document.getElementById('close-notifications');
const notificationOverlay = document.getElementById('notification-overlay');

envelopeIcon.addEventListener('click', () => {
    notificationPane.classList.add('active');
    notificationOverlay.classList.add('active');
});

closeNotifications.addEventListener('click', () => {
    notificationPane.classList.remove('active');
    notificationOverlay.classList.remove('active');
});

notificationOverlay.addEventListener('click', () => {
    notificationPane.classList.remove('active');
    notificationOverlay.classList.remove('active');
});

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });