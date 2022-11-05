import React from 'react';
import { CarItem as CarItemType } from 'types/Car';
import S from './Style';

const CarItem = ({ car }: { car: CarItemType }) => {
  const handleSegmentReplace = () => {
    if (car.attribute.segment === 'C') return '소형';
    if (car.attribute.segment === 'D') return '중형';
    if (car.attribute.segment === 'E') return '대형';
    if (car.attribute.segment === 'SUV') return 'SUV';
  };

  const handleFuelTypeReplace = () => {
    if (car.attribute.fuelType === 'gasoline') return '가솔린';
    if (car.attribute.fuelType === 'hybrid') return '하이브리드';
    if (car.attribute.fuelType === 'ev') return '전기';
  };

  return (
    <S.Container>
      <S.ItemLeftSide>
        <div>{car.attribute.brand}</div>
        <div>{car.attribute.name}</div>
        <div>
          {handleSegmentReplace()}/{handleFuelTypeReplace()}
        </div>
        <div>월 {car.amount} 원 부터</div>
      </S.ItemLeftSide>
      <S.ItemRightSide>
        <img src={car.attribute.imageUrl} alt="car" />
      </S.ItemRightSide>
    </S.Container>
  );
};

export default CarItem;
