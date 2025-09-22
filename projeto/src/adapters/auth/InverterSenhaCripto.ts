import ProvedorCriptografia from "../../usuario/service/ProvedorCriptografia";

export default class InverterSenhaCripto implements ProvedorCriptografia{
    criptografar(senha: string): string {
        return  senha.split('').reverse().join('')
    }
}