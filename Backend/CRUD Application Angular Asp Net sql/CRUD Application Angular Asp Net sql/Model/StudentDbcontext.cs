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
        }
        public DbSet<StudnetMaster> studnets { get; set; }
    }
}

