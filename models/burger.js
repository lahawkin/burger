// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function () {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insert: function () {
        orm.insertOne("burger_named_desire", function (res) {
            cb(res);
        });
    },
    update: function () {
        orm.updateOne(burger_id, objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
