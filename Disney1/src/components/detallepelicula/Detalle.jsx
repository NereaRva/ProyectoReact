import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { DisneyContext } from './context/DisneyContext';
import Api from '../data/Api';

function Detalle() {
  const { id } = useParams();
  // const { addFavoriteCharacter } = useContext(DisneyContext);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterById(id);
  }, [id]);

  const fetchCharacterById = (id) => {
    fetch(`${Api()}/${id}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data); 
      })
      .catch(error => console.error(error));
  };


  return (
    <div>
      {character && (
        <div className='container mt-5'>
          <div className='col-12 d-flex shadow rounded'>
            <div className='col-6 p-5 d-flex flex-column gap-3'>
              <h1>Detalle del personaje</h1>
              <p>Nombre: {character.data.name}</p>
              <a href={character.data.sourceUrl}>Enlace</a>
              <p>Api Url: {character.data.url}</p>
              {/* <button onClick={handleAddToFavorites}>Agregar a favoritos</button> */}
            </div>
            <div className='col-6'>
              <img className="card-img-top w-100 rounded" style={{ maxHeight: '500px' }} src={character.data.imageUrl} alt={character.data.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detalle;
