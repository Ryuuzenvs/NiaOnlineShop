// toggle tema gelap
const body = document.body;
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".nav-container");
const hero1 = document.querySelector(".img-responsive");
const hero2 = document.querySelector(".img-responsive1");
const heroDesc = document.querySelector(".hero-desc");
// debug nav menu, karna tidak bisa nav menu double function js, maka menggunakan header
var navMenu = document.querySelector(".header");

function setDarkMode(isDark) {
  // Set properti CSS sesuai keinginan Anda
  document.body.classList.toggle("darkmode", isDark);
  if (isDark) {
    body.classList.toggle("active");
    footer.classList.toggle("active");
    navbar.classList.toggle("active");
    hero1.classList.toggle("active");
    hero2.classList.toggle("active");
    navMenu.classList.toggle("active");
    heroDesc.classList.toggle("active");
    // // Ubah ke tema gelap
    // root.style.setProperty('--utama1', '#010101');
    // root.style.setProperty('--utama2', '#f0f0f0');
  } else {
    // Ubah ke tema terang
    // root.style.setProperty('--utama1', '#ff7f00');
    // root.style.setProperty('--utama2', '#333');
  }
}

// toggle class active
var navbarNav = document.querySelector(".nav-menu");

// ketika menu diklik
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar side bire untuk menghilangkan menu
const hamMenu = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle class active
const shopingCart = document.querySelector(".shopping-cart");

// ketika shoping cart diklik
document.querySelector("#shopping-cart").onclick = () => {
  shopingCart.classList.toggle("active");
};

// click diluar side bire untuk menghilangkan menu
const areaShoppingCart = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!areaShoppingCart.contains(e.target) && !shopingCart.contains(e.target)) {
    shopingCart.classList.remove("active");
  }
});

// ... (kode JavaScript Anda yang sudah ada)

// Fungsi untuk memperbarui jumlah produk
function updateQuantity(productId, isIncrease) {
  // Temukan elemen yang akan diupdate
  const quantityElement = document.querySelector(
    `.shopping-cart-item[data-product-id="${productId}"] .quantity`
  );
  const currentQuantity = parseInt(quantityElement.textContent);

  // Perbarui jumlah
  let newQuantity = isIncrease ? currentQuantity + 1 : currentQuantity - 1;
  quantityElement.textContent = newQuantity;

  // Batasi jumlah minimum menjadi 0
  newQuantity = isIncrease
    ? currentQuantity + 1
    : Math.max(currentQuantity - 1, 0);
  quantityElement.textContent = newQuantity;

  // Hitung total harga semua produk
  const allProductItems = document.querySelectorAll(".shopping-cart-item");
  let total = 0;
  allProductItems.forEach((item) => {
    const quantityElement = item.querySelector(".quantity");
    const priceElement = item.querySelector(".product-price");

    // Pastikan nilai quantity dan price adalah angka
    const quantity = parseInt(quantityElement.textContent);
    const price = parseFloat(priceElement.textContent.replace("Rp ", ""));

    if (!isNaN(quantity) && !isNaN(price)) {
      total += quantity * price;
    }
  });

  // Perbarui elemen total harga
  const totalPriceElement = document.querySelector(".total-price span");
  totalPriceElement.textContent = `Rp ${total.toFixed(2)}`;
}

// Tambahkan event listener ke tombol tambah dan kurang
const decreaseButtons = document.querySelectorAll(".decrease-btn");
decreaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.closest(".shopping-cart-item").dataset.productId;
    updateQuantity(productId, false);
  });
});

const increaseButtons = document.querySelectorAll(".increase-btn");
increaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.closest(".shopping-cart-item").dataset.productId;
    updateQuantity(productId, true);
  });
});

// fitur search
const searchButton = document.getElementById("search");
const searchInput = document.getElementById("search-input");

function clearHighlights() {
  const contentElements = document.querySelectorAll(".search-highlight");
  contentElements.forEach((element) => {
    element.classList.remove("search-highlight");
  });
}

searchInput.addEventListener("keyup", function () {
  const searchTerm = this.value.toLowerCase();
  searchContent(searchTerm);
});

function searchContent(searchTerm) {
  const contentElements = document.querySelectorAll("h1, h2, h3, p");

  for (let i = 0; i < contentElements.length; i++) {
    const contentElement = contentElements[i];
    const contentText = contentElement.textContent.toLowerCase();

    if (contentText.indexOf(searchTerm) !== -1) {
      contentElement.classList.add("search-highlight");
    } else {
      contentElement.classList.remove("search-highlight");
    }
  }
}

searchButton.addEventListener("click", () => {
  if (searchInput.classList.contains("hidden")) {
    searchInput.classList.remove("hidden");
    searchInput.classList.add("nonaktif", "muncul");

    setTimeout(() => {
      searchInput.classList.add("active");
    }, 300);
  } else {
    searchInput.classList.remove("nonaktif", "active");
    searchInput.classList.add("hidden");

    // Hapus semua sorotan jika input kosong
    if (searchInput.value === "") {
      clearHighlights();
    }
  }
});

// debug antiscroll
const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Cegah scroll ke atas
    const targetId = link.getAttribute("href");

    const targetElement = document.getElementById(targetId.slice(1)); // Hapus karakter "#"

    if (targetElement) {
      // Scroll ke elemen yang diinginkan dengan animasi (opsional)
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
