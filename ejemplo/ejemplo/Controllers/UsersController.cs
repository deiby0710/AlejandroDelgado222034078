using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace ejemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly string _conectionString = "Server=DESKTOP-DC51TB0\\MSSQLSERVER1;Database=dbtest;User id=sa;Password=12345;TrustServerCertificate=true;"; // Cadena de conexion

        public string ConectionString => _conectionString;

        [HttpPost("Registrar")]
        public IActionResult Send([FromBody] Users user)

        {
            if (user == null) 
            {
                return BadRequest("Invalid user data");
            }
            using (var connection = new SqlConnection(ConectionString))
            {
                var sql = "INSERT INTO Users (username, Lastname, correo, telefono, namegerente, correogerente, fechainicio, fechafin, notas) " +
                    "VALUES (@username, @correo, @correo, @telefono, @namegerente, @correogerente, @fechainicio, @fechafin, @notas)";
                var rowsAffected = connection.Execute(sql, new
                {
                    user.username,
                    user.lastname,
                    user.correo,
                    user.telefono,
                    user.namegerente,
                    user.correogerente,
                    user.fechainicio,
                    user.fechafin,
                    user.notas
                });
                if (rowsAffected > 0) { 
                    return Ok("information send.");
                }
                else
                {
                    return Unauthorized("Invalid.");
                }

            }
        }
    }
}
