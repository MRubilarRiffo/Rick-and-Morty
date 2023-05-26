import { GET_CHARACTERS, ELIMINAR_CHAR, ADD_FAVORITE, CLEAR } from "./actions-type";

const initialState = {
    characters: [],
    favorite: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: [...state.characters, action.payload]
            };
        case ELIMINAR_CHAR:
            return {
                ...state,
                characters: state.characters.filter((char)=> char.id !== Number(action.payload))
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, state.characters.filter((char)=> char.id === Number(action.payload))[0]]
            };
        case CLEAR:
            return {
                ...state,
                characters: [],
                favorite: []
            };
        default:
            return {...state};
    };
};

export { reducer };