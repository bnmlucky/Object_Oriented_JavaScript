class Pet {
    constructor(animal, age, breed) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
    }
}

const ernie = new Pet('dog', 1, 'pug');
const yoshka = new Pet('cat', 6, 'brown tabby');
const vera = new Pet('dog', 8, 'border collie');
console.log(ernie);