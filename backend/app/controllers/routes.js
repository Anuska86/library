var usuario = require('../models/usuario');
var author = require('../models/author');
var book = require('../models/book');
var category = require('../models/category');

module.exports = {
  configure: function(app) {
    //Login
    app.get('/usuario',function(req,res) {
      usuario.get(res);
    });
    app.get('/usuario/:user_name/:user_pass',function(req,res) {
      usuario.checkUser(req.params.user_name,req.params.user_pass,res);
    });
    app.post('/usuario',function(req,res) {
      usuario.create(req.body,res);
    });
    app.put('/usuario/:id',function(req,res) {
      usuario.update(req.body,req.params.id,res);
    });
    app.delete('/usuario/:id',function(req,res) {
      usuario.delete(req.params.id,res);
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
    
    /*
    app.post('/book',function(req,res) {
      book.create(req.body,res);
    });
    app.put('/book/:id',function(req,res) {
      book.update(req.body,req.params.id,res);
    });
    app.delete('/book/:id',function(req,res) {
      book.delete(req.params.id,res);
    });*/
  }
};
