import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({onSearch}) => {
    return (
        <div className='nav'>
            <SearchBar onSearch={onSearch}/>
            <Link to='/app'><button>Home</button></Link>
            <Link to='/favorites'><button>Favoritos</button></Link>
        </div>
    );
};

export { NavBar };