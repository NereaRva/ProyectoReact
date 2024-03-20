import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../data/Api';

function Detalle() {
  const { id } = useParams(); // Obtenemos el ID del personaje de la URL
  const [character, setCharacter] = useState(null); // Estado para almacenar el personaje

  useEffect(() => {
    // Aquí deberías cargar el personaje correspondiente utilizando el ID obtenido de la URL
    // Por simplicidad, supongamos que tienes una función para obtener el personaje por su ID
    fetchCharacterById(id);
  }, [id]);

  // Función para obtener el personaje por su ID
  const fetchCharacterById = (id) => {
    // Lógica para obtener el personaje por su ID (puedes adaptar esto según tu aplicación)
    // Supongamos que tienes un API que devuelve el personaje según su ID
    fetch(`${Api()}/${id}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data); // Establece el personaje obtenido en el estado
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
