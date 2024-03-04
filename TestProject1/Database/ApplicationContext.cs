using Microsoft.EntityFrameworkCore;
using System;
using TestProject1.Models;

namespace TestProject1.Database
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Data> Data { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
