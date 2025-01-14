import { Product } from '@/app/models/product';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

export default function Breadcrumbs({ product }: Props) {
  return (
    <nav className='flex text-muted-foreground' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center gap-2'>
        <li className='inline-flex items-center'>
          <Link to='/' className='inline-flex items-center text-sm font-medium'>
            Home
          </Link>
        </li>
        <li>
          <div className='flex items-center gap-2'>
            <ChevronRightIcon className='h-4' />
            <Link className='text-sm font-medium' to='/products'>
              Products
            </Link>
          </div>
        </li>
        <li aria-current='page'>
          <div className='flex items-center gap-2'>
            <ChevronRightIcon className='h-4' />
            <span className='text-sm font-medium'>{product?.name}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
