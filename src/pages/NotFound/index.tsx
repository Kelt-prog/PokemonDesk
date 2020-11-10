import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import TeamRocket from './assets/TeamRocket.png';
import s from './NotFound.module.scss';

const EmptyPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this game.
          </div>
          <Button onClick={() => navigate('/')}>Go back</Button>
        </div>
        <div>Page not found</div>
      </div>
    </div>
  );
};

export default EmptyPage;
