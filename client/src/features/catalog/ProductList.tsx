import { Product } from "@/app/models/product";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export const ProductSkeletonList = () => {
  return (
     <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {[...Array(12)].map(() => (
           <ProductCardSkeleton key={Math.random()} />
        ))}
     </div>
  )
}