'use client';
import { useState, useEffect } from 'react';
import { fetchCars } from './helpers/fetch';
import Link from 'next/link';
import years from './helpers/years';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);

  const getCars = async () => {
    const cars = await fetchCars();
    const carsResult = cars.Results;
    setCars(carsResult);
  };

  const onChangeModel = (e) => {
    console.log(e.target.value);
    setModel(e.target.value);
  };

  const onChangeYear = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main>
        <label htmlFor="make-select">Choose a car model:</label>
        <select
          name="make-select"
          id="make-select"
          onChange={(e) => {
            onChangeModel(e);
          }}
        >
          {cars?.map((el) => {
            return (
              <option key={el.MakeName} value={el.MakeName.toLowerCase()}>
                {el.MakeName}
              </option>
            );
          })}
        </select>
        <label htmlFor="year-select">Choose a model year:</label>
        <select
          name="year-select"
          id="year-select"
          onChange={(e) => {
            onChangeYear(e);
          }}
        >
          {years.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
        <Link href="/result"></Link>
      </main>
      <footer></footer>
    </div>
  );
}
