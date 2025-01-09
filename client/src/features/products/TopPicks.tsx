import { Product } from '@/app/models/product'
import { isVariableValid } from '@/lib/utils'
import { ProductsListSkeleton } from './Skeletons'
import ProductCard from './ProductCard'

type Props = {
   products?: Product[]
}

export default function TopPicks({ products }: Props) {

   if (isVariableValid(products))
      return (
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {products?.map((product) => (
            <ProductCard 
                product={product}
                variant='view'
                key={product.id} 
            />
          ))}
        </div>
      )

   return <ProductsListSkeleton />
}
