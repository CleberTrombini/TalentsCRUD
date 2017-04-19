using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using TalentsCRUD.Data.DataContext;

namespace TalentsCRUD.Migrations
{
    [DbContext(typeof(AppDataContext))]
    partial class AppDataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TalentsCRUD.Models.Candidato", b =>
                {
                    b.Property<int>("CanditadoId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AreaInteresse")
                        .HasMaxLength(70);

                    b.Property<string>("Cidade")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("ComentarioAdicional")
                        .HasMaxLength(300);

                    b.Property<string>("ConhecimentoLinguagens")
                        .HasMaxLength(200);

                    b.Property<string>("ConhecimentoSGC")
                        .HasMaxLength(200);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(254);

                    b.Property<string>("Estado")
                        .IsRequired()
                        .HasMaxLength(2);

                    b.Property<string>("HorarioDisponivel")
                        .IsRequired()
                        .HasMaxLength(15);

                    b.Property<int>("HorasDisponivel");

                    b.Property<string>("InformacaoBancaria")
                        .HasMaxLength(200);

                    b.Property<string>("Linkedin")
                        .HasMaxLength(200);

                    b.Property<int>("NivelAndroid");

                    b.Property<int>("NivelAngularJs");

                    b.Property<int>("NivelAspNetMvc");

                    b.Property<int>("NivelBootstrap");

                    b.Property<int>("NivelCSharp");

                    b.Property<int>("NivelIonic");

                    b.Property<int>("NivelIos");

                    b.Property<int>("NivelJquery");

                    b.Property<int>("NivelPhp");

                    b.Property<int>("NivelWordpress");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Portifolio")
                        .HasMaxLength(200);

                    b.Property<decimal>("PretencaoSalario")
                        .HasColumnType("money");

                    b.Property<decimal>("PretencaoSalarioHora")
                        .HasColumnType("money");

                    b.Property<string>("Skype")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasMaxLength(20);

                    b.HasKey("CanditadoId");

                    b.ToTable("Candidato");
                });

            modelBuilder.Entity("TalentsCRUD.Models.Vaga", b =>
                {
                    b.Property<int>("VagaId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(65);

                    b.HasKey("VagaId");

                    b.ToTable("Vagas");
                });

            modelBuilder.Entity("TalentsCRUD.Models.VagaCandidato", b =>
                {
                    b.Property<int>("CandidatoId");

                    b.Property<int>("VagaId");

                    b.HasKey("CandidatoId", "VagaId");

                    b.HasIndex("CandidatoId");

                    b.HasIndex("VagaId");

                    b.ToTable("VagasCandidato");
                });

            modelBuilder.Entity("TalentsCRUD.Models.VagaCandidato", b =>
                {
                    b.HasOne("TalentsCRUD.Models.Candidato", "Candidatos")
                        .WithMany("VagasCandidato")
                        .HasForeignKey("CandidatoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TalentsCRUD.Models.Vaga", "Vagas")
                        .WithMany("VagasCandidato")
                        .HasForeignKey("VagaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
