var request = require("request");
var connection = require ('../config/connection');

function Category() {
  this.get = function(res) {
    connection.acquire(function(err,con) {
      con.query('select * from category', function(err,result) {
        con.release();
        console.log(result);
        res.send(result);
        console.log("Get successful");
      });
    });
  };
this.getOneCategory = function(id,res) {
    connection.acquire(function(err,con) {
      console.log(id);
      con.query('select * from category where id = ?',[id], function(err,result) {
        con.release();
        res.send(result);
        console.log(result);
      });
    });
  };
};

module.exports = new Category();
