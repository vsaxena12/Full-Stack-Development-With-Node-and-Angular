const express = require('express');
const { nextTick } = require('process');

const app = express();

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    res.status(201).json({
        message: 'Post added successfully'
    })
})
app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: "asdfgg",
            title: "First Server",
            content: "This is coming from server"
        },
        {
            id: "asdfggsdf",
            title: "Second Server",
            content: "This is coming from server Second"
        }
    ]
    return res.status(200).json({
        message: 'Posts fetch successfully',
        posts: posts
    })
});

module.exports = app;