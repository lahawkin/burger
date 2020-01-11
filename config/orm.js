var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// based on 13-MVC\01-Activities\12-OrmExample\config\orm.js
var orm = {

    selectAll: function () {
        var queryString = "SELECT * FROM burgers_db"; 
        connection.query (queryString, 
        function (err, result) {
            if (err) throw err;
            console.log(result);
          });
    },

    insertOne: function(burgername) {
        var queryString = "INSERT INTO burgers_db VALUES ??";
        console.log(queryString);
        connection.query(queryString, [burgername], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },

    updateOne: function(burger_id) {
        //delete and then re-add?
    }
};

module.exports = orm;
