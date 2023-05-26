import axios from 'axios';
import { GET_CHARACTERS, ELIMINAR_CHAR, ADD_FAVORITE, CLEAR } from './actions-type';

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
        dispatch({type: ELIMINAR_CHAR, payload: id});
    };
};

export const addFavorite = (id) => {
    return async function(dispatch) {
        dispatch({type: ADD_FAVORITE, payload: id});
    };
};

export const clear = () => {
    return async function(dispatch) {
        dispatch({type: CLEAR});
    };
};