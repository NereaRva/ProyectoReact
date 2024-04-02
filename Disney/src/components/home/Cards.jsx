import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import black from '../../assets/black.svg';
import { DisneyContext } from '../context/disneyContext'; // Importa el contexto
import './Home.css';

function Cards({ characters }) {
  const { favoriteCharacters, setFavoriteCharacters } = useContext(DisneyContext); // Usa el contexto

  const handleFavoriteClick = (id) => {
    setFavoriteCharacters([...favoriteCharacters, id]);
  };

  return (
    <div>
      <div className="cards-container d-flex flex-wrap w-100 justify-content-center mt-5">
        {characters.map((character, index) => (
          <div className="card" style={{ width: '18rem', margin: '10px', cursor: 'pointer' }} key={index}>
            <img className="card-img-top w-100" style={{ height: '200px' }} src={character.imageUrl} alt={character.name} />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <div className="d-flex gap-3">
                <Link to={`/detalle/${character._id}`} className="card-link btn btn-dark">Ver más</Link>
                <button onClick={() => handleFavoriteClick(character._id)}>
                  <img className="heart-black" src={black} alt="Add to favorites" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Cards.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default Cards;
