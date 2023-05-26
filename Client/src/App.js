import './App.css';
import { NavBar } from './componentes/NavBar';
import { Cards } from './componentes/Cards';
import { Favorites } from './componentes/Favorites';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Form } from './componentes/Form';
import axios from 'axios';

function App() {
  const {pathname} = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate("/app");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  return (
    <div className="App">
      {pathname !== '/' && <NavBar />}
        <Routes>
          <Route path='/' element={<Form login={login}/>} />
          <Route path='/app' element={<Cards />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
    </div>
  );
};

export default App;