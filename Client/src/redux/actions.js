import axios from 'axios';
import { GET_CHARACTERS, ELIMINAR_CHAR, FAVORITE, CLEAR } from './actions-type';

export const getCharacters = (id) =>{
    return async function(dispatch){
        try {
            let response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
            return dispatch({type: GET_CHARACTERS, payload: response.data});
        } catch (error) {
            console.error(error);
        };
    };
};

export const eliminarCharUI = (id) => {
    return async function(dispatch) {
        try {
            await axios.delete(`http://localhost:3001/rickandmorty/delete/${id}`);
            return dispatch({type: ELIMINAR_CHAR, payload: id});
        } catch (error) {
            console.error(error);
        };
    };
};

export const favorite = (id) => {
    return async function(dispatch) {
        try {
            let response = await axios.put(`http://localhost:3001/rickandmorty/favorite/${id}`);
            return dispatch({type: FAVORITE, payload: response.data});
        } catch (error) {
            console.error(error);
        };
    };
};

export const clear = () => {
    return async function(dispatch) {
        try {
            await axios.delete(`http://localhost:3001/rickandmorty/delete`);
            dispatch({type: CLEAR});
        } catch (error) {
            console.error(error);
        };
    };
};