import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const Pokedex = () => {
  return (
    <div>
      <Header />
      <Layout>
        <div>
          <Heading
            headingLevel="h2"
            text="<b>Find</b> all your favorite <b>Pokemon</b>
            <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>"
          />
          <Button isFullWidth color="yellow" size="small">
            See pokemons
          </Button>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
