import axios from 'axios';

export const fetchCars = async () => {
  try {
    const response = await axios.get(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
