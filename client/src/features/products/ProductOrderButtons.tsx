import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlusIcon, MinusIcon } from 'lucide-react';

type Props = {
  amountInCart: number;
  className?: string;
  onProductAdd: () => void;
  onProductRemove: () => void;
};

export default function ProductOrderButtons({
  amountInCart,
  className,
  onProductAdd,
  onProductRemove,
}: Props) {
  const classes = cn('flex', className);

  return (
    <div className={classes}>
      <Button
        className='w-8 h-8 p-0 rounded-full border border-neutral-200 dark:border-neutral-600 active:bg-neutral-200 dark:active:bg-neutral-700'
        variant='ghost'
        onClick={onProductRemove}
      >
        <MinusIcon />
      </Button>
      <div className='w-8 h-8 flex items-center justify-center'>
        {amountInCart}
      </div>
      <Button
        className='w-8 h-8 p-0 rounded-full border border-neutral-200 dark:border-neutral-600 active:bg-neutral-200 dark:active:bg-neutral-700'
        variant='ghost'
        onClick={onProductAdd}
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
