let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;
let lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `last modified: ${document.lastModified}`;

const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open")
    navigation.classList.toggle("open")
});