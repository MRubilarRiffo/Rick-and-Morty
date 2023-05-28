import './SearchBar.css'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, clear } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    
    const [id, setId] = React.useState('');

    const handleChange = (event) => {
        setId(event.target.value)
    };

    const char = useSelector((state) => state.characters);
    const get = (id) => {
        if(Number(id) > 0 && Number(id) < 827 && !char.some((x) => x.id === Number(id))) {
            dispatch(getCharacters(id));
        };
    };  

    return (
        <div className="bar">
            <input 
                type="search"
                onChange={handleChange}
                value={id}
            />
            <button onClick={() => get(id)}>Agregar</button>
            <button onClick={() => get(Math.floor(Math.random() * (826)) + 1)}>Random</button>
            <button onClick={() => dispatch(clear())}>Limpiar</button>
        </div>
    );
};

export { SearchBar };