const userRouter = require('express').Router();
const { getCharById, getAllChar } = require('../controllers/getChar');
const { favoriteChar } = require('../controllers/favoriteChar');
const { login } = require('../controllers/login');
const { deleteChar, deleteAll } = require('../controllers/deleteChar');

userRouter.get('/character/:id', getCharById);

userRouter.get('/character', getAllChar);

userRouter.put('/favorite/:id', favoriteChar);

userRouter.delete('/delete', deleteAll);

userRouter.delete('/delete/:id', deleteChar);

userRouter.get('/login', login);

module.exports = userRouter;