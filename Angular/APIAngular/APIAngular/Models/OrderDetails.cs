using System.ComponentModel.DataAnnotations;
using System.Data;

namespace APIAngular.Models
{
    public class OrderDetails
    {
        [Key]
        string? orderId {  get; set; }  
        string? CustomerName { get; set; }
        string? ProdName { get; set; }
        int quantity { get; set; }
        float TotalPrice { get; set; }
        string? AddressPin { get; set; }
        string? Phone {  get; set; }
        string? PaymentMode { get; set; }
    }
}
