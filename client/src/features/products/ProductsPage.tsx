import { isVariableValid } from '@/lib/utils';
import { Heading } from '../common/Heading';
import ProductList from './ProductList';
import { Separator } from '../common/Separator';
import { useEffect, useState } from 'react';
import { Product } from '@/app/models/product';
import { ProductsListSkeleton } from './Skeletons';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='flex flex-col border-neutral-200 dark:border-neutral-700'>
      <Separator className='my-2' />
      <Heading title='supa smooooooth' description='impossible to resist' />
      {isVariableValid(products) ? (
        <ProductList products={products} />
      ) : (
        <ProductsListSkeleton />
      )}
    </div>
  );
}
