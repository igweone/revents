// const sayHello = () => {
//   console.log("hello");
// };

// sayHello();

// const fruits = ["apples", "oranges", "grapes"];

// fruits.forEach(fruit => {
//   console.log(fruit);
// });

// console.log(
//   fruits.map(fruit => {
//     return fruit.slice(0, -1);
//   })
// );

// const people = [
//   {
//     id: 1,
//     name: "Karen"
//   },
//   {
//     id: 2,
//     name: "Bob"
//   },
//   {
//     id: 3,
//     name: "Sharon"
//   }
// ];

// const people2 = people.filter(person => {
//   return person.id === 2;
// });

// console.log(people2);

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4];

// console.log(arr2);

// const person = {
//   name: "Brad",
//   age: 36
// };

// const newPerson = {
//   ...person,
//   email: "brad@gmail.com"
// };
// console.log(newPerson);

// const profile = {
//   name: "John Doe",
//   address: {
//     street: "Main street",
//     city: "Boston"
//   },
//   hobbies: ["dancing", "movies"]
// };

class Person {
  constructor(name) {
    this.name = name;
    console.log("ran");
  }

  greet() {
    return "Hello my name is " + this.name;
  }
}

class Customer extends Person{
    
}

const person1 = new Person("emeka");
console.log(person1.greet());


