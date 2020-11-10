import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';

import pokemons from './pokemonArray';

import s from './Pokedex.module.scss';

const Pokedex = () => {
  return (
    <div>
      <Header />
      <Layout>
        <div>
          <Heading headingLevel="h2" text="pokedex" />
          <div className={s.root}>
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.nameClean}
                name={pokemon.nameClean}
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
