import { useMemo, useState, createContext } from 'react';
import { CarItem, FuelTypeSwitch, SegmentSwitch } from 'types/Car';

interface ContextType {
  cars: CarItem[];
  fuelType?: keyof typeof FuelTypeSwitch;
  segment?: keyof typeof SegmentSwitch;

  setCars: React.Dispatch<React.SetStateAction<CarItem[]>>;
  setFuelType: React.Dispatch<
    React.SetStateAction<keyof typeof FuelTypeSwitch | undefined>
  >;
  setSegment: React.Dispatch<
    React.SetStateAction<keyof typeof SegmentSwitch | undefined>
  >;
}

export const CarListContext = createContext<ContextType>({
  cars: [],
  setCars: () => {},
  setFuelType: () => {},
  setSegment: () => {},
});
export const CarListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cars, setCars] = useState<CarItem[]>([]);
  const [fuelType, setFuelType] = useState<
    keyof typeof FuelTypeSwitch | undefined
  >();
  const [segment, setSegment] = useState<
    keyof typeof SegmentSwitch | undefined
  >();

  const value = useMemo(
    () => ({ cars, setCars, fuelType, setFuelType, segment, setSegment }),
    [cars, fuelType, segment]
  );

  return (
    <CarListContext.Provider value={value}>{children}</CarListContext.Provider>
  );
};
