/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding

When a function is called in the global scope its context will be the window/console.

* 2. Implicit binding

With implicit binding you look to the left of the function call to see what its context is.

* 3. New binding

When a function is called with the "new" keyword its context is the new object being created by the constructor function.

* 4. Explicit binding

With explicit binding you tell the function what its context is going to be, with either call(), apply() or bind().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function test() {
    console.log(this);
}

test();

// Principle 2

// code example for Implicit Binding

const me = {
    name: 'Sofia',
    age: 32,
    hobbies: 'knitting',
    sayHello: function() {
        console.log(`Hello, I'm ${this.name}, I'm ${this.age} and I like ${this.hobbies}.`);
    }
  }

  me.sayHello();

// Principle 3

// code example for New Binding

function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.sayHello = function() {
        console.log(`Hello, I'm ${this.name}, I'm ${this.age} and I like ${this.hobbies}.`);
    }
}

const sofia = new Person('Sofia', 32, 'knitting');

sofia.sayHello();

// Principle 4

// code example for Explicit Binding

const sayHello = function() {
    console.log(`Hello, I'm ${this.name}, I'm ${this.age} and I like ${this.hobbies}.`);
}

const me = {
    name: 'Sofia',
    age: 32,
    hobbies: 'knitting',
  }

  sayHello.call(me);