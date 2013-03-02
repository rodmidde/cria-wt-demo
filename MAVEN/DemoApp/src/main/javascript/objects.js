/**
 * User: mdkr
 * Date: 3/2/13
 */

var rody = {
    name: "Rody",
    age: 37,
    children: new Array(),

    getName : function()
    {
        return this.name;
    },

    hasChildren : function()
    {
        return this.children.length > 0;
    }
}