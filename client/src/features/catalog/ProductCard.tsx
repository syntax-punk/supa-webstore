import { MouseEvent } from "react"
import { Product } from "@/app/models/product"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ImageSkeleton } from "../common/Icons"
import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  product: Product
  amountInCart?: number
  onProductAdd?: (id: number) => void
  onProductRemove?: (id: number) => void
}

export default function ProductCard({ product, amountInCart, onProductAdd, onProductRemove }: Props) {
  
  function ProductPrice() {
     const price = product.price / 100;
     const discount = product.discountPercent;

     if (discount > 0) {
         
        const discountedPrice = price - (price * (discount / 100));

        return (
           <div className="flex gap-2 items-center">
              <Badge className="flex gap-4" variant="destructive">
                 <div className="line-through">{price} NOK</div>
                 <div>{discount}%</div>
              </Badge>
              <h2 className="">{discountedPrice.toFixed(2)} NOK</h2>
           </div>
        )
     }

     return <h2>{price} NOK</h2>
  }

   function onPlusClick(event: MouseEvent<HTMLButtonElement>): void {
      event.preventDefault();
      event.stopPropagation();
      onProductAdd?.(product.id);
   }

   function onMinusClick(event: MouseEvent<HTMLButtonElement>): void {
      event.preventDefault();
      event.stopPropagation();
      onProductRemove?.(product.id);
   }

  return (
     <a className="" href={`/products/${product.id}`}>
        <Card className="h-full border border-neutral-200 dark:border-neutral-600">
           <CardHeader className="p-0">
              <div className="relative w-full">
                 <img
                    className="rounded-t-xl w-full h-full"
                    src={product.imageUrl}
                    alt="product image"
                    aspect-ratio="1/1"
                 />
              </div>
           </CardHeader>
           <CardContent className="grid gap-1 p-4">
              <Badge variant="outline" className="w-max text-neutral-500">
                 {product.type}
              </Badge>
              <h2 className="mt-4">{product.name}</h2>
              <p className="text-xs text-neutral-500 text-justify h-10">
                 {product.description}
              </p>
           </CardContent>
           <CardFooter className="flex-col items-start px-4 justify-center gap-y-4">
               {product.quantityInFridge > 0 ? (
                  <ProductPrice />
               ) : (
                  <Badge variant="secondary">Out of stock</Badge>
               )}
               <div className="flex items-center justify-end w-full">
                  <Button 
                     className="w-8 h-8 p-0 rounded-full border border-neutral-200 dark:border-neutral-600 active:bg-neutral-200 dark:active:bg-neutral-700"
                     variant="ghost"
                     onClick={onPlusClick}
                  >
                     <PlusIcon />
                  </Button>
                  <div className="w-8 h-8 flex items-center justify-center">
                     {amountInCart}
                  </div>
                  <Button 
                     className="w-8 h-8 p-0 rounded-full border border-neutral-200 dark:border-neutral-600 active:bg-neutral-200 dark:active:bg-neutral-700"  
                     variant="ghost"
                     onClick={onMinusClick}
                  >
                     <MinusIcon />
                  </Button>
               </div>
           </CardFooter>
        </Card>
     </a>
  )
}

export function ProductCardSkeleton() {
  return (
     <a href="#">
        <div className="animate-pulse rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
           <div className="relative h-full w-full">
              <div className="flex h-40 w-full items-center justify-center rounded bg-neutral-300 dark:bg-neutral-700 ">
                 <ImageSkeleton />
              </div>
           </div>
           <div className="p-5">
              <div className="w-full">
                 <div className="mb-4 h-2.5 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                 <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                 <div className="mb-2.5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                 <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                 <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                 <div className="h-2 max-w-[360px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
              </div>
           </div>
        </div>
     </a>
  )
}
