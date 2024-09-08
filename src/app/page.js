'use client';
import { useState, useEffect } from 'react';
import { fetchCars } from './helpers/fetch';

export default function Home() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const cars = await fetchCars();
    const carsResult = cars.Results;
    setCars(carsResult);
  };

  useEffect(() => {
    getCars();
  }, []);

  if (cars.length !== 0) {
    console.log(JSON.stringify(cars, null, 2));
  }
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main>
        <label htmlFor="make-select">Choose a car model:</label>
        <select name="make-select" id="make-select">
          {cars?.map((el) => {
            return <option value={el.MakeName}>{el.MakeName}</option>;
          })}
        </select>
      </main>
      <footer></footer>
    </div>
  );
}
