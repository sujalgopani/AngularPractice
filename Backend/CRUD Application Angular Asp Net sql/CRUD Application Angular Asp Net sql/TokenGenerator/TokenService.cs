using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CRUD_Application_Angular_Asp_Net_sql.TokenGenerator
{
    public class TokenService
    {
        public string GenerateToken()
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name,"DemoUser")
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Sujal_ExamNest_Project_SuperSecretKey_2026_Developer"));

            var cred = new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256
                );

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddSeconds(10),
                signingCredentials: cred);

            return new JwtSecurityTokenHandler()
                .WriteToken(token);
        }
    }
}
