import React from 'react';
import cn from 'classnames';
import MakeImg from './footerImg.svg';
import TeamImg from './teamImg.svg';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <div className={cn(s.make)}>
            <img title="Pokemon Desc" src={MakeImg} alt="Pokemon Desc" />
          </div>
          <div className={cn(s.team)}>
            <img title="Pokemon Desc" src={TeamImg} alt="Pokemon Desc" />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
