using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace APIAngular.Models
{
    public partial class Product
    {
        [Key]
        public int ProdId { get; set; }
        public string? ProdName { get; set; }
        public int Quantity { get; set; }
        public float? Price { get; set; }
    }
}
