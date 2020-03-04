class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    get activity() {
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }
    }

    get owner() {
        return this._owner;
    }

    set owner(owner) {
        //backing property
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }

    speak() {
        console.log(this.sound);
    }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const yoshka = new Pet('cat', 6, 'brown tabby', 'meow meow');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

console.log(ernie);

ernie.speak();
yoshka.speak();
vera.speak();

console.log(ernie);

ernie.owner = 'Ashley';
console.log(ernie.owner);