const { characters } = require('./getChar');

const deleteChar = (req, res) => {
    const { id } = req.params;
    characters.splice(characters.findIndex((x) => x.id === Number(id)), 1);
    return res.status(200).send({ message: `${id} eliminado correctamente` });
};

const deleteAll = (req, res) => {
    characters.splice(0, characters.length);
    return res.status(200).send({ message: `Eliminado correctamente` });
};

module.exports = { deleteChar, deleteAll };