// 'use client';
import { fetchCars } from "@/app/helpers/fetch";
// import { useState } from 'react';

export async function generateStaticParams() {

  const cars = await fetchCars();
  const carsResult = cars.Results;
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  let ids = []
  ids = carsResult.map((car) => (ids.push(car.MakeId)))
  let paramsList = []
  for (let id of ids) {
    for (let year in years) {
      paramsList.push({ id: id.toString(), year: year.toString() });
    }
  }
  return paramsList;
}

export default function Page({ paramsList }) {
  // const [cars, setCars] = useState([]);
  console.log(paramsList);

  const getCars = async () => {
    const cars = await fetchCarModelAndId(params[0], params[1]);
    const carsResult = cars.Results;
    setCars(carsResult);
    console.log(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  return <>Result page with params</>;
}
