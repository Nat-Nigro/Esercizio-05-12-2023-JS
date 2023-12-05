class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    static compareAge(user1, user2) {
        return user1.age > user2.age ? "L'utente 1 è più anziano di " + user2.firstName : "L'utente 2 è più anziano di " + user1.firstName;
    }
}

const utente1 = new User("Trevor", "Ciccia", 30, "Italia");
const utente2 = new User("Micheal", "Scott", 40, "United States");
console.log(utente1);
console.log(utente2);
console.log(User.compareAge(utente1, utente2));


// Pet 

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    static sameOwner(person1, person2) {
        if (person1.ownerName === person2.ownerName) {
            return true
        } else {
            return false
        }
    }
}

const amico1 = new Pet("Google", "Bill Gates", "Dog", "French Bulldog");
const amico2 = new Pet("Yahoo", "Bill Gates", "Bird", "Eagle");
console.log(amico1);
console.log(amico2);
console.log(Pet.sameOwner(amico1, amico2));

// List

const createList = function (namePet, nameOwner, s, b) {
    let lista = document.getElementById("lista");
    let listGroup = document.createElement("li");
    listGroup.classList.add("list-group-item");
    listGroup.classList.add("mt-2");

    let listGroupContent = `
    <li class="list-group-item">${namePet}</li>
    <li class="list-group-item">${nameOwner}</li>
    <li class="list-group-item">${s}</li>
    <li class="list-group-item">${b}</li>
    `;

    listGroup.innerHTML = listGroupContent;
    lista.appendChild(listGroup);

};
createList()



