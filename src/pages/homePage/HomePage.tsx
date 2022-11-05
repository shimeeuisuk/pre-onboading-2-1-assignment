import React from 'react';
import CarList from 'components/carList/CarList';
import S from './Style';

const HomePage = () => {
  return (
    <S.Container>
      <CarList />
    </S.Container>
  );
};

export default HomePage;
