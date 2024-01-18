/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jaime Gutierrez";
let currentYear = 2024;
var profilePicture = "images/pfp.jpeg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.getElementById('img');
imageElement.src = profilePicture;

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

foods = ["Spaguetti", "Fried chicken", "Ceviche", "Fried squid"];
foodElement.innerHTML = foods;
new_food = " Arroz chaufa";
foods.push(new_food);
foodElement.innerHTML += `<br> ${foods}`;
foods = foods.slice(1);
foodElement.innerHTML += `<br> ${foods}`;
foods = foods.slice(0, -1);
foodElement.innerHTML += `<br> ${foods}`;