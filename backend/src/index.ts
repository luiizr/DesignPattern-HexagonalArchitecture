import dotenv from "dotenv";
dotenv.config();
import db from "./external/db/db";

import  express  from "express";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RepositorioUsuarioPG from "./external/db/RepositorioUsuarioPG";
import SenhaCripto from "./external/auth/SenhaCripto";
import RegistrarUsuarioController from "./external/API/RegistrarUsuarioController";
import LoginUsuarioController from "./external/API/LoginUsuarioController";
import LoginUsuario from "./core/usuario/service/LoginUsuario";
import ObterProdutoPorId from "./core/produto/service/obterProtudoPorId";
import ObterProdutoPorIdController from "./external/API/ObterProdutoPorIdController";
import UsuarioMiddleware from "./external/API/UsuarioMiddleware";

const app = express();
const porta = process.env.API_PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(porta, () => {
  console.log(`🔥Servidor rodando na porta ${porta} \n 🔥http://localhost:${porta}`);
});
// Testar conexão com o banco de dados
db.connect()
    .then((connection) => {
        console.log("✅ Conectado ao banco de dados PostgreSQL com sucesso!");
        console.log(`📊 Banco: ${process.env.DB_NAME} | Host: ${process.env.DB_HOST}:${process.env.DB_PORT} \n`);
        connection.done(); // Libera a conexão de volta para o pool
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar ao banco de dados PostgreSQL:");
        console.error(error.message);
        console.error("\n🔍 Verifique se:");
        console.error("  - O PostgreSQL está rodando");
        console.error("  - As credenciais no .env estão corretas");
        console.error("  - O banco de dados existe");
        console.error(" === Após aplicar as modificações, reinicie o projeto! === ");
    });




/*
=========================== 
       Adaptadores
=========================== 
*/
// Instanciando os adaptadores de RegistrarUsuárioController(Servidor e caso de uso), o caso de uso pede um repositório e um provedor de criptografia
const repoUsuario = new RepositorioUsuarioPG()
const provCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(repoUsuario, provCripto)

const loginUsuario = new LoginUsuario(repoUsuario, provCripto)



/*
============================ 
       Rotas Abertas
============================
*/
// A função (rota) de registrar usuário é uma interface Controller que pede obrigatoriamente um adaptador de serviços, nesse caso, o app (um serviço de servidor Express) e o registrarUsuario (um serviço de caso de uso do core)
new RegistrarUsuarioController(app, registrarUsuario)

// A função (rota) de logar usuário é uma interface Controller que pede obrigatoriamente um adaptador de serviços, nesse caso, o app (um serviço de servidor Express) e o loginUsuario (um serviço de caso de uso do core)
new LoginUsuarioController(app, loginUsuario)



/*
============================ 
       Rotas Protegidas
============================
*/
const usuarioMid = UsuarioMiddleware(repoUsuario)

const obterProdutoPorId = new ObterProdutoPorId()
new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMid)