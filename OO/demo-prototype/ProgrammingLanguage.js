/**
 * User: mdkr
 * Date: 3/6/13
 *
 * To run this code you need Node.js. Execute "node ProgrammingLanguage.js".
 */

function ProgrammingLanguage(name)
{
    this.name = name;
    this.getName = function(){
        return this.name;
    };
}

function Skill()
{
    this.isImportant = true;
}

Skill.prototype.isCool = function() {
    console.log("Skill isCool function");
    return !this.isImportant;
}

// you can add properties to the prototype, they are shared by all instances
ProgrammingLanguage.prototype.isOO = true;

// functions are shared by the instances but the
// this pointer refers to the actual instance variable
ProgrammingLanguage.prototype.getName = function(){
    return "My name is " + this.name;
};

ProgrammingLanguage.prototype.isCool = function(){
    console.log("ProgrammingLanguage isCool function");
    return (this.name.indexOf("Java") != -1)
};

ProgrammingLanguage.prototype.describe = function(cool){
    var coolness = "so cool"
    if (!cool) coolness = "not " + coolness;
    return coolness;
};


/** The order in which you add this extra functions determines which print is actually called
 * JavaScript does not support overloading within the class/prototype
 *
 * 1) Try uncommenting the function
 * 2) Try adding the function to the constructor
 *
 * See that is doesn't make any difference
 *
ProgrammingLanguage.prototype.print = function(runsInNode){
    if (runsInNode) console.log(this.getName() + " and I am " + this.describe(this.isCool()));
};
 */

ProgrammingLanguage.prototype.print = function(){
    console.log(this.getName() + " and I am " + this.describe(this.isCool()));
};



var js = new ProgrammingLanguage("JavaScript");
js.print()

var java = new ProgrammingLanguage("Java");
java.print()

var cplusplus = new ProgrammingLanguage("C++");
cplusplus.print()

console.log(cplusplus.isOO)

// we refer to a new property that is not part of the prototype
java.isOO = false
console.log(java.isOO)
// isOO for js is still part of the prototype and remains unchanged
console.log(js.isOO)
// we refer to the prototype property
ProgrammingLanguage.prototype.isOO = false
// isOO for js is still part of the prototype and is changed for all instances
console.log(js.isOO)

// isImportant is direct property and not offered by the prototype
console.log(js.isImportant)

// let's change the prototype. Also see what happens when this
// inheritance relation is defined before adding functions to the prototype of the subclass!
ProgrammingLanguage.prototype = new Skill();
// still undefined because the original prototype definition is used
console.log(js.isImportant)
// new prototype only applies to new created objects
var ruby = new ProgrammingLanguage("Ruby");
// Ruby is very important
console.log(ruby.isImportant)
// we switched the prototype, every previous prototype defined properties and methods are gone!
ruby.print()
// isCool function of supertype is called (why?). Is looks like overriding is not supported, but
// that's not the case. Move the line: ProgrammingLanguage.prototype = new Skill(); before adding
// functions to ProgrammingLanguage.prototype!
ruby.isCool()

