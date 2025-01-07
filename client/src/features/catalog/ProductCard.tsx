import { Product } from "@/app/models/product"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ImageSkeleton } from "../common/Icons"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  
  function ProductPrice() {
     const price = product.price / 100;
     const discount = 25;

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

  return (
     <a className="" href={`/products/${product.id}`}>
        <Card className="h-full">
           <CardHeader className="p-0">
              <div className="relative w-full">
                 <img
                    className="rounded-t-lg w-full h-full"
                    src={product.imageUrl}
                    alt="product image"
                    aspect-ratio="1/1"
                 />
              </div>
           </CardHeader>
           <CardContent className="grid gap-1 p-4">
              <Badge variant="outline" className="w-min text-neutral-500">
                 category
              </Badge>

              <h2 className="mt-2">{product.name}</h2>
              <p className="text-xs text-neutral-500 text-justify">
                 {product.description}
              </p>
           </CardContent>
           <CardFooter>
              {product.quantityInFridge > 0 ? (
                 <ProductPrice />
              ) : (
                 <Badge variant="secondary">Out of stock</Badge>
              )}
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
