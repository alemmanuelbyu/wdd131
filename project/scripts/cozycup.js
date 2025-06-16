let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;
let lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `last modified: ${document.lastModified}`;

const products = [
    { id: "latte", name: "Latte", averagerating: 4.5 },
    { id: "cappuccino", name: "Cappuccino", averagerating: 4.7 },
    { id: "espresso", name: "Espresso", averagerating: 4.2 },
    { id: "mocha", name: "Mocha", averagerating: 4.8 },
    { id: "drip-coffee", name: "Drip Coffee", averagerating: 4.0 }
];

const productNameSelect = document.getElementById('Productname');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

const reviewCount = localStorage.getItem('reviewCount') || 0;
localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);

if (parseInt(reviewCount) + 1 === 1) {
  document.getElementById('review-count').innerText = `This is your first review!`;
} else {
  document.getElementById('review-count').innerText = `Review Count: ${localStorage.getItem('reviewCount')}`;
}
