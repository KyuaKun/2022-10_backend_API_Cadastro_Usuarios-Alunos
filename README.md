# API de Usuários e Alunos

Projeto de CRUD orientado ao objeto Cadastro de usuários ( comum e administrador ) e alunos de uma faculdade fictícia.

<br>

## Comandos

```
yarn - para instalar as dependências.
yarn dev - para rodar.
```

<br>

<summary>✔️ Funcionalidades:</summary>
    <details>
        <p align="justify">
            1: CRUD completo.<br>
            2: Validação de e-mail.<br>
            3: Validações de senha. <br>
            4: Exceptions Personalizadas.<br>
            5: TOKENS de Autenticação. <br>
            6: Validação de roles. <br>
            7: Migrations para criação de tables. <br>
            8: Seeds para inserção de entidades. <br>
            9: Middlewares: usuário adm && usuário comum. <br>
         </p>
    </details>

<br>

   
  <summary>👨‍💼 Regras de negocio:</summary>
  <details>
      <p align="justify">
      1: O usuario com acesso de administrador pode inserir e recuperar dados de todas as páginas. <br>
      2: Não é possível criar usuários administradores pelas rotas, somente usando "seeds". <br>
      2: Somente um administrador pode cadastrar um novo usuário.<br>
      3: Usuários administradores e comuns podem fazer todas requisições em entidades aluno. <br>
      4: Alunos podem cadastrar uma imagem/avatar em seu perfil. <br>
      5: Geração de email e matrícula automatizados e padronizados( matrícula: AAAAPUUCCCSSS-V | e-mail: ...@duoimpar.com ) para alunos. <br>
  </details>

  <br>

<sumary>⚙ Tecnologias utilizadas </sumary>

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
**Realizar login através do endpoint /auth </a>, será gerado um TOKEN de 72 horas**  

<p><b><i> (contém algumas demonstrações de exceptions) </i></b></p>

 <div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/87536346/194180614-d955387f-6098-49b8-af14-bab2b1eaac1a.gif">
</div>

<br>

## Cadastrando Usuário comum:
<p><b><i> (contém algumas demonstrações de exceptions) </i></b></p>

<div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/87536346/194191594-70c52003-a44b-44d1-b87d-b5c3d5152561.gif">
</div>

<br>

#### Outras exceptions

status 401: Unauthorized
<p> Acontece quando o usuário logado como usuário comum e tenta cadastrar outro usuário </p>

```
{
    "response": "Usuário sem autorização"
}
```

status 400: Bad request
<p> Acontece quando há tentativa de cirar um usuário administrador pela rota post http://localhost:6558/users <p>

```
{
    "error": "Está rota não tem permissão para criar usuários administradores."
}
```

<br>

## Cadastrando Aluno:
<p><b><i> (contém algumas demonstrações de exceptions) </i></b></p>

 <div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/87536346/194189495-49b13640-b38f-4de9-af59-a188d39d9f61.gif">
</div>

### **Apesar dos dados do aluno coincidir com a de um aluno já cadastrado, o email e a matrícula, gerados automaticamente, nunca se repetirão.**

<br>

## Vinculando foto a um aluno: 

<div align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/87536346/194194390-b112e405-8b02-4e04-909f-171bf256ba0a.gif">
</div>

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
