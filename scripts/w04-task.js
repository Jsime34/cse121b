/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile = {
    name: "Jaime Gutierrez",
    photo: "images/pfp.jpeg",
    favorite_foods: [
        'Spaghetti',
        'Fried fish',
        'Pollo a la brasa',
        'Arroz chaufa',
        'Hamburger'
    ],
    hobbies: [
        'Playing videogames',
        'Hiking',
        'Playing soccer',
        'Traveling',
        'Coding'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myprofile.placesLived.push(
    {
        place: 'Trujillo, Peru',
        length: '1 year'
    },
    {
        place: 'Ica, Peru',
        length: '1 year'
    },
    {
        place: 'Majes, Peru',
        length: '16 years'
    },
    {
        place: 'Arequipa, Peru',
        length: '6 months'
    },
    {
        place: 'Rexburg, ID',
        length: '1 year'
    }    
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myprofile.name;
console.log(myprofile.name);

/* Photo with attributes */
const imageElement = document.getElementById("photo");
imageElement.src = myprofile.photo;
imageElement.setAttribute('alt', myprofile.name);

/* Favorite Foods List*/
myprofile.favorite_foods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
for(let i=0; i<myprofile.hobbies.length; i++){
    n_hobby = myprofile.hobbies[i]
    let li = document.createElement('li');
    li.textContent = n_hobby;
    document.querySelector('#hobbies').appendChild(li);
};

/* Places Lived DataList */

for(let i=0; i<myprofile.placesLived.length; i++) {
    let dt = document.createElement('dt');
    dt.textContent = myprofile.placesLived[i]['place'];
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = myprofile.placesLived[i]['length'];
    document.querySelector('#places-lived').appendChild(dd);
};