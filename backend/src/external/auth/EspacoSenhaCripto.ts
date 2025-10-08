import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

export default class EspacoSenhaCripto implements ProvedorCriptografia {
    criptografar(senha: string): string {
        return senha.split('').join(' ')
    }
}