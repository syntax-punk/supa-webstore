import { ImageSkeleton } from "../common/Icons"

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

export const ProductsListSkeleton = () => {
  return (
     <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {[...Array(12)].map(() => (
           <ProductCardSkeleton key={Math.random()} />
        ))}
     </div>
  )
}