import RepositorioUsuario from "core/usuario/service/RepositorioUsuario";
import Usuario from "../../usuario/model/Usuario";

export default class RepositorioUsuarioEmMemoria implements RepositorioUsuario{
    private static readonly items: Usuario[] = []
    
    async inserir(usuario: Usuario): Promise<void> {
        RepositorioUsuarioEmMemoria.items
        const usuarioExistente = await this.buscarPorEmail(usuario.email)
        if (usuarioExistente) {
            throw new Error(`Usuário com email ${usuario.email} já existe.`)
        }
        RepositorioUsuarioEmMemoria.items.push(usuario)
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const usuario = RepositorioUsuarioEmMemoria.items.find(u => u.email === email)
        return usuario || null
    }

     
}