using CRUD_Application_Angular_Asp_Net_sql.Model;
using CRUD_Application_Angular_Asp_Net_sql.Service;
using Microsoft.EntityFrameworkCore;

// JWT Namespace
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using CRUD_Application_Angular_Asp_Net_sql.TokenGenerator;


var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();
builder.Services.AddScoped<EmialService>();
builder.Services.AddScoped<TokenService>();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DbContext
builder.Services.AddDbContext<StudentDbcontext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("StudentMasterConnectedWith"))
);

// JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateAudience = false,
        ValidateIssuer = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes("SUPER_SECRET_KEY_12345"))
    };
});


// cors
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy",builder =>
    {
        builder.AllowAnyHeader().AllowCredentials().AllowAnyMethod().WithOrigins("http://localhost:4200", "http://localhost:4200");
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");
app.UseHttpsRedirection();
// For Enable JWT 
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
