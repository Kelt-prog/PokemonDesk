import { useEffect, useState } from 'react';
import req from '../utils/request';
import { IPokemon } from '../pages/Pokedex/pokemonArray';

interface IPokemonsData {
  pokemons: IPokemon[];
  total: number;
}

interface IusePokemons {
  data: IPokemonsData;
  isLoading: boolean;
  isError: boolean;
}

const useData = (endpoint: string, query: object, deps: any[]): IusePokemons => {
  const [data, setData] = useState({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
