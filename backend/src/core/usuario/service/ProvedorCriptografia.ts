
// Na arquitetura hexagonal, isso aqui é uma Porta
export default interface ProvedorCriptografia {
    criptografar(senha: string): string
    comparar(senha: string, senhaCriptografada: string): boolean
}
