const express = require('express');
// require('express-async-errors');
const tweetController = require('../controller/tweet.js');

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweets
router.post('/', tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

module.exports = router;