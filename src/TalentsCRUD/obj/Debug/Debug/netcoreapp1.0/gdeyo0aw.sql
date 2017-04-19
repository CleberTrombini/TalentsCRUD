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
    [AreaInteresse] nvarchar(70),
    [Cidade] nvarchar(50),
    [ComentarioAdicional] nvarchar(300),
    [ConhecimentoLinguagens] nvarchar(200),
    [ConhecimentoSGC] nvarchar(200),
    [Email] nvarchar(254),
    [Estado] nvarchar(2),
    [HorarioDisponivel] nvarchar(15),
    [HorasDisponivel] int NOT NULL,
    [InformacaoBancaria] nvarchar(200),
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
    [Portifolio] nvarchar(200),
    [PretencaoSalario] money NOT NULL,
    [PretencaoSalarioHora] money NOT NULL,
    [Skype] nvarchar(100),
    [Telefone] nvarchar(20),
    CONSTRAINT [PK_Candidato] PRIMARY KEY ([CanditadoId])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20170305003226_Inicial', N'1.0.1');

GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'NidelIos');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var0 + ']');
ALTER TABLE [Candidato] DROP COLUMN [NidelIos];

GO

CREATE TABLE [Vagas] (
    [VagaId] int NOT NULL IDENTITY,
    [Descricao] nvarchar(65) NOT NULL,
    CONSTRAINT [PK_Vagas] PRIMARY KEY ([VagaId])
);

GO

CREATE TABLE [VagaCandidato] (
    [CandidatoId] int NOT NULL,
    [VagaId] int NOT NULL,
    CONSTRAINT [PK_VagaCandidato] PRIMARY KEY ([CandidatoId], [VagaId]),
    CONSTRAINT [FK_VagaCandidato_Candidato_CandidatoId] FOREIGN KEY ([CandidatoId]) REFERENCES [Candidato] ([CanditadoId]) ON DELETE CASCADE,
    CONSTRAINT [FK_VagaCandidato_Vagas_VagaId] FOREIGN KEY ([VagaId]) REFERENCES [Vagas] ([VagaId]) ON DELETE CASCADE
);

GO

ALTER TABLE [Candidato] ADD [NivelIos] int NOT NULL DEFAULT 0;

GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'Telefone');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var1 + ']');
ALTER TABLE [Candidato] ALTER COLUMN [Telefone] nvarchar(20) NOT NULL;

GO

DECLARE @var2 sysname;
SELECT @var2 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'Skype');
IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var2 + ']');
ALTER TABLE [Candidato] ALTER COLUMN [Skype] nvarchar(100) NOT NULL;

GO

DECLARE @var3 sysname;
SELECT @var3 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'Nome');
IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var3 + ']');
ALTER TABLE [Candidato] ALTER COLUMN [Nome] nvarchar(50) NOT NULL;

GO

DECLARE @var4 sysname;
SELECT @var4 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'HorarioDisponivel');
IF @var4 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var4 + ']');
ALTER TABLE [Candidato] ALTER COLUMN [HorarioDisponivel] nvarchar(15) NOT NULL;

GO

DECLARE @var5 sysname;
SELECT @var5 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'Estado');
IF @var5 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var5 + ']');
ALTER TABLE [Candidato] ALTER COLUMN [Estado] nvarchar(2) NOT NULL;

GO

DECLARE @var6 sysname;
SELECT @var6 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'Email');
IF @var6 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var6 + ']');
ALTER TABLE [Candidato] ALTER COLUMN [Email] nvarchar(254) NOT NULL;

GO

DECLARE @var7 sysname;
SELECT @var7 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'Candidato') AND [c].[name] = N'Cidade');
IF @var7 IS NOT NULL EXEC(N'ALTER TABLE [Candidato] DROP CONSTRAINT [' + @var7 + ']');
ALTER TABLE [Candidato] ALTER COLUMN [Cidade] nvarchar(50) NOT NULL;

GO

CREATE INDEX [IX_VagaCandidato_CandidatoId] ON [VagaCandidato] ([CandidatoId]);

GO

CREATE INDEX [IX_VagaCandidato_VagaId] ON [VagaCandidato] ([VagaId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20170317213737_Initial_2', N'1.0.1');

GO

