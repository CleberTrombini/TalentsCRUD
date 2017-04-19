using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TalentsCRUD.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidato",
                columns: table => new
                {
                    CanditadoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AreaInteresse = table.Column<string>(maxLength: 70, nullable: true),
                    Cidade = table.Column<string>(maxLength: 50, nullable: true),
                    ComentarioAdicional = table.Column<string>(maxLength: 300, nullable: true),
                    ConhecimentoLinguagens = table.Column<string>(maxLength: 200, nullable: true),
                    ConhecimentoSGC = table.Column<string>(maxLength: 200, nullable: true),
                    Email = table.Column<string>(maxLength: 254, nullable: true),
                    Estado = table.Column<string>(maxLength: 2, nullable: true),
                    HorarioDisponivel = table.Column<string>(maxLength: 15, nullable: true),
                    HorasDisponivel = table.Column<int>(nullable: false),
                    InformacaoBancaria = table.Column<string>(maxLength: 200, nullable: true),
                    Linkedin = table.Column<string>(maxLength: 200, nullable: true),
                    NidelIos = table.Column<int>(nullable: false),
                    NivelAndroid = table.Column<int>(nullable: false),
                    NivelAngularJs = table.Column<int>(nullable: false),
                    NivelAspNetMvc = table.Column<int>(nullable: false),
                    NivelBootstrap = table.Column<int>(nullable: false),
                    NivelCSharp = table.Column<int>(nullable: false),
                    NivelIonic = table.Column<int>(nullable: false),
                    NivelJquery = table.Column<int>(nullable: false),
                    NivelPhp = table.Column<int>(nullable: false),
                    NivelWordpress = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(maxLength: 50, nullable: true),
                    Portifolio = table.Column<string>(maxLength: 200, nullable: true),
                    PretencaoSalario = table.Column<decimal>(type: "money", nullable: false),
                    PretencaoSalarioHora = table.Column<decimal>(type: "money", nullable: false),
                    Skype = table.Column<string>(maxLength: 100, nullable: true),
                    Telefone = table.Column<string>(maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidato", x => x.CanditadoId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidato");
        }
    }
}
