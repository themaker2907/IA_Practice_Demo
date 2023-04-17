export default class Person{
    constructor(name, age, picture = null) {
        this.name = name;
        this.age = age;
        this.picture = picture;
    }


    addPerson(name, age, picture = null){
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

    getName(){
        return this.name;
    }
}