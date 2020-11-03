import React from 'react';
import cn from 'classnames';
import Logo from './Logo.svg';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className={cn(s.logo)}>
            <img title="Pokemon Desc" src={Logo} alt="Pokemon Desc" />
          </div>
          <ul className={cn(s.links)}>
            <li className={cn(s.active)}>Home</li>
            <li>Pokédex</li>
            <li>Legendaries</li>
            <li>Documentation</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
