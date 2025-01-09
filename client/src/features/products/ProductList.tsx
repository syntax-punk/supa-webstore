import { Product } from '@/app/models/product';
import ProductCard from './ProductCard';
import { OrderMap } from '@/types/order';
import { useState } from 'react';

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  const [orderCart, setOrderCart] = useState<OrderMap>({});

  function onProductAdd(id: number) {
    const productsQty =
      products.find((product) => product.id === id)?.quantityInFridge || 0;
    const order = orderCart[id] || 0;
    setOrderCart({ ...orderCart, [id]: Math.min(productsQty, order + 1) });
  }

  function onProductRemove(id: number) {
    const order = orderCart[id] || 0;
    if (order > 0) {
      setOrderCart({ ...orderCart, [id]: order - 1 });
    }
  }

  return (
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          onProductAdd={onProductAdd}
          onProductRemove={onProductRemove}
          amountInCart={orderCart[product.id] || 0}
        />
      ))}
    </div>
  );
}
