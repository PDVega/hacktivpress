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

let update = (req, res) => {
  Article.findOneAndUpdate ({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (err, updatedArticle) => {
    if (err) throw err
      res.send (updatedArticle);
  })
}

let destroy = (req, res) => {
  Article.remove ({
    _id: req.params.id
  }, (err, deleted) => {
    if (err) throw err
      res.send(deleted);
  })
}

module.exports = {
  post,
  getAll,
  getOne,
  update,
  destroy
};
