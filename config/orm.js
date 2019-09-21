var connection = require("./connection.js");

var orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM burgers"
        connection.query(queryString, function(err, results) {
            if (err) {
                return results.status(500).end();
            }
            results.render("index", { burger_name: data });
        });

    },
    insertOne: function(){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(queryString, [req.body.burger_name], function(err, results) {
            if (err) {
                return res.status(500).end();
            }
          
            res.json({ id: result.id });
        });

    },
    updateOne: function(){
        var queryString = "UPDATE plans SET plan = ? WHERE id = ?"
        connection.query(queryString, [req.body.burger_name, req.params.id], function(err, results) {
            if (err) {
                // If an error occurred, send a generic server failure
                return res.status(500).end();
            }
            else if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
               return res.status(404).end();
            }
            res.status(200).end();
        });

    }
};


module.exports = orm;