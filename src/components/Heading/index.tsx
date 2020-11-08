import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text, headingLevel }) => {
  return React.createElement(`${headingLevel}`, null, text);
};

export default Heading;
