using Microsoft.EntityFrameworkCore;
using TalentsCRUD.Models;

namespace TalentsCRUD.Data.DataContext
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options)
            : base(options)
        {
        }

        public DbSet<Candidato> Candidatos { get; set; }
        public DbSet<Vaga> Vagas { get; set; }
        public DbSet<VagaCandidato> VagasCandidato { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region [Candidato Mapping]

            modelBuilder.Entity<VagaCandidato>(entity => {
                entity.ToTable("VagasCandidato");

                entity.HasKey(e => new { e.CandidatoId, e.VagaId });

                entity.HasOne(o => o.Vagas)
                      .WithMany(m => m.VagasCandidato)
                      .HasForeignKey(o => o.VagaId);

                entity.HasOne(o => o.Candidatos)
                      .WithMany(m => m.VagasCandidato)
                      .HasForeignKey(o => o.CandidatoId);
            });

            modelBuilder.Entity<Vaga>(entity => {
                entity.ToTable("Vagas");

                entity.HasKey(e => e.VagaId);

                entity.Property(e => e.Descricao).HasMaxLength(65).IsRequired();
            });

            modelBuilder.Entity<Candidato>(entity =>
            {
                entity.ToTable("Candidato");

                entity.HasKey(e => e.CanditadoId);

                entity.Property(e => e.Nome).HasMaxLength(50).IsRequired();

                entity.Property(e => e.Skype).HasMaxLength(100).IsRequired();

                entity.Property(e => e.Telefone).HasMaxLength(20).IsRequired();

                entity.Property(e => e.Email).HasMaxLength(254).IsRequired();

                entity.Property(e => e.Linkedin).HasMaxLength(200);

                entity.Property(e => e.Cidade).HasMaxLength(50).IsRequired();

                entity.Property(e => e.Estado).HasMaxLength(2).IsRequired();

                entity.Property(e => e.PretencaoSalario).HasColumnType<decimal>("money");

                entity.Property(e => e.PretencaoSalarioHora).HasColumnType<decimal>("money");

                entity.Property(e => e.Portifolio).HasMaxLength(200);

                entity.Property(e => e.ConhecimentoLinguagens).HasMaxLength(200);

                entity.Property(e => e.ConhecimentoSGC).HasMaxLength(200);

                entity.Property(e => e.AreaInteresse).HasMaxLength(70);

                entity.Property(e => e.HorarioDisponivel).HasMaxLength(15).IsRequired();

                entity.Property(e => e.InformacaoBancaria).HasMaxLength(200);

                entity.Property(e => e.ComentarioAdicional).HasMaxLength(300);

            });
            #endregion
        }
    }
}
