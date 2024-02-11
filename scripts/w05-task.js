/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    for(let i=0; i<temples.length; i++){
        temples[i].forEach(elmnt => {
            let artic = document.createElement('article');
            let h3 = document.createElement('h3');
            let img = document.createElement('img');
            h3.textContent = elmnt["templeName"];
            img.src = elmnt["imageUrl"];
            artic.appendChild(h3);
            artic.appendChild(img);
            templesElement.appendChild(artic);
        });
    }
}

const displayTemples2 = (temples) => {
    temples.forEach(elmnt => {
        let artic = document.createElement('article');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        h3.textContent = elmnt["templeName"];
        img.src = elmnt["imageUrl"];
        artic.appendChild(h3);
        artic.appendChild(img);
        templesElement.appendChild(artic);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(response.ok){
        const data = await response.json();
        templeList.unshift(data);
        displayTemples(templeList);
    }
}

/* reset Function */
function reset(){
    const list = document.getElementById("temples");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

/* filterTemples Function */
function filterTemples(templeList){
    reset();
    const filter = document.getElementById("filtered").value;
    let filtered_list = []
    switch(filter){
        case 'utah':
            for(let i=0; i<templeList.length; i++){
                for(let j=0; j<18; j++){
                    let location = templeList[i][j]["location"];
                    if(location.includes("Utah")==true){
                        filtered_list.push(templeList[i][j]);
                    }
                }
            }
            displayTemples2(filtered_list);
            break;
        case 'notutah':
            for(let i=0; i<templeList.length; i++){
                for(let j=0; j<18; j++){
                    let location = templeList[i][j]["location"];
                    if(location.includes("Utah")!=true){
                        filtered_list.push(templeList[i][j]);
                    }
                }
            }
            displayTemples2(filtered_list);
            break;
        case 'older':
            for(let i=0; i<templeList.length; i++){
                for(let j=0; j<18; j++){
                    let date_raw = templeList[i][j]["dedicated"];
                    let date = parseInt(date_raw.slice(0, 4));
                    if(date<1950){
                        filtered_list.push(templeList[i][j]);
                    }
                }
            }
            displayTemples2(filtered_list);
            break;
        case 'all':
            displayTemples(templeList);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });