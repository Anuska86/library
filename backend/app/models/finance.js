var request = require("request");
var connection = require("../config/connection");

function Finance() {
  this.getSalesAndStocks = function (res) {
    connection.acquire(function (err, con) {
      con.query(
        `SELECT *,(stock*price) AS 'stock_value',(sales*price) AS 'sales_value'
      FROM book
      INNER JOIN author
      ON book.author_id = author.id
      INNER JOIN category
      ON book.category_id = category.id`,
        function (err, result) {
          con.release();
          res.send(result);
          console.log("Get successful");
        }
      );
    });
  };
  this.getTopBooks = function (res) {
    connection.acquire(function (err, con) {
      con.query(
        `SELECT *
        FROM book
        ORDER BY sales DESC;`,
        function (err, result) {
          con.release();
          res.send(result);
          console.log("Get successful");
        }
      );
    });
  };
  this.getTopCategories = function (res) {
    connection.acquire(function (err, con) {
      con.query(
        `SELECT category.name, SUM(book.sales) AS sales
        FROM book
        INNER JOIN category
        ON book.category_id = category.id
        GROUP BY category.name;`,
        function (err, result) {
          con.release();
          res.send(result);
          console.log("Get successful");
        }
      );
    });
  };
}

module.exports = new Finance();
