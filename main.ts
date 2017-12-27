//Type Assertions - 2 Methods

let message;
message = 'abc';

//Method 1
let typeOne = (<string>message).endsWith('c');

//Method 2
let alternativeWay = (message as string).endsWith('c');

console.log(typeOne);
console.log(alternativeWay);