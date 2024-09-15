import { fetchCars } from "@/app/helpers/fetch";

export async function generateStaticParams() {

  const cars = await fetchCars();
  const carsResult = cars.Results;
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  return carsResult.map((car) => ({
    id: car.MakeId,
   }))
}

console.log(generateStaticParams())

export default function Page({ params }) {
  // console.log(params);

  const getCars = async () => {
    const cars = await fetchCarModelAndId();
    const carsResult = cars.Results;
    setCars(carsResult);
  };

  return <>Result page with params</>;
}





// // Generate segments for both [category] and [product]
// export async function generateStaticParams() {
//   const products = await fetch('https://.../products').then((res) => res.json())
 
//   return products.map((product) => ({
//     category: product.category.slug,
//     product: product.id,
//   }))
// }
 
// export default function Page({ params }) {
//   // ...
// }