/**
 * User: mdkr
 * Date: 3/6/13
 */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

//use as a constructor 
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();	//"Nicholas"
//call as a function 
Person("Greg", 27, "Doctor"); //adds to window 
// window.sayName();	//"Greg"
//call in the scope of another object 
var o = new Object();
/**
 * The call() method exhibits the same behavior as apply(), but arguments are passed to it differently.
 * The first argument is the this value, but the remaining arguments are passed directly into the function.
 */
Person.call(o, "Kristen", 25, "Nurse");
// calls the Person function on object o, resulting in
// - passing o as the this pointer
// - having o as this, the parameter-values become properties of o and o gets a method called sayName
o.sayName();	//"Kristen"