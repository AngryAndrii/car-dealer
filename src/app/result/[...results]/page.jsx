import { fetchCars } from "@/app/helpers/fetch";

export async function generateStaticParams() {

  const cars = await fetchCars();
  const carsResult = cars.Results;
  return carsResult.map((car) => ({
    id: car.MakeId,
    year: car.Year,
  }))
  return [];
}

export default function Page({ params }) {
  console.log(params);
  return <>Result page with params</>;
}





// Generate segments for both [category] and [product]
export async function generateStaticParams() {
  const products = await fetch('https://.../products').then((res) => res.json())
 
  return products.map((product) => ({
    category: product.category.slug,
    product: product.id,
  }))
}
 
export default function Page({ params }) {
  // ...
}