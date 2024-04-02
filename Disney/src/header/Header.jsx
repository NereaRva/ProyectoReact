import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/disney.png';
import './Header.css';
import heart from '../assets/heart.svg';
import cross from '../assets/cross.svg';
import { DisneyContext } from '../components/context/disneyContext'; 

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [favoriteCharactersDetails, setFavoriteCharactersDetails] = useState([]);
  const { favoriteCharacters, setFavoriteCharacters } = useContext(DisneyContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchCharacterById = async (id) => {
    try {
      const response = await fetch(`https://api.disneyapi.dev/character/${id}`); 
      if (!response.ok) {
        throw new Error('Error al obtener los detalles del personaje');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchFavoriteCharactersDetails = async () => {
      const charactersDetails = await Promise.all(
        favoriteCharacters.map((characterId) => fetchCharacterById(characterId))
      );
      setFavoriteCharactersDetails(charactersDetails);
    };
    fetchFavoriteCharactersDetails();
  }, [favoriteCharacters]);

  // Función para eliminar un personaje de la lista de favoritos
  const handleRemoveFavorite = (characterId) => {
    console.log('hola', characterId)
    const updatedFavorites = favoriteCharacters.filter((id) => id !== characterId);
    setFavoriteCharacters(updatedFavorites);
  };

  return (
    <>
      <div className="shadow header w-100">
        <div className="container p-3 d-flex w-100">
          <div className="col-12 d-flex justify-content-between">
            <img className="logo" src={logo} alt="Disney Logo" />
            <div className="d-flex gap-3 position-relative">
              <a
                href="#"
                id="favoritos"
                onClick={toggleDropdown}
                className="d-flex align-items-center"
              >
                <img src={heart} alt="Heart Icon" />
              </a>

              <Link
                to={`/login`}
                className="card-link btn btn-dark d-flex align-items-center"
              >
                Iniciar sesión
              </Link>
              <Link
                to={`/singup`}
                className="card-link btn btn-dark d-flex align-items-center"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
        <div className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`}>
          <p>Personajes Favoritos:</p>
          <div className="cards-container d-flex flex-wrap justify-content-center">
            {favoriteCharactersDetails.map((character, index) => (
              <div className="card" style={{ width: '100%', margin: '10px', cursor: 'pointer' }} key={index}>
                <img className="card-img-top w-100" style={{ height: '200px' }} src={character.data.imageUrl} alt={character.name} />
                <div className="card-body">
                  <h5 className="card-title">{character.data.name}</h5>
                  <div className="d-flex gap-3">
                    {/* <Link to={`/detalle/${character._id}`} className="card-link btn btn-dark">Ver más</Link> */}
                    <img className="remove" src={cross} alt="Remove Icon" onClick={() => handleRemoveFavorite(character.data._id)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
