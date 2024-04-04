import { useState, useEffect } from 'react';
import Api from '../data/Api';
import Cards from './Cards';
import Hero from './Hero';
import Header from '../../header/Header';

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(Api())
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCharacters(data.data.slice(19, 39)); 
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <Header/>
      <Hero />
      <Cards characters={characters} />
    </>
  );
}

export default Home;
