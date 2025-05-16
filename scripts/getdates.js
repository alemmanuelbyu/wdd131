// Get the current year
let currentYear = new Date().getFullYear();

// Get the element to update with the current year
let currentYearElement = document.getElementById('currentyear');

// Update the element with the current year
currentYearElement.textContent = currentYear;

// Get the element to update with the last modified date
let lastModifiedElement = document.getElementById('lastModified');

// Update the element with the last modified date
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;