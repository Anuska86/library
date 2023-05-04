var user = require('../models/user');
var author = require('../models/author');
var book = require('../models/book');
var category = require('../models/category');
var finance = require('../models/finance');

module.exports = {
  configure: function(app) {
    //Login
    app.get('/user',function(req,res) {
      user.get(res);
    });
    app.get('/user/:user_name/:user_pass',function(req,res) {
      user.checkUser(req.params.user_name,req.params.user_pass,res);
    });
    app.post('/user',function(req,res) {
      user.create(req.body,res);
    });
    app.put('/user/:id',function(req,res) {
      user.update(req.body,req.params.id,res);
    });
    app.delete('/user/:id',function(req,res) {
      user.delete(req.params.id,res);
    });
    //Library author
    app.get('/author/:id',function(req,res) {
      author.get(req.params.id,res);
    });
    app.post('/author',function(req,res) {
      author.create(req.body,res);
    });
    app.put('/author/:id',function(req,res) {
      author.update(req.body,req.params.id,res);
    });
    app.delete('/author/:id',function(req,res) {
      author.delete(req.params.id,res);
    });
    //Library book
    app.get('/book',function(req,res) {
      book.get(res);
    });
    app.get('/book/:isbn',function(req,res) {
      book.getOneBook(req.params.isbn,res);
    });
    app.post('/book',function(req,res) {
      book.create(req.body,res);
    });
    app.put('/book/:id',function(req,res) {
      book.update(req.body,req.params.id,res);
    });
    app.delete('/book/:id',function(req,res) {
      book.delete(req.params.id,res);
    });
    //Library sales
    app.get('/sales',function(req,res) {
      sales.get(res);
    });
    app.post('/sales',function(req,res) {
      sales.create(req.body,res);
    });
    app.put('/sales/:id',function(req,res) {
      sales.update(req.body,req.params.id,res);
    });
    app.delete('/sales/:id',function(req,res) {
      sales.delete(req.params.id,res);
    });
    //Library category
    app.get('/category',function(req,res) {
      category.get(res);
    });
    app.get('/category/:id',function(req,res) {
      category.getOneCategory(req.params.id,res);
    });
    //Financials
    app.get('/finance/salesAndStocks',function(req,res) {
      finance.getSalesAndStocks(res);
    });
    app.get('/finance/topBooks',function(req,res) {
      finance.getTopBooks(res);
    });
    app.get('/finance/topCategories',function(req,res) {
      finance.getTopCategories(res);
    });
  }
};
