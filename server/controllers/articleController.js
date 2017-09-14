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

module.exports = {
  post
};
