function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;
}

function getLastModified() {
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
}

function calculateWindChill(temperature, windSpeed) {
  
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}
function displayWindChill() {
  const temperature = 26; 
  const windSpeed = 4;
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector(".weather li:last-child").innerHTML = `<strong>Wind Chill:</strong> ${windChill.toFixed(2)}℃`;
  } else {
    document.querySelector(".weather li:last-child").innerHTML = `<strong>Wind Chill:</strong> N/A`;
  }
}
getCurrentYear();
getLastModified();
displayWindChill();