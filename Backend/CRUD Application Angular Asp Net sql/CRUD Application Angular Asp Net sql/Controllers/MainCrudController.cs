using CRUD_Application_Angular_Asp_Net_sql.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_Application_Angular_Asp_Net_sql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainCrudController : ControllerBase
    {
        private readonly StudentDbcontext _context;

        public MainCrudController(StudentDbcontext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllStudent()
        {
            var students = _context.studnets.ToList();
            return Ok(students);
        }

        [HttpPost]
        public IActionResult AddStudent(StudnetMaster sm)
        {
            _context.studnets.Add(sm);
            _context.SaveChanges();
            return Ok();
        }



        [HttpPut("{id}")]
        public IActionResult UpdateStudent(int id, [FromBody] StudnetMaster sm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentrecord = _context.studnets
                .FirstOrDefault(x => x.studentid == id);

            if (studentrecord == null)
            {
                return NotFound(new
                {
                    Status = "Error",
                    Message = "Student Record Not Found"
                });
            }

            // 🔥 Update fields (DO NOT update studentid)
            studentrecord.studentname = sm.studentname;
            studentrecord.DOB = sm.DOB;
            studentrecord.email = sm.email;
            studentrecord.address = sm.address;
            studentrecord.city = sm.city;
            studentrecord.state = sm.state;
            studentrecord.country = sm.country;
            studentrecord.contact = sm.contact;
            studentrecord.cources = sm.cources;
            studentrecord.comment = sm.comment;

            _context.SaveChanges();

            return Ok(new
            {
                Status = "Success",
                Message = "Student updated successfully"
            });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var studentDetect = _context.studnets.FirstOrDefault(x => x.studentid == id);

            if (studentDetect == null)
            {
                return NotFound(new
                {
                    Status = "Delete Error",
                    Message = "Student Id Not Found !"
                });
            }
            else
            {

                _context.studnets.Remove(studentDetect!);
                _context.SaveChanges();

                return Ok(new
                {
                    Status = "Delete Success",
                    Message = "Student Delete SuccessFully !"
                });
            }
        }
    }
}
