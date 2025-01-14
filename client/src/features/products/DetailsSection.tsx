import { Product } from '@/app/models/product';
import { Link } from 'react-router-dom';
import { Separator } from '../common/Separator';
import { Badge } from '@/components/ui/badge';
import ProductPrice from './ProductPrice';

type Props = {
  product: Product;
};

export default function DetailsSection({ product }: Props) {
  return (
    <div className='col-span-2 w-full rounded-lg bg-neutral-100 p-6 dark:bg-neutral-900'>
      <h3 className='mb-4 text-xl font-medium'>{product.name}</h3>
      <Separator />
      <div className='flex gap-2 mb-2 items-center'>
        <p className='text-sm'>Brand:</p>
        <Link to={`/products?brand=${product.syrupBrand}`}>
          <Badge variant='outline'>{product.syrupBrand}</Badge>
        </Link>
      </div>
      <div className='flex gap-2 items-center'>
        <p className='text-sm'>Categories:</p>
        <Badge variant='outline'>{product.type}</Badge>
      </div>
      <Separator />
      <small>{product.description}</small>

      <Separator />
      <div className='block space-y-2'>
        <ProductPrice
          productPrice={product.price}
          productDiscount={product.discountPercent}
        />
        <div className='flex gap-2'>
          <div></div>
          <div></div>
          {/* <CartButton product={product} />
          <WishlistButton product={product} /> */}
        </div>
      </div>
    </div>
  );
}
