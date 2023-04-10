import './style.css'

const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');

let nameArr = []
let ageArr = []

console.log(form);


submitButton.addEventListener('click', clickHandler);

function clickHandler(e){
    e.preventDefault();
    let formData = new FormData(form);

    nameArr.push(formData.get("name_input"));
    ageArr.push(formData.get("age"));

    nameArr

}
