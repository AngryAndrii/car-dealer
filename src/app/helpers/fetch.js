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

export const fetchCarModelAndId = async (makeId, year) => {
  try {
    const response = await axios.get(
      `<https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json>`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
