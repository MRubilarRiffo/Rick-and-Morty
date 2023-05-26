import './SearchBar.css'
import React from "react";
import { useDispatch } from "react-redux";
import { getCharacters, clear } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    
    const [id, setId] = React.useState('');

    const handleChange = (event) => {
        setId(event.target.value)
    };

    return (
        <div className="bar">
            <input 
                type="search"
                onChange={handleChange}
                value={id}
            />
            <button onClick={() => dispatch(getCharacters(id))}>Agregar</button>
            <button onClick={() => dispatch(getCharacters(Math.floor(Math.random() * (826)) + 1))}>Random</button>
            <button onClick={() => dispatch(clear())}>Limpiar</button>
        </div>
    );
};

export { SearchBar };