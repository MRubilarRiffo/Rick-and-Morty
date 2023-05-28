const axios = require('axios');

let characters = [];

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        data.favorite = false;
        characters.push(data);
        
        return data.id
            ? res.status(200).json(data)
            : res.status(200).send('Not found');
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

const getAllChar = (req, res) => {
    return res.status(200).json(characters)
};

module.exports = { getCharById, getAllChar, characters };