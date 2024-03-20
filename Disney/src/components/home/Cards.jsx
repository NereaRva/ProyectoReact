// Cards.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Cards({ characters }) {
  return (
    <div>
      <div className="cards-container d-flex flex-wrap w-100 justify-content-center mt-5">
        {characters.map((character, index) => (
          <div className="card" style={{ width: '18rem', margin: '10px', cursor: 'pointer' }} key={index}>
            <img className="card-img-top w-100" style={{ height: '200px' }} src={character.imageUrl} alt={character.name} />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <Link to={`/detalle/${character._id}`} className="card-link btn btn-dark">Ver más</Link>
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
      _id: PropTypes.string.isRequired, // Añade la validación para _id
      // Agrega cualquier otra propiedad que necesites validar
    })
  ).isRequired,
};

export default Cards;
