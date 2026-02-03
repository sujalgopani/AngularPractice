using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD_Application_Angular_Asp_Net_sql.Model
{
    [Table("StudentMaster")]
    public class StudnetMaster
    {
        [Key]
        public int studentid { get; set; }

        [Required,StringLength(50,MinimumLength =2,ErrorMessage = "Name must be 2 to 50 characters")]
        public string studentname { get; set; } =  "Unknown";


        [Required(ErrorMessage = "Date of Birth is required")]
        [DataType(DataType.Date)]
        public DateTime DOB { get; set; }


        [Required(ErrorMessage = "Address is required")]
        [StringLength(200)]
        public string address { get; set; } = "Not Provided";

        [Required(ErrorMessage = "City is required")]
        [StringLength(50)]
        public string city { get; set; } = "NA";

        [Required(ErrorMessage = "State is required")]
        [StringLength(50)]
        public string state { get; set; } = "NA";

        [Required(ErrorMessage = "Country is required")]
        [StringLength(50)]
        public string country { get; set; } = "NA";

        [Required(ErrorMessage = "Contact number is required")]
        public long contact { get; set; } = 0000000000;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string email { get; set; } = "noemail@gmail.com";

        [Required(ErrorMessage = "Course is required")]
        public string cources { get; set; } = "NA";

        [StringLength(300, ErrorMessage = "Comment can be max 300 characters")]
        public string comment { get; set; } = "No Comment";



    }
}
