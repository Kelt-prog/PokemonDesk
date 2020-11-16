import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import { IPokemon } from './pokemonArray';
import s from './Pokedex.module.scss';

interface IPokemonsData {
  pokemons: IPokemon[];
  total: number;
}

interface IusePokemons {
  data: IPokemonsData;
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): IusePokemons => {
  const [data, setData] = useState({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <Layout>
        <div>
          <Heading headingLevel="h2" text={`${data.total} Pokemons for you to chose`} />
          <div className={s.root}>
            {data.pokemons.map((pokemon) => (
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
