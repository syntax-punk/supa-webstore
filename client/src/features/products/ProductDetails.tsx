import { Product } from '@/app/models/product';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  return <div>ProductDetails</div>;
}
