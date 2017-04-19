using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TalentsCRUD.Migrations
{
    public partial class VagasCandidato2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VagaCandidato_Candidato_CandidatoId",
                table: "VagaCandidato");

            migrationBuilder.DropForeignKey(
                name: "FK_VagaCandidato_Vagas_VagaId",
                table: "VagaCandidato");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VagaCandidato",
                table: "VagaCandidato");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VagasCandidato",
                table: "VagaCandidato",
                columns: new[] { "CandidatoId", "VagaId" });

            migrationBuilder.AddForeignKey(
                name: "FK_VagasCandidato_Candidato_CandidatoId",
                table: "VagaCandidato",
                column: "CandidatoId",
                principalTable: "Candidato",
                principalColumn: "CanditadoId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VagasCandidato_Vagas_VagaId",
                table: "VagaCandidato",
                column: "VagaId",
                principalTable: "Vagas",
                principalColumn: "VagaId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.RenameIndex(
                name: "IX_VagaCandidato_VagaId",
                table: "VagaCandidato",
                newName: "IX_VagasCandidato_VagaId");

            migrationBuilder.RenameIndex(
                name: "IX_VagaCandidato_CandidatoId",
                table: "VagaCandidato",
                newName: "IX_VagasCandidato_CandidatoId");

            migrationBuilder.RenameTable(
                name: "VagaCandidato",
                newName: "VagasCandidato");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VagasCandidato_Candidato_CandidatoId",
                table: "VagasCandidato");

            migrationBuilder.DropForeignKey(
                name: "FK_VagasCandidato_Vagas_VagaId",
                table: "VagasCandidato");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VagasCandidato",
                table: "VagasCandidato");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VagaCandidato",
                table: "VagasCandidato",
                columns: new[] { "CandidatoId", "VagaId" });

            migrationBuilder.AddForeignKey(
                name: "FK_VagaCandidato_Candidato_CandidatoId",
                table: "VagasCandidato",
                column: "CandidatoId",
                principalTable: "Candidato",
                principalColumn: "CanditadoId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VagaCandidato_Vagas_VagaId",
                table: "VagasCandidato",
                column: "VagaId",
                principalTable: "Vagas",
                principalColumn: "VagaId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.RenameIndex(
                name: "IX_VagasCandidato_VagaId",
                table: "VagasCandidato",
                newName: "IX_VagaCandidato_VagaId");

            migrationBuilder.RenameIndex(
                name: "IX_VagasCandidato_CandidatoId",
                table: "VagasCandidato",
                newName: "IX_VagaCandidato_CandidatoId");

            migrationBuilder.RenameTable(
                name: "VagasCandidato",
                newName: "VagaCandidato");
        }
    }
}
