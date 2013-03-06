/**
 * User: mdkr
 * Date: 3/6/13
 *
 * Code example extracted from Professional Javascript for WebDevelopers, N. Zakas, 3rd ed. (2012), page 177
 *
 */
var book = {
    _year:2004,
    edition:1
};
Object.defineProperty(book, "year", {
    get:function () {
        return this._year;
    }
});

book.year = 2005;
console.log(book.edition);	//2

/**
 * You cannot redefine a property, so once you forgot to add a set-function, you're screwed ;)
 */
Object.defineProperty(book, "year", {
    get:function () {
        return this._year;
    },
    set:function (newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
console.log(book.edition);	// error when redefining property
