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
    [Cidade] nvarchar(max),
    [ComentarioAdicional] nvarchar(max),
    [ConhecimentoLinguagens] nvarchar(max),
    [ConhecimentoSGC] nvarchar(max),
    [Email] nvarchar(max),
    [Estado] nvarchar(max),
    [HorarioDisponivel] nvarchar(max),
    [HorasDisponivel] int NOT NULL,
    [InformacaoBancaria] nvarchar(max),
    [Linkedin] nvarchar(max),
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
    [PretencaoSalario] decimal(18, 2) NOT NULL,
    [PretencaoSalarioHora] decimal(18, 2) NOT NULL,
    [Skype] nvarchar(max),
    [Telefone] nvarchar(max),
    CONSTRAINT [PK_Candidato] PRIMARY KEY ([CanditadoId])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20170304214703_Inicial', N'1.0.0-rtm-21431');

GO

