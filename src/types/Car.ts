export enum SegmentSwitch {
  '소형' = 'C',
  '중형' = 'D',
  '대형' = 'E',
  'SUV' = 'SUV',
}

export enum FuelTypeSwitch {
  '가솔린' = 'gasoline',
  '하이브리드' = 'hybrid',
  '전기' = 'ev',
}

type FuelType = 'gasoline' | 'hybrid' | 'ev';
type Segment = 'C' | 'D' | 'E' | 'SUV';

interface Attribute {
  brand: string;
  name: string;
  segment: Segment;
  fuelType: FuelType;
  imageUrl: string;
}

interface Insurance {
  name: string;
  description: string;
}

interface AdditionalProducts {
  name: string;
  amount: number;
}

export interface CarItem {
  id: number;
  startDate: Date;
  createdAt: Date;
  attribute: Attribute;
  amount: number;
  insurance: Insurance[];
  additionalProducts: AdditionalProducts[];
}
