/**
 * User: mdkr
 * Date: 3/2/13
 */

/**
 * Simple object with properties, arrays and methods
 *
 * @type {Object}
 */
var rody = {
    name: "Rody",
    age: 37,
    children: [],

    /**
     * Returns the name of the current object
     * @return {String}
     */
    getName : function()
    {
        return this.name;
    },

    /**
     * Indicates whether the current object has any children
     * @return {Boolean}
     */
    hasChildren : function()
    {
        return this.children.length > 0;
    }
};