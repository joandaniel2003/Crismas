const ctrl = {};

ctrl.print_posts = (req, res) => {
    res.send('imprimir posts')
};

ctrl.new_post_write = (req, res) => {
    res.render('form_posts')
}

ctrl.new_post = (req, res) => {
    res.render('form_posts')
}

module.exports = ctrl;