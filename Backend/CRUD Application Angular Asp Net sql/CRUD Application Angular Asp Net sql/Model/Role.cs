using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD_Application_Angular_Asp_Net_sql.Model
{
    [Table("RoleTbl")]
    public class Role
    {
        public int Id { get; set; }
        public string? URole{ get; set; }
        public ICollection<LoginsTbl> ?Logins { get; set; }
    }
}
