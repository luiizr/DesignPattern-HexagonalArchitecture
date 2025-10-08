import dotenv from "dotenv";
dotenv.config();
import db from "./external/db/db";

import  express  from "express";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RepositorioUsuarioPG from "./external/db/RepositorioUsuarioPG";
import SenhaCripto from "./external/auth/SenhaCripto";
import RegistrarUsuarioController from "./external/API/RegistrarUsuarioController";

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
        console.log(`📊 Banco: ${process.env.DB_NAME} | Host: ${process.env.DB_HOST}:${process.env.DB_PORT}`);
        connection.done(); // Libera a conexão de volta para o pool
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar ao banco de dados PostgreSQL:");
        console.error(error.message);
        console.error("\n🔍 Verifique se:");
        console.error("  - O PostgreSQL está rodando");
        console.error("  - As credenciais no .env estão corretas");
        console.error("  - O banco de dados existe");
    });


/*
=========================== 
      Rotas Abertas
=========================== 
*/
const repoUsuario = new RepositorioUsuarioPG()
const provCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(repoUsuario, provCripto)

new RegistrarUsuarioController(app, registrarUsuario)

export const somar = (a: number, b: number): number => a + b