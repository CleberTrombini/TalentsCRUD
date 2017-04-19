using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TalentsCRUD.Migrations
{
    public partial class Initial_2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NidelIos",
                table: "Candidato");

            migrationBuilder.CreateTable(
                name: "Vagas",
                columns: table => new
                {
                    VagaId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Descricao = table.Column<string>(maxLength: 65, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vagas", x => x.VagaId);
                });

            migrationBuilder.CreateTable(
                name: "VagaCandidato",
                columns: table => new
                {
                    CandidatoId = table.Column<int>(nullable: false),
                    VagaId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VagaCandidato", x => new { x.CandidatoId, x.VagaId });
                    table.ForeignKey(
                        name: "FK_VagaCandidato_Candidato_CandidatoId",
                        column: x => x.CandidatoId,
                        principalTable: "Candidato",
                        principalColumn: "CanditadoId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VagaCandidato_Vagas_VagaId",
                        column: x => x.VagaId,
                        principalTable: "Vagas",
                        principalColumn: "VagaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.AddColumn<int>(
                name: "NivelIos",
                table: "Candidato",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "Telefone",
                table: "Candidato",
                maxLength: 20,
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "Skype",
                table: "Candidato",
                maxLength: 100,
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "Candidato",
                maxLength: 50,
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "HorarioDisponivel",
                table: "Candidato",
                maxLength: 15,
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "Estado",
                table: "Candidato",
                maxLength: 2,
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Candidato",
                maxLength: 254,
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "Cidade",
                table: "Candidato",
                maxLength: 50,
                nullable: false);

            migrationBuilder.CreateIndex(
                name: "IX_VagaCandidato_CandidatoId",
                table: "VagaCandidato",
                column: "CandidatoId");

            migrationBuilder.CreateIndex(
                name: "IX_VagaCandidato_VagaId",
                table: "VagaCandidato",
                column: "VagaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NivelIos",
                table: "Candidato");

            migrationBuilder.DropTable(
                name: "VagaCandidato");

            migrationBuilder.DropTable(
                name: "Vagas");

            migrationBuilder.AddColumn<int>(
                name: "NidelIos",
                table: "Candidato",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "Telefone",
                table: "Candidato",
                maxLength: 20,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Skype",
                table: "Candidato",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "Candidato",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "HorarioDisponivel",
                table: "Candidato",
                maxLength: 15,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Estado",
                table: "Candidato",
                maxLength: 2,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Candidato",
                maxLength: 254,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Cidade",
                table: "Candidato",
                maxLength: 50,
                nullable: true);
        }
    }
}
