import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";
import Erros from "@/core/shared/Erros";
import ProvedorCriptografia from "./ProvedorCriptografia";

export type LoginArgs = {
    email: string,
    senha: string
}

export type saidaLoginJWT = {
    usuario: Usuario,
    token: string
}

export default class LoginUsuario implements CasoDeUso<LoginArgs, saidaLoginJWT> {
    
    constructor(
        private readonly repo: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ){}

    async executar(entrada: LoginArgs): Promise<saidaLoginJWT> {
        const usuarioExistente = await this.repo.buscarPorEmail(entrada.email)
        if(!usuarioExistente) {
            throw new Error(Erros.UsuarioJaExiste)
        }
        const mesmaSenha = await this.provedorCripto.comparar(entrada.senha, usuarioExistente.senha!)
        if(!mesmaSenha) {
            throw new Error(Erros.senhaErrada)
        }
        return {
            usuario: {...usuarioExistente, senha: undefined},
            token: ''
        }
    }

}