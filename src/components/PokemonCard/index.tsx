import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCardProps {
  name: string;
  stats: {
    [key: string]: number;
  };
  types: string[];
  img: string;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, stats, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading headingLevel="h6" text={name} className={s.titleName} />
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        {types.map((type) => (
          <div key={type} className={s.labelWrap}>
            <span className={s.label}>{type}</span>
          </div>
        ))}
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
