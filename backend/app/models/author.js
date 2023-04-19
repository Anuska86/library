var request = require("request");
var connection = require ('../config/connection');

function Author() {
  this.get = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('select * from author where id = ?', [id], function(err,result) {
        con.release();
        res.send(result);
        console.log("Get successful");
      });
    });
  };
  this.checkUser = function(user_name,user_pass,res) {
    connection.acquire(function(err,con) {
      con.query('select * from author where name = ?', [user_name], function(err,result) {
        con.release();
        res.send(result);
        console.log("Check author successful");
      });
    });
  };
  this.create = function(author,res) {
    connection.acquire(function(err,con) {
      con.query('insert into author set ?', author, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'author creation fail'});
        } else {
          res.send({status:0, message:'author create success'});
          console.log("Post successful");
        }
      });
    });
  };
  this.update = function(author,id,res) {
    connection.acquire(function(err,con) {
      let query = `update author set nombre_author='${author.nombre_author}',pass='${author.pass}',email='${author.email}',salario=${author.salario} where id=${id}`
      con.query(query, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'author update fail'});
        } else {
          res.send({status:0, message:'author update success'});
          console.log("Put successful");
        }
      });
    });
  };
  this.delete = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('delete from author where id = ?', id, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'author delete fail'});
        } else {
          res.send({status:0, message:'author delete success'});
          console.log("Delete successful");
        }
      });
    });
  };
};

module.exports = new Author();
