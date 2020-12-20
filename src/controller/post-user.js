function PostUser(req, res) {
    res.json({
        status: 'sucesso',
        data: req.body
    })
};

module.exports = PostUser