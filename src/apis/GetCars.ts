import axios from 'axios';
import { FuelTypeSwitch, CarItem, SegmentSwitch } from 'types/Car';
import HTTPError from 'utils/HTTPError';

const getCars = async (
  fuelType?: keyof typeof FuelTypeSwitch,
  segment?: keyof typeof SegmentSwitch
): Promise<CarItem[] | undefined> => {
  const fuel = fuelType ? `fuleType=${FuelTypeSwitch[fuelType]}` : '';
  const seg = segment ? `segment=${SegmentSwitch[segment]}` : '';
  const query = fuel && seg ? `${fuel}&${seg}` : fuel + seg;
  try {
    const result = await axios.get(
      `https://preonboarding.platdev.net/api/cars?${query}`
    );
    return result.data.payload;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      throw new HTTPError(err.response.status, err.response.statusText);
    }
  }
};

export default getCars;
