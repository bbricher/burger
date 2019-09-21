var orm = require("../config/orm.js");

var burger = {
    all: orm.selectAll(),

    create: orm.insertOne(),

    update: orm.updateOne()
}


module.exports = burger