import React, { useState } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';
import useData from '../../hook/getData';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <Layout>
        <div>
          <Heading headingLevel="h2" text={`${!isLoading && data.total} Pokemons for you to chose`} />
          <input type="text" value={searchValue} onChange={handleSearchChange} />
          <div className={s.root}>
            {!isLoading &&
              data.pokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  stats={pokemon.stats}
                  img={pokemon.img}
                  types={pokemon.types}
                />
              ))}
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
