const ctrl = {};

const fs = require('fs')

ctrl.index = (req, res) => {
    res.render('index')
};

module.exports = ctrl;