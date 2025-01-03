using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
            ?? throw new InvalidOperationException("Failed to retrieve StoreContext");
        
        SeedData(context);
    }

    private static void SeedData(StoreContext context)
    {
        context.Database.Migrate();
        
        if (context.Products.Any())
            return;

        var products = new List<Product>
        {
            new ()
            {
                Name = "Berry Blaster",
                Description = "A vibrant mix of strawberries, blueberries, and raspberries with a splash of orange juice.",
                Price = 12000,
                ImageUrl = "images/berry-blaster.jpg",
                Type = "Berry Smoothie",
                SyrupBrand = "BerryMix Co.",
                Ingredients = ["Strawberries", "Blueberries", "Raspberries", "Orange Juice"],
                QuantityInFridge = 5
            },
            new ()
            {
                Name = "Tropical Tango",
                Description = "A zesty dance of mango, pineapple, and coconut milk with a hint of lime.",
                Price = 13000,
                ImageUrl = "images/tropical-tango.jpg",
                Type = "Tropical Smoothie",
                SyrupBrand = "Tropico Delights",
                Ingredients = ["Mango", "Pineapple", "Coconut Milk", "Lime"],
                QuantityInFridge = 7
            },
            new ()
            {
                Name = "Green Machine",
                Description = "Packed with spinach, kale, banana, and green apple, blended with almond milk.",
                Price = 14000,
                ImageUrl = "images/green-machine.jpg",
                Type = "Veggie",
                SyrupBrand = "HealthyBlend",
                Ingredients = ["Spinach", "Kale", "Banana", "Green Apple", "Almond Milk"],
                QuantityInFridge = 10
            },
            new ()
            {
                Name = "Sunrise Sipper",
                Description = "A bright blend of orange, carrot, ginger, and pineapple for a refreshing start.",
                Price = 12500,
                ImageUrl = "images/sunrise-sipper.jpg",
                Type = "Veggie",
                SyrupBrand = "HealthyBlend",
                Ingredients = ["Orange", "Carrot", "Ginger", "Pineapple"],
                QuantityInFridge = 8
            },
            new ()
            {
                Name = "Cocoa Dream",
                Description = "Banana, almond butter, cocoa powder, and oat milk for a chocolatey treat.",
                Price = 15000,
                ImageUrl = "images/cocoa-dream.jpg",
                Type = "Choco Smoothie",
                SyrupBrand = "ChocoSmooth",
                Ingredients = ["Banana", "Almond Butter", "Cocoa Powder", "Oat Milk"],
                QuantityInFridge = 6
            },
            new ()
            {
                Name = "Island Bliss",
                Description = "Coconut, banana, papaya, and a dash of vanilla for a tropical escape.",
                Price = 14000,
                ImageUrl = "images/island-bliss.jpg",
                Type = "Tropical Smoothie",
                SyrupBrand = "Tropico Delights",
                Ingredients = ["Coconut", "Banana", "Papaya", "Vanilla"],
                QuantityInFridge = 8
            },
            new ()
            {
                Name = "Berrylicious Boost",
                Description = "Blackberries, strawberries, Greek yogurt, and honey for a creamy delight.",
                Price = 13500,
                ImageUrl = "images/berrylicious-boost.jpg",
                Type = "Berry Smoothie",
                SyrupBrand = "BerryMix Co.",
                Ingredients = ["Blackberries", "Strawberries", "Greek Yogurt", "Honey"],
                QuantityInFridge = 10
            },
            new ()
            {
                Name = "Peach Perfection",
                Description = "Ripe peaches, banana, and a touch of cinnamon blended with oat milk.",
                Price = 14500,
                ImageUrl = "images/peach-perfection.jpg",
                Type = "Dessert Smoothie",
                SyrupBrand = "HealthyBlend",
                Ingredients = ["Peaches", "Banana", "Cinnamon", "Oat Milk"],
                QuantityInFridge = 6
            },
            new ()
            {
                Name = "Pomegranate Punch",
                Description = "Pomegranate seeds, strawberries, and orange juice for a tangy kick.",
                Price = 15500,
                ImageUrl = "images/pomegranate-punch.jpg",
                Type = "Tropical Smoothie",
                SyrupBrand = "HealthyBlend",
                Ingredients = ["Pomegranate Seeds", "Strawberries", "Orange Juice"],
                QuantityInFridge = 7
            },
            new ()
            {
                Name = "Minty Melon",
                Description = "Watermelon, mint leaves, and lime juice for a refreshing splash.",
                Price = 12000,
                ImageUrl = "images/minty-melon.jpg",
                Type = "Dessert Smoothie",
                SyrupBrand = "Tropico Delights",
                Ingredients = ["Watermelon", "Mint Leaves", "Lime Juice"],
                QuantityInFridge = 9
            },
            new ()
            {
                Name = "Avocado Zen",
                Description = "Avocado, spinach, cucumber, and green apple with a squeeze of lemon.",
                Price = 15000,
                ImageUrl = "images/avocado-zen.jpg",
                Type = "Veggie",
                SyrupBrand = "HealthyBlend",
                Ingredients = ["Avocado", "Spinach", "Cucumber", "Green Apple", "Lemon"],
                QuantityInFridge = 5
            },
            new ()
            {
                Name = "Citrus Surge",
                Description = "Grapefruit, lemon, orange, and ginger for a vitamin-packed explosion.",
                Price = 12500,
                ImageUrl = "images/citrus-surge.jpg",
                Type = "Vitamin Smoothie",
                SyrupBrand = "Tropico Delights",
                Ingredients = ["Grapefruit", "Lemon", "Orange", "Ginger"],
                QuantityInFridge = 6
            },
            new ()
            {
                Name = "Tropical Sunset",
                Description = "Guava, mango, orange, and passion fruit for a sunset in a glass.",
                Price = 13500,
                ImageUrl = "images/tropical-sunset.jpg",
                Type = "Dessert Smoothie",
                SyrupBrand = "BerryMix Co.",
                Ingredients = ["Guava", "Mango", "Orange", "Passion Fruit"],
                QuantityInFridge = 4
            },
            new ()
            {
                Name = "Chocolate Chai Delight",
                Description = "Banana, almond milk, chai spices, and cocoa powder for a warm blend.",
                Price = 16000,
                ImageUrl = "images/chocolate-chai-delight.jpg",
                Type = "Choco Smoothie",
                SyrupBrand = "ChocoSmooth",
                Ingredients = ["Banana", "Almond Milk", "Chai Spices", "Cocoa Powder"],
                QuantityInFridge = 3
            },
            new ()
            {
                Name = "Berry Beet Boost",
                Description = "Beets, mixed berries, and Greek yogurt with a hint of honey.",
                Price = 14500,
                ImageUrl = "images/berry-beet-boost.jpg",
                Type = "Vitamin Smoothie",
                SyrupBrand = "BerryBeet",
                Ingredients = ["Beets", "Mixed Berries", "Greek Yogurt", "Honey"],
                QuantityInFridge = 6
            }
        };
    
        context.Products.AddRange(products);
        context.SaveChanges();
    }
}