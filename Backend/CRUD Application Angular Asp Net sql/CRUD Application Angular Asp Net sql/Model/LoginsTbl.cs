using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD_Application_Angular_Asp_Net_sql.Model
{
    [Table("Logins")]
    public class LoginsTbl
    {
        [Key]
        public int Id { get; set; }
        public string? Uname { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }

        [ForeignKey("Role")]
        public int RoleId { get; set; }
        public Role ?Role { get; set; }
    
    }
}
