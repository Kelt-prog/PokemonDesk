import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading
            headingLevel="h2"
            text="<b>Find</b> all your favorite <b>Pokemon</b>
            <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>"
          />
          <Button isFullWidth color="yellow" size="small">
            See pokemons
          </Button>
        </div>
        <Parallax />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;