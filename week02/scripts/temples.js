let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;
let lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `last modified: ${document.lastModified}`;