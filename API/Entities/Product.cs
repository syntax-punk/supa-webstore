namespace API.Entities;

public class Product
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public long Price { get; set; }
    public int DiscountPercent { get; set; }
    public required string ImageUrl { get; set; }
    public required string Type { get; set; }
    public required string SyrupBrand { get; set; }
    public List<string> Ingredients { get; set; } = [];
    public int QuantityInFridge { get; set; }
}