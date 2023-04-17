import './style.css'
import Person from './Person.js';

const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');
const addRandomPersonButton = document.getElementById('randomPersonButton');

new Person("jason", 60);
console.log(jason.getName());


addRandomPersonButton.addEventListener('click', ()=> {
    getRandomUser();
})

let nameArr = []
let ageArr = []


async function getRandomUser() {
    const data = await fetch('https://randomuser.me/api/');
    const json = await data.json();
    console.log(json.results[0])
    let name = json.results[0].name.first;
    let age = json.results[0].dob.age;
    let picture = json.results[0].picture.large;
    console.log(picture);
    addPerson(name, age, picture);
}

console.log(form);


submitButton.addEventListener('click', clickHandler);

function clickHandler(e){
    e.preventDefault();
    let formData = new FormData(form);

    // nameArr.push(formData.get("name_input"));
    // ageArr.push(formData.get("age"));

    addPerson(formData.get("name_input"), formData.get("age" ));

    viewNameArr();
    viewAgeArr();
}

function viewNameArr(){
    for(let i = 0; i < nameArr.length; i++) {
        console.log(nameArr[i]);
    }
}
function viewAgeArr(){
    ageArr.forEach((item) =>{
        console.log(item);
    })
}

const peopleContainer = document.querySelector('.person');


function addPerson(name, age, picture = null){
    //personDiv is the container for name and age div
    const personDiv = document.createElement('div');
    personDiv.className = 'person';
    peopleContainer.appendChild(personDiv);

    personDiv.addEventListener('click', () => {
       personDiv.remove(); 
    });

    //create and append nameDiv to personDiv
    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = `Name: ${name}`;
    personDiv.appendChild(nameDiv)

    //create and append ageDiv to personDiv

    const ageDiv = document.createElement('div');
    ageDiv.innerHTML = `age: ${age}`;
    personDiv.appendChild(ageDiv);

    if(picture != null) {
        const pictureIMG = document.createElement('img')
        pictureIMG.src = picture;
        pictureIMG.className = 'picture'
        personDiv.appendChild(pictureIMG);
    }
}

