import db from "./db";
import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuario";
import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsuarioPG implements RepositorioUsuario{
    
    async inserir(usuario: Usuario): Promise<void> {
        await db.query(
        "INSERT INTO usuarios (id, nome, email, senha) VALUES ($1, $2, $3, $4)",
        [usuario.id, usuario.nome, usuario.email, usuario.senha]);
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const resultado = await db.oneOrNone(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        )
        if(!resultado){
            return null;
        }
        return resultado
    }
}