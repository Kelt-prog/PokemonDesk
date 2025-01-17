import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <>
      <div>This is empty Page for {title}</div>
    </>
  );
};

export default EmptyPage;
