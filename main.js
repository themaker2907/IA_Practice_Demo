import './style.css'

const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');

let nameArr = []
let ageArr = []

getRandomUser();

async function getRandomUser() {
    const data = await fetch('https://randomuser.me/api/');
    .then(response) => {
        let fetchedData = response.json();
        console.log(fetchedData);
    });
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


function addPerson(name, age){
    //personDiv is the container for name and age div
    const personDiv = document.createElement('div');
    personDiv.className = 'person';
    peopleContainer.appendChild(personDiv);

    //create and append nameDiv to personDiv
    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = `Name: ${name}`;
    personDiv.appendChild(nameDiv)

    //create and append ageDiv to personDiv

    const ageDiv = document.createElement('div');
    ageDiv.innerHTML = `age: ${age}`;
    personDiv.appendChild(ageDiv);
}
// addPerson("jason", 16);
// addPerson("ethan", 16);
// addPerson("sam", 16);
// addPerson("kevin the monke", 16);
