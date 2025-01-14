import { Product } from '@/app/models/product';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../common/Breadcrumbs';
import Carousel from '../common/Carousel';
import DetailsSection from './DetailsSection';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();

  useEffect(
    function fetchProductDataOnMount() {
      fetch(`https://localhost:5001/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [id]
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumbs product={product} />
      <div className='mt-6 grid grid-cols-1 gap-2 md:grid-cols-3'>
        <div className='relative w-full col-span-1'>
          <Carousel images={[product.imageUrl]} />
        </div>
        <DetailsSection product={product} />
      </div>
    </>
  );
}
