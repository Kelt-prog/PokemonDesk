import React from 'react';

import s from './Heading.module.scss';

interface HeadingProps {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, headingLevel }) => {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

  return (
    <div className={s.root}>
      <Title dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Heading;
