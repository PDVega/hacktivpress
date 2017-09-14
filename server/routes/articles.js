const express = require('express');
const router = express.Router();
const Controller = require('../controllers/articleController')

//articles API
router.post('/', Controller.post)
router.get('/', Controller.getAll)
router.get('/:id', Controller.getOne)
// router.put('/:id', Controller.updateArticle)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.destroy)

module.exports = router;
