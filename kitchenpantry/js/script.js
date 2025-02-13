


// script.js
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




const cardsContainer = document.querySelector('.cards-container');
const leftSlideBtn = document.getElementById('left-slide-btn');
const rightSlideBtn = document.getElementById('right-slide-btn');
const seeDetailsBtns = document.querySelectorAll('.see-details-btn');
const detailsPopup = document.getElementById('details-popup');
const popupDetailsText = document.getElementById('popup-details-text');
const closePopupBtn = document.getElementById('close-popup-btn');

let scrollAmount = 0;
const cardWidth = 220; // Width of each card including margin

// Slide cards to the left
leftSlideBtn.addEventListener('click', () => {
  scrollAmount = Math.max(scrollAmount - cardWidth, 0);
  cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

// Slide cards to the right
rightSlideBtn.addEventListener('click', () => {
  const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
  scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
  cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

// Show details popup when clicking a card or "See details" button
seeDetailsBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const details = card.getAttribute('data-details');
    popupDetailsText.textContent = details;
    detailsPopup.style.display = 'flex';
  });
});

// Close the popup
closePopupBtn.addEventListener('click', () => {
  detailsPopup.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === detailsPopup) {
    detailsPopup.style.display = 'none';
  }
});



// const CaroS = document.querySelector('.Carousel-slider');
// const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: ''});
// const hammer = new hammer(CaroS);
// const CaroSTimer = 2000;
// let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);


// CaroS.onmouseenter = function(e){
//     clearInterval(CaroAutoplay);
//     console.log(e.type + 'mouse detected');
// }


// CaroS.onmouseleave = function(e){
//     clearInterval(CaroAutoplay);
//     CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
//     console.log(e.type + 'mouse detected');
// }

// CaroS.onclick = function(e){
//     clearInterval(CaroAutoplay);
//     console.log(e.type + 'mouse detected');
// }

// hammer.on('tap', function(e){
//     clearInterval(CaroAutoplay);
//     console.log(e.type + 'gesture detected');
// });


// hammer.on('swipe', function(e){
//     clearInterval(CaroAutoplay);
//     CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
//     console.log(e.type + 'gesture detected');
// });


// let sliderLink = document.querySelectorAll('.slider-item');
// if(sliderLink && sliderLink !== null && sliderLink.length > 0){
//     sliderLink.forEach(e1 => e1.addEventListener('click', e=> {
//         e.preventDefault();
//         let href = e1.dataset.href;
//         let target = e1.dataset.target;
//         if(href !== '#') window.open(href, target);
//     }));
// }