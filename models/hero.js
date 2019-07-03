const orm = require("./../config/orm.js");

const hero = {
    findAll: function(cb) {
        orm.findAll("heroes", (results) => {
            cb(results);
        });
    },
    insertOne: function(itemToInsert, cb) {
        orm.insertOne("heroes", itemToInsert, (results) => {
            cb(results);
        });
    },
    updateById: function(colsToUpdate, id, cb) {
        orm.updateById("heroes", colsToUpdate, id, (results) => {
            cb(results);
        });
    }
};

// hero.findAll((results) => console.log(results));
// hero.insertOne({name: "Donkey", sidekick: true}, (result) => console.log(result));
// hero.updateById({sidekick: false}, 4, (result) => console.log(result));
module.exports = hero;