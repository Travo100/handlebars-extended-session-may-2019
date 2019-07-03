const connection = require("./connection.js");

const orm = {
    findAll: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if(err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, itemToInsert, cb) {
        connection.query("INSERT INTO ?? SET ?", [table, itemToInsert], (err, data) => {
            if(err) throw err;
            cb(data);
        });
    },
    updateById: function(table, colsToUpdate, id, cb) {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [table, colsToUpdate, id], (err, data) => {
            if(err) throw err;
            cb(data);
        });
    }
};

// orm.findAll("heroes", (results) => {
//     console.log(results);
// });

// orm.insertOne("heroes", {name: "Superman"}, (results) => {
//     console.log(results);
// });

// orm.updateById("heroes", {name: "The Tick"}, 3, (results) => {
//     console.log(results);
// });


module.exports = orm;