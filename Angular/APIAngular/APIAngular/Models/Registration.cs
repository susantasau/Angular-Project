using System;
using System.Collections.Generic;

namespace APIAngular.Models;

public partial class Registration
{
    public int Id { get; set; }

    public string First_Name { get; set; } = null!;

    public string Last_Name { get; set; } = null!;

    public string Mobile_No { get; set; } = null!;

    public string Email_Id { get; set; } = null!;

    public DateTime Dob { get; set; }

    public string Gender { get; set; } = null!;

    public string User_Name { get; set; } = null!;

    public string Password { get; set; } = null!;
}
