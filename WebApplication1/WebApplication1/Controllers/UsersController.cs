using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly string _connectionString = "Server=DESKTOP-DC51TB0\\MSSQLSERVER1;Database=registros;User Id=sa;Password=12345;TrustServerCertificate=true;";

        [HttpPost("Registrar")]
        public IActionResult Send([FromBody] Users user)
        {
            if (user == null)
            {
                return BadRequest("Invalid User data");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO Users (username, lastname, correo, telefono, namegerente, correogerente, fechainicio, fechafin, notas) VALUES " +
                    "(@firstName, @lastName, @email, @phone, @nameAgentFCN, @emailAgentFCN, @startDateFCN, @endDateFCN, @textAreaFCN)";
                var rowsAffected = connection.Execute(sql, new { user.firstName, user.lastName, user.email, user.phone, user.nameAgentFCN, user.emailAgentFCN,
                    user.startDateFCN, user.endDateFCN, user.textAreaFCN });

                if (rowsAffected > 0)
                {
                    return Ok("Information sent");
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the user");
                }
            }
        }
    }
}
