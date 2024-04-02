import React, { createContext, useState, useContext } from "react";

export const DisneyContext = createContext();

export const DisneyProvider = ({ children }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  return (
    <DisneyContext.Provider value={{ favoriteCharacters, setFavoriteCharacters }}>
      {children}
    </DisneyContext.Provider>
  );
};

export const useDisneyContext = () => {
  return useContext(DisneyContext);
};
