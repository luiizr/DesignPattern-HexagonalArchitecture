import Usuario from "../model/Usuario";

export default class RepositorioUsuarioEmMemoria {
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

    async buscarPorId(id: string): Promise<Usuario | null> {
        const usuario = RepositorioUsuarioEmMemoria.items.find(u => u.id === id)
        return usuario || null
    }

    async listar(): Promise<Usuario[]> {
        return RepositorioUsuarioEmMemoria.items
    }
}