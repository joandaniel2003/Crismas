const router = require('express').Router();

const home = require('../controllers/home')
const posts = require('../controllers/posts')

module.exports = app => {
    router.get('/', home.index)
    router.get('/posts/:post_id', posts.print_posts)
    router.get('/new_post', posts.new_post_write)
    router.post('/new_post', posts.new_post)

    app.use(router);
};