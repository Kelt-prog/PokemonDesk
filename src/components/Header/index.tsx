import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './Header.module.scss';

import Layout from '../Layout/index';
import { GENERAL_MENU } from '../../routes';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

const Header = () => {
  const path = usePath();

  return (
    <div className={s.root}>
      <Layout>
        <div className={s.wrap}>
          <div className={s.pokemonLogo}>
            <PokemonLogoSvg />
          </div>
          <div className={s.menuWrap}>
            {GENERAL_MENU.map(({ title, link }) => (
              <A key={title} href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })}>
                {title}
              </A>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default React.memo(Header);
