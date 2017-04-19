IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Candidato] (
    [CanditadoId] int NOT NULL IDENTITY,
    [AreaInteresse] nvarchar(max),
    [Cidade] nvarchar(50),
    [ComentarioAdicional] nvarchar(max),
    [ConhecimentoLinguagens] nvarchar(max),
    [ConhecimentoSGC] nvarchar(max),
    [Email] nvarchar(254),
    [Estado] nvarchar(2),
    [HorarioDisponivel] nvarchar(max),
    [HorasDisponivel] int NOT NULL,
    [InformacaoBancaria] nvarchar(max),
    [Linkedin] nvarchar(200),
    [NidelIos] int NOT NULL,
    [NivelAndroid] int NOT NULL,
    [NivelAngularJs] int NOT NULL,
    [NivelAspNetMvc] int NOT NULL,
    [NivelBootstrap] int NOT NULL,
    [NivelCSharp] int NOT NULL,
    [NivelIonic] int NOT NULL,
    [NivelJquery] int NOT NULL,
    [NivelPhp] int NOT NULL,
    [NivelWordpress] int NOT NULL,
    [Nome] nvarchar(50),
    [Portifolio] nvarchar(max),
    [PretencaoSalario] money NOT NULL,
    [PretencaoSalarioHora] decimal(18, 2) NOT NULL,
    [Skype] nvarchar(100),
    [Telefone] nvarchar(20),
    CONSTRAINT [PK_Candidato] PRIMARY KEY ([CanditadoId])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20170304215542_Inicial', N'1.0.0-rtm-21431');

GO

