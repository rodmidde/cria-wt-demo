(function () {
    "use strict";

    var criaDemo = {

        // CREATE
        createDoc: function (email, name) {
            $.ajax({
                    url: "/relation/",
                    type: "post",
                    data: {
                        email: email,
                        name: name,
                        password: "topSecret!"
                    },
                    success: function (retObj) {
                        console.log(retObj);
                    }
                }
            );
        },

        // RETRIEVE
        getDocs: function () {
            $.ajax({
                    url: "/relations/",
                    type: "get",
                    success: function (retObj) {
                        console.log(retObj);
                    }
                }
            );
        },

        // UPDATE
        updateDoc: function (email, name) {
            $.ajax({
                    url: "/relation/" + email,
                    type: "put",
                    data: {
                        name: name
                    },
                    success: function (retObj) {
                        console.log(retObj);
                    }
                }
            );
        },

        // DELETE
        deleteDoc: function (email) {
            $.ajax({
                    url: "/relation/" + email,
                    type: "delete",
                    success: function (retObj) {
                        console.log(retObj);
                    }
                }
            );
        }

    }

    // Export criaDemo for global access.
    window.criaDemo = criaDemo;
}());

$(document).ready(function () {
    "use strict";
    var email, name;

    // init
    name = "John Doe " + new Date().getTime();
    email = new Date().getTime() + "@@tezzt.nl";

    // CREATE
    criaDemo.createDoc(name, email);

    // RETRIEVE
    criaDemo.getDocs();

    // UPDATE
    criaDemo.updateDoc(email, name + " (updated)");

    // DELETE
    criaDemo.deleteDoc(email);

});