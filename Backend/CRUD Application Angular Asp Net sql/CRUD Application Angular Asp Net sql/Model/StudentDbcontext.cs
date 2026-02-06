using Microsoft.EntityFrameworkCore;

namespace CRUD_Application_Angular_Asp_Net_sql.Model
{
    public class StudentDbcontext : DbContext
    {
        public StudentDbcontext(DbContextOptions options) : base(options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudnetMaster>().HasData(
                new StudnetMaster
                {
                    studentid = 1,
                    studentname = "Test Student",
                    DOB = new DateTime(2000, 1, 1),
                    address = "Test Address",
                    city = "Surat",
                    state = "Gujarat",
                    country = "India",
                    contact = 9999999999,
                    email = "test@student.com",
                    cources = "Angular + ASP.NET",
                    comment = "Default test data"
                });

            // login side
            modelBuilder.Entity<LoginsTbl>()
                .HasOne(l => l.Role)
                .WithMany(r => r.Logins)
                .HasForeignKey(l => l.RoleId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Role>().HasData(
                new Role { Id = 1, URole = "Admin" },
                new Role { Id = 2, URole = "Student" }
              );

            modelBuilder.Entity<LoginsTbl>().HasData(
                    new LoginsTbl { Id=1,Uname = "Sujal", Email = "sujalgopani@gmail.com", Password = "pass123",RoleId=1 },
                    new LoginsTbl { Id=2,Uname = "Admin", Email = "sujalgopani@gmail.com", Password = "pass123",RoleId=2 }
                );
        }
        public DbSet<StudnetMaster> studnets { get; set; }
        public DbSet<Role> urole { get; set; }
        public DbSet<LoginsTbl> userLogin { get; set; }

    }
}

