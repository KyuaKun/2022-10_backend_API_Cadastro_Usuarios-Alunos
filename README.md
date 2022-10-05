# API de Usuários e Alunos

Projeto de CRUD orientado ao objeto de Usuários ( normal e administrador ) e alunos de uma faculdade fictícia.

## Comandos

```
yarn - para instalar as dependências.
yarn dev - para rodar.
```

<summary>✔️ Funcionalidades:</summary>
    <details>
        <p align="justify">
            1: CRUD completo.<br>
            2: Validação de E-mail.<br>
            3: Validações de senha. <br>
            4: Exceptions Personalizadas.<br>
            5: TOKENS de Autenticação. <br>
            6: Validação de roles. <br>
            7: Migrations para criação de tables. <br>
            8: Seeds para inserção de entidades. <br>
            9: Middlewares. <br>
         </p>
    </details>

<br>

   <details>
  <summary>👨‍💼 Regras de negocio:</summary>
      <p align="justify">
      1: O usuario com acesso de administrador pode inserir, recuperar dados de todas as páginas. <br>
      2: Não é possível criar usuários administradores pelas rotas, somente usando "seeds". <br>
      2: Somente um administrador pode cadastrar um novo usuário.<br>
      3: Usuários padrões podem fazer requisições de busca de todos os alunos. <br>
      4: Atualizações e deleções são pelo próprio usuário e/ou aluno.<br>
      5: Alunos podem cadastrar uma imagem/avatar. <br>
      6: Geração de email e matrícula automatizados e padronizados para alunos. <br>
  </details>

  <br>

## Tecnologia Utilizada

- [**MySQL**]
- [**Postman**]
- [**MySQL Workbench**]
- [**Sequelize**]
- [**Sequelize-cli**]
- [**Express**]
- [**Multer**]
- [**UUIDV4**]

<br>

## Desenvolvedor:

<table>
    <tr>
        <td align="center"><a href="https://github.com/KyuaKun"><img src="https://i.imgur.com/5vCpoRY.jpg" width="100px;" alt=""/><br /><sub><b>Vinícius Soares</b></sub></a><br />
        <sub>
            <a href="https://www.linkedin.com/in/vin%C3%ADcius-soares-43238b144/">--> Linkedin <--</a> 
        </sub>
    </tr>
</table>





