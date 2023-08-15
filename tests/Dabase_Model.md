# Modelo de Banco de Dados para Mini-Netflix

## Modelo Conceitual (ER)

### Entidades:

1. **Usuario**

   - ID (chave primária)
   - Nome
   - Email
   - Senha (armazenar de forma hash)

2. **Conteudo**

   - ID (chave primária)
   - Nome
   - Descricao
   - Ano
   - Tipo (Filme ou Série)

3. **Serie** (sub-entidade de Conteudo)

   - ID (chave primária e estrangeira)
   - NumeroTemporadas
   - NumeroEpisodios

4. **Comentario**

   - ID (chave primária)
   - Texto
   - DataComentario
   - ID_Usuario (chave estrangeira)
   - ID_Conteudo (chave estrangeira)

5. **Classificacao**

   - ID_Usuario (chave estrangeira)
   - ID_Conteudo (chave estrangeira)
   - Nota

6. **Favorito**
   - ID_Usuario (chave estrangeira)
   - ID_Conteudo (chave estrangeira)

### Relacionamentos:

1. Um **Usuario** pode fazer muitos **Comentarios** em diversos **Conteudos**.
2. Um **Usuario** pode **Classificar** diversos **Conteudos**.
3. Um **Usuario** pode ter diversos **Conteudos** como **Favoritos**.

## Modelo Lógico

### Tabelas:

1. **Usuario**

   - ID: INT (PK)
   - Nome: VARCHAR
   - Email: VARCHAR
   - Senha: VARCHAR (hash)

2. **Conteudo**

   - ID: INT (PK)
   - Nome: VARCHAR
   - Descricao: TEXT
   - Ano: INT
   - Tipo: ENUM ('Filme', 'Série')

3. **Serie**

   - ID: INT (PK, FK para Conteudo)
   - NumeroTemporadas: INT
   - NumeroEpisodios: INT

4. **Comentario**

   - ID: INT (PK)
   - Texto: TEXT
   - DataComentario: DATE
   - ID_Usuario: INT (FK para Usuario)
   - ID_Conteudo: INT (FK para Conteudo)

5. **Classificacao**

   - ID_Usuario: INT (FK para Usuario)
   - ID_Conteudo: INT (FK para Conteudo)
   - Nota: INT

6. **Favorito**
   - ID_Usuario: INT (FK para Usuario)
   - ID_Conteudo: INT (FK para Conteudo)

---

Recomendações:

- Usar índices nas chaves estrangeiras e outras colunas frequentemente usadas em queries.
- Sempre revisar e ajustar o modelo conforme as necessidades do projeto.
