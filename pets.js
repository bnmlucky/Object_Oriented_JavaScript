const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function () {
        console.log('Woof!');
    }
}

console.log(ernie['age']);
console.log(ernie['breed']);
ernie['bark']();

var prop = 'breed';
ernie[prop];

ernie.age = 2;
ernie['age'] = 2;
ernie.color = 'black';
console.log(ernie);

const vera = {
    animal: 'dog',
    age: 8,
    breed: 'Border Collie',
    bark: function () {
        console.log('Woof!');
    }
}

const scofield = {
    animal: 'dog',
    age: 6,
    breed: 'Doberman',
    bark: function () {
        console.log('Woof!');
    }
}

const edel = {
    animal: 'dog',
    age: 7,
    breed: 'German Shorhaired Pointer',
    bark: function () {
        console.log('Woof!');
    }
}