import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';
import Footer from '../../components/Footer';

import Button, { ButtonColors, ButtonSize } from '../../components/Button';
import s from './Home.module.scss';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading headingLevel="h2" text="Find all your favorite Pokemon" />
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)} color={ButtonColors.green} size={ButtonSize.small}>
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
