/**
 * User: mdkr
 * Date: 3/6/13
 */
var criaStudents = ["Chris","Ria","Iris", "Abel"];
criaStudents.push("Willem");
criaStudents.push("Tim");
console.log(criaStudents)

/**
 * JavaScript is fun but dangerous, you can redefine existing functions or built-in (reference) types!
 */
Array.prototype.push = function()
{
    console.log("Not implemented anymore");
};

var ddoaStudents = ["Dave", "Dirk", "Ozzy", "Anne"];
criaStudents.push("Teun");