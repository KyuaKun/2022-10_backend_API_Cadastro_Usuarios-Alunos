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

## Autenficação:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Realizar login através do endpoint /auth </a>, será gerado um TOKEN de 72 horas**  

 <div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/87536346/194180614-d955387f-6098-49b8-af14-bab2b1eaac1a.gif">
</div>

<br>

## Cadastrando Usuário comum:

<div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/87536346/194191594-70c52003-a44b-44d1-b87d-b5c3d5152561.gif">
</div>

<br>

## Cadastrando Aluno:

 <div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/87536346/194189495-49b13640-b38f-4de9-af59-a188d39d9f61.gif">
</div>


## Desenvolvedor:

<table>
    <tr>
        <td align="center"><a href="https://github.com/KyuaKun"><img src="https://i.imgur.com/5vCpoRY.jpg" width="100px;" alt=""/><br /><sub><b>Vinícius Soares</b></sub></a><br />
        <sub>
            <a href="https://www.linkedin.com/in/vin%C3%ADcius-soares-43238b144/">--> Linkedin <--</a> 
        </sub>
    </tr>
</table>





