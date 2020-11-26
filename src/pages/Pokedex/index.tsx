import React, { useState } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
  limit: number;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 12 });
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
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
          <Heading headingLevel="h2" text={`${!isLoading && data && data.total} Pokemons for you to chose`} />
          <input type="text" value={searchValue} onChange={handleSearchChange} />
          <div className={s.root}>
            {!isLoading &&
              data &&
              data.pokemons.map((pokemon: PokemonsRequest) => (
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
