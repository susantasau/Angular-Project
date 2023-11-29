using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace APIAngular.Models;

public partial class AngularApiContext : DbContext
{
    public AngularApiContext()
    {
    }

    public AngularApiContext(DbContextOptions<AngularApiContext> options)
        : base(options)
    {
    }   

    public virtual DbSet<Registration> Registrations { get; set; }
    public virtual DbSet<Product> Products { get; set; }
    //public virtual DbSet<OrderDetails> Orders { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=SUSANTA\\SQLEXPRESS;Initial Catalog=Angular_API;User ID=susantasau;Password=123;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Registration>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Registration_Id");

            entity.ToTable("Registration");

            entity.HasIndex(e => e.Email_Id, "UK_Registration_Email_Id").IsUnique();

            entity.HasIndex(e => e.Mobile_No, "UK_Registration_MobileNo").IsUnique();

            entity.HasIndex(e => e.User_Name, "UK_Registration_User_Name").IsUnique();

            entity.Property(e => e.Dob).HasColumnType("date").HasColumnName("DOB");
            entity.Property(e => e.Email_Id).HasMaxLength(100).IsUnicode(false).HasColumnName("Email_Id");
            entity.Property(e => e.First_Name).HasMaxLength(100).IsUnicode(false).HasColumnName("First_Name");
            entity.Property(e => e.Gender).HasMaxLength(10).IsUnicode(false);
            entity.Property(e => e.Last_Name).HasMaxLength(100).IsUnicode(false).HasColumnName("Last_Name");
            entity.Property(e => e.Mobile_No).HasMaxLength(15).IsUnicode(false).HasColumnName("Mobile_No");
            entity.Property(e => e.Password).HasMaxLength(100).IsUnicode(false);
            entity.Property(e => e.User_Name).HasMaxLength(100).IsUnicode(false).HasColumnName("User_Name");
        });
        //modelBuilder.Entity<Product>(entity =>
        //{
        //    entity.HasKey(e => e.ProdId).HasName("PK_Product_Id");

        //    entity.ToTable("Product");

        //    entity.Property(e => e.ProdName).HasMaxLength(255).IsUnicode(false).HasColumnName("ProdName");
        //    entity.Property(e => e.Quantity).IsUnicode(false);
        //    entity.Property(e => e.Price).IsUnicode(false);
        //});

        OnModelCreatingPartial(modelBuilder);
    }



    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
