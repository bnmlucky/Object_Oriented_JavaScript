class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
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