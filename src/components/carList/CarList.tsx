import { useContext } from 'react';
import CarItem from 'components/carItem/CarItem';
import { CarListContext } from 'context/CarListContext';
import useFetch from 'hooks/useFetch';
import S from './Style';

const CarList = () => {
  const [isLoading] = useFetch();
  const { cars } = useContext(CarListContext);

  return isLoading ? null : (
    <S.Container>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </S.Container>
  );
};

export default CarList;
