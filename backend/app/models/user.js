var request = require("request");
var connection = require ('../config/connection');

function User() {
  this.get = function(res) {
    connection.acquire(function(err,con) {
      con.query('select * from user', function(err,result) {
        con.release();
        res.send(result);
        console.log("Get successful");
      });
    });
  };
  this.checkUser = function(user_name,user_pass,res) {
    connection.acquire(function(err,con) {
      con.query('select * from user where user_name = ? and pass = ?', [user_name,user_pass], function(err,result) {
        con.release();
        res.send(result);
        console.log(result);
        console.log("Check user successful");
      });
    });
  };
  this.create = function(user,res) {
    connection.acquire(function(err,con) {
      con.query('insert into user set ?', user, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'USER creation fail'});
        } else {
          res.send({status:0, message:'USER create success'});
          console.log("Post successful");
        }
      });
    });
  };
  this.update = function(user,id,res) {
    connection.acquire(function(err,con) {
      let query = `update user set user_name='${user.user_name}',pass='${user.pass}',email='${user.email}',salary=${user.salary} where id=${id}`
      con.query(query, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'USER update fail'});
        } else {
          res.send({status:0, message:'USER update success'});
          console.log("Put successful");
        }
      });
    });
  };
  this.delete = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('delete from user where id = ?', id, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'USER delete fail'});
        } else {
          res.send({status:0, message:'USER delete success'});
          console.log("Delete successful");
        }
      });
    });
  };
};

module.exports = new User();
