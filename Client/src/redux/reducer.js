import { GET_CHARACTERS, ELIMINAR_CHAR, FAVORITE, CLEAR } from "./actions-type";

const initialState = {
    characters: []
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
                characters: state.characters.filter((char) => char.id !== Number(action.payload)),
            };
        case FAVORITE:
            state.characters.splice(state.characters.findIndex((x) => x.id === action.payload.id), 1, action.payload)
            return {
                ...state,
                characters: state.characters
            };
        case CLEAR:
            return {
                ...state,
                characters: [],
            };
        default:
            return {...state};
    };
};

export { reducer };