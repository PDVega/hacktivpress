const Article = require('../models/Article');

let post = (req, res) => {
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  }, (err, newArticle) => {
    if (err) throw err
    res.send(newArticle)
  })
}

let getAll = (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) throw err
    res.send(articles)
  })
}

let getOne = (req, res) => {
  Article.findOne({
    _id: req.params.id
  })
  .populate('author')
  .exec((err, article) => {
    if (err) throw err
      res.send(article)
  })
}

module.exports = {
  post,
  getAll,
  getOne  
};
