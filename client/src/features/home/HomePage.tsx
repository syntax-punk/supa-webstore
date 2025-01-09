import Carousel from "../common/Carousel";
import { Heading } from "../common/Heading";
import { Separator } from "../common/Separator";
import TopPicks from "../products/TopPicks";

export default function HomePage() {
  const banners =["/images/banners/banner1.png", "/images/banners/banner2.png", "/images/banners/banner3.png", "/images/banners/banner4.png"]

  return (
    <div className="flex flex-col border-neutral-200 dark:border-neutral-700">
      <Carousel images={banners} />
      <Separator className="my-2" />
      <Heading
          title="Our Top Picks"
          description="impossible to resist"
      />
      <TopPicks />
      <Separator className="my-2" />

      {/* {isVariableValid(blogs) ? (
          <BlogPostGrid blogs={blogs} />
      ) : (
          <BlogPostSkeletonGrid />
      )} */}
    </div>
  )
}