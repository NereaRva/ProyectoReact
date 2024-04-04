
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Detalle from './components/detallepelicula/Detalle';
import Login from './components/login/Login';
import SingUp from './components/singup/SingUp';
import Intro from './components/intro/Intro';
import { DisneyProvider } from './components/context/disneyContext'; 

function App() {
  return (
    <Router>
      <DisneyProvider>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/singup' element={<SingUp/>}/>
        </Routes>
      </DisneyProvider>
    </Router>
  );
}

export default App;
