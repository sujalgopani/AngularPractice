using CRUD_Application_Angular_Asp_Net_sql.DTO;
using CRUD_Application_Angular_Asp_Net_sql.Model;
using CRUD_Application_Angular_Asp_Net_sql.Service;
using CRUD_Application_Angular_Asp_Net_sql.TokenGenerator;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Eventing.Reader;
using System.Threading.Tasks;

namespace CRUD_Application_Angular_Asp_Net_sql.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class MainCrudController : ControllerBase
    {
        private readonly StudentDbcontext _context;
        private readonly EmialService _Emailservice;
        private readonly TokenService _tokenService;


        public MainCrudController(StudentDbcontext context, EmialService Emailservice, TokenService tokenService)
        {
            _context = context;
            _Emailservice = Emailservice;
            _tokenService = tokenService;
        }

        [HttpGet]
        public IActionResult GetAllStudent()
        {
            var students = _context.studnets.ToList();
            return Ok(students);
        }

        [HttpGet]
        public IActionResult GetById(int id) {
            var Find = _context.studnets.FirstOrDefault(x => x.studentid == id);
            return Ok(Find);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent(StudnetMaster sm)
        {
            _context.studnets.Add(sm!);
            await _context.SaveChangesAsync();

            var emailobj = new EmailModel
            {
                To = sm.email,
                Subject = "Student Registration Confermation Mail !",
                Body = $"Hello {sm.studentname} \n," +
                $"Your Registration Is Done From Our Team Side,\n" +
                $"So Check Your Data If Any Trouble Then Contact Now Help-Number : 84017XXXXX,\n" +
                $"Your Id : {sm.studentid}\n" +
                $"Your Full Name : {sm.studentname}\n" +
                $"Your BirthDate : {sm.DOB}\n" +
                $"Your Address : {sm.address}\n" +
                $"Your City: {sm.city}\n" +
                $"Your State : {sm.state}\n" +
                $"Your Country : {sm.country}\n" +
                $"Your Email : {sm.email}\n" +
                $"Your SelectedCource: {sm.cources}\n"
            };
            await _Emailservice.SendEmailAsync(emailobj);
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


        // sending email
        [HttpPost("Send")]
        public async Task<IActionResult> SendEmail(EmailModel Em)
        {
            await _Emailservice.SendEmailAsync(Em);
            return Ok("Mail Send SuccesFully..");
        }


        // login side for the role base
        [HttpPost("Login")]
        public async Task<IActionResult> LoginAndroleCheck([FromBody] LoginDTO Ld)
        {
            var user =await _context.userLogin.Include(i => i.Role).FirstOrDefaultAsync(r => r.Uname == Ld.Uname);

            if (user == null || !BCrypt.Net.BCrypt.Verify(Ld.Password,user.Password)) {
                return BadRequest("Login Fail !");
            }
                return Ok(new
                {
                    Message = "Login Suucessfully !",
                    Username = user.Uname,
                    Role = user.Role!.URole,
                    RoleId = user.Role.Id,
                    Token = _tokenService.GenerateToken()
                });
        }

        [HttpPost("Register")]
        public async Task<IActionResult> UserRegister(LoginsTbl lt)
        {
            if (lt == null) return BadRequest("Register Not Possible !");

            var IsAlready = await _context.userLogin.AnyAsync(x => x.Uname == lt.Uname);
            if (IsAlready)
            {
                return BadRequest(new { message = "User already registered!" });
            }

            lt.Password = BCrypt.Net.BCrypt.HashPassword(lt.Password);
            await _context.userLogin.AddAsync(lt);
            await _context.SaveChangesAsync();
            return Ok(new { 
                RegisterMsg="Register SuccessFully Done !"
            });
        }

        // JWT TOken Generater
        [HttpGet("GetToken")]
        public async Task<IActionResult> Gettoken([FromServices] TokenService ts)
        {
            var token = _tokenService.GenerateToken();
            return Ok(new
            {
                Message= "Token Generate SuccesFully !",
                token = token
            });
        }
    }
}
