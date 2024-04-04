// disneyContext.jsx

import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const DisneyContext = createContext();

export const DisneyProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [favoriteCharactersDetails, setFavoriteCharactersDetails] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]); // Debe ser inicializado aquí o en otro lugar antes de su uso

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
    const updatedFavorites = favoriteCharacters.filter((id) => id !== characterId);
    setFavoriteCharacters(updatedFavorites);
  };

  return (
    <DisneyContext.Provider value={{ 
      favoriteCharacters, 
      setFavoriteCharacters,
      isDropdownOpen,
      toggleDropdown,
      favoriteCharactersDetails,
      handleRemoveFavorite
    }}>
      {children}
    </DisneyContext.Provider>
  );
};
DisneyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

