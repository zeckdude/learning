var names = ['Bob', 'Jim', 'Mike'];

// Standard anonymous function
names.forEach(function(name){
  console.log('forEach', name);
});

// Arrow function that supports multi-line content
names.forEach((name) => {
  console.log('arrowFunc', name);
});

// Arrow function that supports one-line content
names.forEach((name) => console.log('shortArrowFunc', name));

// The content after the arrow is returned out of the function
var returnName = (name) => name + '!';
console.log(returnName('Nelson'));

// Arrow functions use the context of its parent instead of the function itself
var person = {
  name: 'Andrew',
  greet: function() {
    // Example of `this` referring to the function when using a traditional anonymous function
    names.forEach(function(name) {
      console.log(this.name + ' says hi to ' + name);
    });
  },
  welcome: function() {
    // Example of `this` referring to the parent object when using an arrow function
    names.forEach((name) => {
      console.log(this.name + ' welcomes ' + name);
    });
  }
};

person.greet('George');
person.welcome('Zack');


function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a,b) => a + b;

console.log(add('add:', 1,3));
console.log(addStatement('add statement:', 1,3));
console.log(addExpression('add expression:', 1,3));
console.log(add('add:', 9,0));
console.log(addStatement('add statement:', 9,0));
console.log(addExpression('add expression:', 9,0));
