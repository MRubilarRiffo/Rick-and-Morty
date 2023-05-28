const { characters } = require('../controllers/getChar');

const favoriteChar = (req, res) => {
    const { id } = req.params;
    const [ char ] = characters.filter((x) => x.id === Number(id));
    char.favorite ? char.favorite = false : char.favorite = true;
    return res.status(200).json(char);
};

module.exports = { favoriteChar };