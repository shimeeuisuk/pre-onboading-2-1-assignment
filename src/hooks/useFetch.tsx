import { useContext, useState, useEffect } from 'react';
import { CarListContext } from 'context/CarListContext';
import getCars from 'apis/GetCars';
import HTTPError from 'utils/HTTPError';

const useFetch = () => {
  const { setCars, fuelType, segment } = useContext(CarListContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await getCars(fuelType, segment);
      if (data) setCars(data);
    } catch (err) {
      if (err instanceof HTTPError) {
        setError(err.errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fuelType, segment]);
  return [isLoading, error];
};

export default useFetch;
