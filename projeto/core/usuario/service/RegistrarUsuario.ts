import CasoDeUso from "core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import Erros from "core/shared/Erros";
import Id from "core/shared/Id";
import ProvedorCriptografia from "./ProvedorCriptografia";
import RepositorioUsuario from "./RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>{
    constructor(
        private repoUsuario: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ){}
    
    async executar(usuario: Usuario): Promise<void> {


        const senhaCripto = this.provedorCripto.criptografar(usuario.senha)

        const usuarioExistente = await this.repoUsuario.buscarPorEmail(usuario.email)
        if (usuarioExistente) {
            throw new Error(Erros.USUARIO_JA_EXISTE)
        }

        const novoUsuario: Usuario = {
            id: Id.gerarIdHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto 
        }  

        await this.repoUsuario.inserir({...novoUsuario, senha: senhaCripto})
        console.log(`${JSON.stringify(novoUsuario)}`)
    }

}