function User (req, res) {
    res.json({
        nome: 'Paulo',
        idade: 26
    });
};

module.exports = User