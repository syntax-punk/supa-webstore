import { isVariableValid } from '@/lib/utils'
import { Heading } from '../common/Heading'
import ProductList, { ProductSkeletonList } from './ProductList'
import { Separator } from '../common/Separator'
import Carousel from '../common/Carousel'
import { useEffect, useState } from 'react'
import { Product } from '@/app/models/product'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const banners =["/images/banners/banner1.png", "/images/banners/banner2.png", "/images/banners/banner3.png", "/images/banners/banner4.png"]

  // const products = await prisma.product.findMany({
  //    include: {
  //       brand: true,
  //       categories: true,
  //    },
  // })

  // const blogs = await prisma.blog.findMany({
  //    include: { author: true },
  //    take: 3,
  // })

  return (
     <div className="flex flex-col border-neutral-200 dark:border-neutral-700">
        <Carousel images={banners} />
        <Separator className="my-2" />
        <Heading
           title="supa smooooooth"
           description="impossible to resist"
        />
        {isVariableValid(products) ? (
           <ProductList products={products} />
        ) : (
           <ProductSkeletonList />
        )}
        <Separator className="my-2" />
        {/* {isVariableValid(blogs) ? (
           <BlogPostGrid blogs={blogs} />
        ) : (
           <BlogPostSkeletonGrid />
        )} */}
     </div>
  )
}
