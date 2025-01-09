import ProductList, { ProductSkeletonList } from './ProductList'
import { useEffect, useState } from 'react'
import { Product } from '@/app/models/product'
import { isVariableValid } from '@/lib/utils'

export default function TopPicks() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((res) => res.json())
      .then((data) => {
         const topPicks = data.slice(0, 8);
         setProducts(topPicks)
      })
  }, [])

   if (isVariableValid(products))
      return <ProductList products={products} />

   return <ProductSkeletonList />
}
