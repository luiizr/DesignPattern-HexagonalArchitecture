import Usuario from "../model/Usuario"

export default interface RepositorioUsuario {    
    inserir(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
}