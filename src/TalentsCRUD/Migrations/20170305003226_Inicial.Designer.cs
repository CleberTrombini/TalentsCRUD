using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using TalentsCRUD.Data.DataContext;

namespace TalentsCRUD.Migrations
{
    [DbContext(typeof(AppDataContext))]
    [Migration("20170305003226_Inicial")]
    partial class Inicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TalentsCRUD.Models.Candidato", b =>
                {
                    b.Property<int>("CanditadoId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AreaInteresse")
                        .HasAnnotation("MaxLength", 70);

                    b.Property<string>("Cidade")
                        .HasAnnotation("MaxLength", 50);

                    b.Property<string>("ComentarioAdicional")
                        .HasAnnotation("MaxLength", 300);

                    b.Property<string>("ConhecimentoLinguagens")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("ConhecimentoSGC")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("Email")
                        .HasAnnotation("MaxLength", 254);

                    b.Property<string>("Estado")
                        .HasAnnotation("MaxLength", 2);

                    b.Property<string>("HorarioDisponivel")
                        .HasAnnotation("MaxLength", 15);

                    b.Property<int>("HorasDisponivel");

                    b.Property<string>("InformacaoBancaria")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("Linkedin")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<int>("NidelIos");

                    b.Property<int>("NivelAndroid");

                    b.Property<int>("NivelAngularJs");

                    b.Property<int>("NivelAspNetMvc");

                    b.Property<int>("NivelBootstrap");

                    b.Property<int>("NivelCSharp");

                    b.Property<int>("NivelIonic");

                    b.Property<int>("NivelJquery");

                    b.Property<int>("NivelPhp");

                    b.Property<int>("NivelWordpress");

                    b.Property<string>("Nome")
                        .HasAnnotation("MaxLength", 50);

                    b.Property<string>("Portifolio")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<decimal>("PretencaoSalario")
                        .HasColumnType("money");

                    b.Property<decimal>("PretencaoSalarioHora")
                        .HasColumnType("money");

                    b.Property<string>("Skype")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<string>("Telefone")
                        .HasAnnotation("MaxLength", 20);

                    b.HasKey("CanditadoId");

                    b.ToTable("Candidato");
                });
        }
    }
}
