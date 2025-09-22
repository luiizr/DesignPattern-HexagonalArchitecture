import CasoDeUso from "core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{
    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto = usuario.senha.split('').reverse().join('')
        console.log(`\nSenha 'criptografada': ${senhaCripto}`)

        const repo = new RepositorioUsuarioEmMemoria()
        const usuarioExistente = await repo.buscarPorEmail(usuario.email)
        if (usuarioExistente) {
            throw new Error(`Usuário com email ${usuario.email} já existe.`)
        }
        await repo.inserir({...usuario, senha: senhaCripto})
    }

}