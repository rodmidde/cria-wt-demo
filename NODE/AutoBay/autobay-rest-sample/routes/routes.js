module.exports = function (app) {

    /*  Relation routes
        ---------------
        We create a variable "relations" that holds the controller object.
        We map the URL to a method in the created variable "relations".
        In this example is a mapping for every CRUD action.
     */
    var relations = require('../app/controllers/relations.js');
    // CREATE
    app.post('/relation/', relations.create);
    // RETRIEVE
    app.get('/relations', relations.list);
    app.get('/relation/:email', relations.detail);
    // UPDATE
    app.put('/relation/:email', relations.update);
    // DELETE
    app.delete('/relation/:email', relations.delete);

}


