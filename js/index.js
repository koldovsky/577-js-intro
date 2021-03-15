// alert('Hello');

// let message = 'Hello JavaScript';
// alert(message);
// message = 'Hello World';
// alert(message);

// const userName = prompt('Enter your name');
// alert('Hello ' + userName);

const userAge = Number(prompt('Enter your age'));
alert('Your age is ' + userAge);

const nextAge = add(userAge, 1); // userAge + 1;
alert('Your next age should be: ' + nextAge);

// String - ''
// Number - 123
// Boolean - true, false

if (userAge >= 18) { // < <= > === !== || &&
    alert('You are adult');
} else {
    alert('You are underaged');
}

function add(a, b) {
    const result = a + b;
    return result;
}

function multiply(a, b) {
    return a * b;
}


