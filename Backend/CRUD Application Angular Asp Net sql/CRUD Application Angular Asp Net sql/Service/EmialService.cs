using CRUD_Application_Angular_Asp_Net_sql.Model;
using MimeKit;
using MailKit.Net.Smtp;


namespace CRUD_Application_Angular_Asp_Net_sql.Service
{
    public class EmialService
    {
        private readonly IConfiguration _config;
        public EmialService(IConfiguration config) {
            _config = config;
        }

        public async Task SendEmailAsync(EmailModel Em)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config["EmailSettings:Email"]));
            email.To.Add(MailboxAddress.Parse(Em.To));
            email.Subject = Em.Subject;
            email.Body = new TextPart("plain")
            {
                Text = Em.Body
            };

            using var smtp = new SmtpClient();

            await smtp.ConnectAsync(
           _config["EmailSettings:Host"],
           int.Parse(_config["EmailSettings:Port"]!),
           MailKit.Security.SecureSocketOptions.StartTls
            );

            await smtp.AuthenticateAsync(
                _config["EmailSettings:Email"],
                _config["EmailSettings:Password"]
            );

            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}
