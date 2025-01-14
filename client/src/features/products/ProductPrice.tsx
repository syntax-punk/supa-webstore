import { Badge } from '@/components/ui/badge';

type Props = {
  productPrice: number;
  productDiscount: number;
};

export default function ProductPrice({ productPrice, productDiscount }: Props) {
  const price = productPrice / 100;
  const discount = productDiscount;

  if (discount > 0) {
    const discountedPrice = price - price * (discount / 100);

    return (
      <div className='flex gap-2 items-center'>
        <Badge className='flex gap-4' variant='destructive'>
          <div className='line-through'>{price} NOK</div>
          <div>{discount}%</div>
        </Badge>
        <h2 className=''>{discountedPrice.toFixed(2)} NOK</h2>
      </div>
    );
  }

  return <h2>{price} NOK</h2>;
}
