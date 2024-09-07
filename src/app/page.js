'use client';
import { useState, useEffect } from 'react';
import { fetchCars } from './helpers/fetch';

export default function Home() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    let cars = await fetchCars();
    cars = cars.Results;
    setCars(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  if (cars.length !== 0) {
    console.log(JSON.stringify(cars, null, 2));
  }
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main></main>
      <footer></footer>
    </div>
  );
}
