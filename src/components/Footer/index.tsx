import React from 'react';
import cn from 'classnames';

import { ReactComponent as OurTeamSvg } from './assets/teamImg.svg';
import { ReactComponent as MadeWithSvg } from './assets/footerImg.svg';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <div className={cn(s.make)}>
            <MadeWithSvg />
          </div>
          <div className={cn(s.team)}>
            <OurTeamSvg />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
