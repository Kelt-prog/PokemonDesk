import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';

const Pokedex = () => {
  return (
    <div>
      <Header />
      <Layout>
        <div>
          <Heading headingLevel="h2" text="pokedex" />
          <PokemonCard />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
