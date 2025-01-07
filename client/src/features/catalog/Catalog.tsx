import { isVariableValid } from '@/lib/utils'
import { Heading } from '../common/Heading'
import ProductList, { ProductSkeletonList } from './ProductList'
import { Separator } from '../common/Separator'

export default function Catalog() {

  const products = [
    {
      "id": 1,
      "name": "Berry Blaster",
      "description": "A vibrant mix of strawberries, blueberries, and raspberries with a splash of orange juice.",
      "price": 12000,
      "discountPercent": 0,
      "imageUrl": "/images/products/berry-blaster.png",
      "type": "Berry Smoothie",
      "syrupBrand": "BerryMix Co.",
      "ingredients": [
        "Strawberries",
        "Blueberries",
        "Raspberries",
        "Orange Juice"
      ],
      "quantityInFridge": 5
    },
    {
      "id": 2,
      "name": "Tropical Tango",
      "description": "A zesty dance of mango, pineapple, and coconut milk with a hint of lime.",
      "price": 13000,
      "discountPercent": 0,
      "imageUrl": "/images/products/tropical-tango.png",
      "type": "Tropical Smoothie",
      "syrupBrand": "Tropico Delights",
      "ingredients": [
        "Mango",
        "Pineapple",
        "Coconut Milk",
        "Lime"
      ],
      "quantityInFridge": 7
    },
    {
      "id": 3,
      "name": "Green Machine",
      "description": "Packed with spinach, kale, banana, and green apple, blended with almond milk.",
      "price": 14000,
      "discountPercent": 0,
      "imageUrl": "/images/products/green-machine.png",
      "type": "Veggie",
      "syrupBrand": "HealthyBlend",
      "ingredients": [
        "Spinach",
        "Kale",
        "Banana",
        "Green Apple",
        "Almond Milk"
      ],
      "quantityInFridge": 10
    },
    {
      "id": 4,
      "name": "Sunrise Sipper",
      "description": "A bright blend of orange, carrot, ginger, and pineapple for a refreshing start.",
      "price": 12500,
      "discountPercent": 0,
      "imageUrl": "/images/products/sunrise-slipper.png",
      "type": "Veggie",
      "syrupBrand": "HealthyBlend",
      "ingredients": [
        "Orange",
        "Carrot",
        "Ginger",
        "Pineapple"
      ],
      "quantityInFridge": 8
    },
    {
      "id": 5,
      "name": "Cocoa Dream",
      "description": "Banana, almond butter, cocoa powder, and oat milk for a chocolatey treat.",
      "price": 15000,
      "discountPercent": 0,
      "imageUrl": "/images/products/cocoa-dream.png",
      "type": "Choco Smoothie",
      "syrupBrand": "ChocoSmooth",
      "ingredients": [
        "Banana",
        "Almond Butter",
        "Cocoa Powder",
        "Oat Milk"
      ],
      "quantityInFridge": 6
    },
    {
      "id": 6,
      "name": "Island Bliss",
      "description": "Coconut, banana, papaya, and a dash of vanilla for a tropical escape.",
      "price": 14000,
      "discountPercent": 0,
      "imageUrl": "/images/products/island-bliss.png",
      "type": "Tropical Smoothie",
      "syrupBrand": "Tropico Delights",
      "ingredients": [
        "Coconut",
        "Banana",
        "Papaya",
        "Vanilla"
      ],
      "quantityInFridge": 8
    },
    {
      "id": 7,
      "name": "Berrylicious Boost",
      "description": "Blackberries, strawberries, Greek yogurt, and honey for a creamy delight.",
      "price": 13500,
      "discountPercent": 0,
      "imageUrl": "/images/products/berrylicious-boost.png",
      "type": "Berry Smoothie",
      "syrupBrand": "BerryMix Co.",
      "ingredients": [
        "Blackberries",
        "Strawberries",
        "Greek Yogurt",
        "Honey"
      ],
      "quantityInFridge": 10
    },
    {
      "id": 8,
      "name": "Peach Perfection",
      "description": "Ripe peaches, banana, and a touch of cinnamon blended with oat milk.",
      "price": 14500,
      "discountPercent": 0,
      "imageUrl": "/images/products/peach-perfection.png",
      "type": "Dessert Smoothie",
      "syrupBrand": "HealthyBlend",
      "ingredients": [
        "Peaches",
        "Banana",
        "Cinnamon",
        "Oat Milk"
      ],
      "quantityInFridge": 6
    },
    {
      "id": 9,
      "name": "Pomegranate Punch",
      "description": "Pomegranate seeds, strawberries, and orange juice for a tangy kick.",
      "price": 15500,
      "discountPercent": 0,
      "imageUrl": "/images/products/promegranate-punch.png",
      "type": "Tropical Smoothie",
      "syrupBrand": "HealthyBlend",
      "ingredients": [
        "Pomegranate Seeds",
        "Strawberries",
        "Orange Juice"
      ],
      "quantityInFridge": 7
    },
    {
      "id": 10,
      "name": "Minty Melon",
      "description": "Watermelon, mint leaves, and lime juice for a refreshing splash.",
      "price": 12000,
      "discountPercent": 0,
      "imageUrl": "/images/products/minty-melon.png",
      "type": "Dessert Smoothie",
      "syrupBrand": "Tropico Delights",
      "ingredients": [
        "Watermelon",
        "Mint Leaves",
        "Lime Juice"
      ],
      "quantityInFridge": 9
    },
    {
      "id": 11,
      "name": "Avocado Zen",
      "description": "Avocado, spinach, cucumber, jalapeno, and green apple with a squeeze of lemon.",
      "price": 15000,
      "discountPercent": 0,
      "imageUrl": "/images/products/avocado-zen.png",
      "type": "Veggie",
      "syrupBrand": "HealthyBlend",
      "ingredients": [
        "Avocado",
        "Spinach",
        "Cucumber",
        "Green Apple",
        "Lemon",
        "Jalapeno"
      ],
      "quantityInFridge": 5
    },
    {
      "id": 12,
      "name": "Citrus Surge",
      "description": "Grapefruit, lemon, orange, and ginger for a vitamin-packed explosion.",
      "price": 12500,
      "discountPercent": 0,
      "imageUrl": "/images/products/citrus-surge.png",
      "type": "Vitamin Smoothie",
      "syrupBrand": "Tropico Delights",
      "ingredients": [
        "Grapefruit",
        "Lemon",
        "Orange",
        "Ginger"
      ],
      "quantityInFridge": 6
    },
    {
      "id": 13,
      "name": "Tropical Sunset",
      "description": "Guava, mango, orange, and passion fruit for a sunset in a glass.",
      "price": 13500,
      "discountPercent": 0,
      "imageUrl": "/images/products/tropical-sunset.png",
      "type": "Dessert Smoothie",
      "syrupBrand": "BerryMix Co.",
      "ingredients": [
        "Guava",
        "Mango",
        "Orange",
        "Passion Fruit"
      ],
      "quantityInFridge": 4
    },
    {
      "id": 14,
      "name": "Chocolate Chai Delight",
      "description": "Banana, almond milk, chai spices, and cocoa powder for a warm blend.",
      "price": 16000,
      "discountPercent": 0,
      "imageUrl": "/images/products/choco-delight.png",
      "type": "Choco Smoothie",
      "syrupBrand": "ChocoSmooth",
      "ingredients": [
        "Banana",
        "Almond Milk",
        "Chai Spices",
        "Cocoa Powder"
      ],
      "quantityInFridge": 3
    },
    {
      "id": 15,
      "name": "Berry Beet Boost",
      "description": "Beets, mixed berries, and Greek yogurt with a hint of honey.",
      "price": 14500,
      "discountPercent": 0,
      "imageUrl": "/images/products/berry-boost.png",
      "type": "Vitamin Smoothie",
      "syrupBrand": "BerryBeet",
      "ingredients": [
        "Beets",
        "Mixed Berries",
        "Greek Yogurt",
        "Honey"
      ],
      "quantityInFridge": 6
    }
  ]

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

  // const banners = await prisma.banner.findMany()

  return (
     <div className="flex flex-col border-neutral-200 dark:border-neutral-700">
        {/* <Carousel images={banners.map((obj) => obj.image)} /> */}
        {/* <Separator className="my-8" /> */}
        <Heading
           title="Products"
           description="Check out our products"
        />
        {isVariableValid(products) ? (
           <ProductList products={products} />
        ) : (
           <ProductSkeletonList />
        )}
        <Separator className="my-8" />
        {/* {isVariableValid(blogs) ? (
           <BlogPostGrid blogs={blogs} />
        ) : (
           <BlogPostSkeletonGrid />
        )} */}
     </div>
  )
}
