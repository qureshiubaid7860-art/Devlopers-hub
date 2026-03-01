// ===== CATEGORY DROPDOWN TOGGLE =====
function toggleCategories() {
    const categories = document.getElementById("categories");
    categories.classList.toggle("active");
}

// ===== CARD & BUTTON HOVER EFFECTS =====
document.addEventListener("DOMContentLoaded", () => {
    // All cards to apply hover effects
    const cards = document.querySelectorAll(".product, .card, .recommend-card, .service-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            card.style.transition = "all 0.3s ease";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });

    // ===== ALL BUTTONS HOVER =====
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-2px)";
            btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
            btn.style.transition = "all 0.3s ease";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = "none";
        });
    });

    // ===== SUBSCRIBE BUTTON SPECIAL COLOR CHANGE =====
    const subscribeBtn = document.querySelector(".subscribe-input button");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("mouseenter", () => {
            subscribeBtn.style.backgroundColor = "#0D6EFD";
        });
        subscribeBtn.addEventListener("mouseleave", () => {
            subscribeBtn.style.backgroundColor = "#127FFF";
        });
    }

    // ===== INQUIRY FORM BUTTON COLOR FIX =====
    const inquiryBtn = document.querySelector(".inquiry-box button");
    if (inquiryBtn) {
        inquiryBtn.addEventListener("mouseenter", () => {
            inquiryBtn.style.transform = "translateY(-2px)";
            inquiryBtn.style.boxShadow = "0 8px 20px rgba(30, 136, 229, 0.3)";
        });
        inquiryBtn.addEventListener("mouseleave", () => {
            inquiryBtn.style.transform = "translateY(0)";
            inquiryBtn.style.boxShadow = "none";
        });
    }
});

const countryDropdown = document.querySelector(".country-dropdown");
const flagImg = document.querySelector(".country-selector .flag");

const flagMap = {
    "us": "./images/property 1=US.png",
    "de": "./images/property 1=AE.png",
    "ae": "./images/ger.png"
};


countryDropdown.addEventListener("change", () => {
    const selectedValue = countryDropdown.value; 
    if(flagMap[selectedValue]){
        flagImg.src = flagMap[selectedValue]; 
    }
});



const selectedCountry = document.getElementById('selectedCountry');
const countryOptions = document.getElementById('countryOptions');

selectedCountry.addEventListener('click', () => {
  countryOptions.style.display = countryOptions.style.display === 'block' ? 'none' : 'block';
});

countryOptions.querySelectorAll('li').forEach(option => {
  option.addEventListener('click', () => {
    selectedCountry.querySelector('.flag').src = option.getAttribute('data-flag');
    selectedCountry.querySelector('.country-name').textContent = option.getAttribute('data-name');
    countryOptions.style.display = 'none';
  });
});


document.addEventListener('click', (e) => {
  if (!selectedCountry.contains(e.target) && !countryOptions.contains(e.target)) {
    countryOptions.style.display = 'none';
  }
});



  function changeImage(img) {
            document.getElementById("bigImage").src = img.src;
        }