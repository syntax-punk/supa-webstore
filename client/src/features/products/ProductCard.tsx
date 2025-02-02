import { Product } from '@/app/models/product';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ArrowRightIcon, MinusIcon, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProductPrice from './ProductPrice';
import ProductOrderButtons from './ProductOrderButtons';

type ProductCardVariant = 'view' | 'order';

type Props = {
  product: Product;
  variant?: ProductCardVariant;
  amountInCart?: number;
  onProductAdd?: (id: number) => void;
  onProductRemove?: (id: number) => void;
};

export default function ProductCard({
  product,
  variant = 'order',
  amountInCart = 0,
  onProductAdd,
  onProductRemove,
}: Props) {
  function onPlusClick(): void {
    onProductAdd?.(product.id);
  }

  function onMinusClick(): void {
    onProductRemove?.(product.id);
  }

  function onViewClick(): void {
    console.log('View product');
    // navigate to `/products/${product.id}`
  }

  return (
    <div>
      <Card className='h-full border border-neutral-200 dark:border-neutral-600'>
        <CardHeader className='p-0'>
          <div className='relative w-full'>
            <img
              className='rounded-t-xl w-full h-full'
              src={product.imageUrl}
              alt='product image'
              aspect-ratio='1/1'
            />
          </div>
        </CardHeader>
        <CardContent className='grid gap-1 p-4'>
          <Badge variant='outline' className='w-max text-neutral-500'>
            {product.type}
          </Badge>
          <h2 className='mt-4'>{product.name}</h2>
          <p className='text-xs text-neutral-500 text-justify h-10'>
            {product.description}
          </p>
        </CardContent>
        {variant === 'order' && (
          <CardFooter className='flex-col items-start px-4 justify-center gap-y-4'>
            {product.quantityInFridge > 0 ? (
              <ProductPrice
                productPrice={product.price}
                productDiscount={product.discountPercent}
              />
            ) : (
              <Badge variant='secondary'>Out of stock</Badge>
            )}
            <div className='flex items-center justify-between w-full'>
              <ProductOrderButtons
                amountInCart={amountInCart}
                onProductAdd={onPlusClick}
                onProductRemove={onMinusClick}
              />
              <Link to={`/product/${product.id}`}>
                <Button
                  className='justify-self-end w-8 h-8 p-0 rounded-full border border-neutral-200 dark:border-neutral-600 active:bg-neutral-200 dark:active:bg-neutral-700'
                  variant='ghost'
                  onClick={onViewClick}
                >
                  <ArrowRightIcon />
                </Button>
              </Link>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
