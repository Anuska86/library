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
  /*this.create = function(book,res) {
    connection.acquire(function(err,con) {
      con.query('insert into book set ?', book, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'book creation fail'});
        } else {
          res.send({status:0, message:'book create success'});
          console.log("Post successful");
        }
      });
    });
  };
  this.update = function(book,id,res) {
    connection.acquire(function(err,con) {
      let query = `update book set nombre_book='${book.nombre_book}',pass='${book.pass}',email='${book.email}',salario=${book.salario} where id=${id}`
      con.query(query, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'book update fail'});
        } else {
          res.send({status:0, message:'book update success'});
          console.log("Put successful");
        }
      });
    });
  };
  this.delete = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('delete from book where id = ?', id, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'book delete fail'});
        } else {
          res.send({status:0, message:'book delete success'});
          console.log("Delete successful");
        }
      });
    });
  };*/
};

module.exports = new Category();
