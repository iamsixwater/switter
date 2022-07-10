let tweets = [
    {
        id: '1',
        text: 'first tweet',
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://img.icons8.com/happy'
    },
    {
        id: '2',
        text: 'second tweet',
        createdAt: Date.now().toString(),
        name: 'Paul',
        username: 'paul',
        url: 'https://img.icons8.com/wink'
    }
];

async function getAll() {
    return tweets;
}

async function getAllByUsername(username) {
    return tweets.filter(t => t.username === username);
}

async function getById(id) {
    return tweets.find(t => t.id === id);;
}

async function create(text, username, name) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

async function update(id, text) {
    const tweet = tweets.find(t => t.id === id);
    if(tweet) {
        tweet.text = text;
    }
    return tweet;
}

async function remove(id) {
    tweets = tweets.filter(t => t.id !== id);
}

module.exports = {
    getAll,
    getAllByUsername,
    getById,
    create,
    update,
    remove,
}