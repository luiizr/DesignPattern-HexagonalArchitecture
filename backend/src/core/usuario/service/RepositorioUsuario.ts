import Usuario from "../model/Usuario"

export default interface RepositorioUsuario {    
    inserir(usuario: Usuario): Promise<void>
    login(usuario: Usuario): Promise<Usuario | null>
    buscarPorEmail(email: string): Promise<Usuario | null>
}