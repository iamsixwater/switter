const tweetRepository = require('../data/tweet.js');

async function getTweets(req, res) {
    const username = req.query.username;
    const data = await(username ? tweetRepository.getAllByUsername(username): tweetRepository.getAll());
    res.status(200).json(data);
}

async function getTweet(req, res) {
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id);
    if(tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json(`Tweet id(${id}) is not found.`);
    }
}

async function createTweet(req, res) {
    const { text, username, name } = req.body;
    const tweet = await tweetRepository.create(text, username, name);
    res.status(201).json(tweet);
}

async function updateTweet(req, res) {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = await tweetRepository.update(id, text);
    if(tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json(`Tweet id(${id}) is not found.`);
    }
}

async function deleteTweet(req, res) {
    const id = req.params.id;
    await tweetRepository.remove(id);
    res.sendStatus(204);
}

module.exports = {
    getTweets,
    getTweet,
    createTweet,
    updateTweet,
    deleteTweet,
}