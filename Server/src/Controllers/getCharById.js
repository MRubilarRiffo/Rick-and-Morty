const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        console.log(data)
        let char = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            origin: data.origin,
            image: data.image,
            status: data.status,
            species: data.species
        };
        return char.name
            ? res.status(200).json(char)
            : res.status(200).send('Not found');
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = {
    getCharById,
};