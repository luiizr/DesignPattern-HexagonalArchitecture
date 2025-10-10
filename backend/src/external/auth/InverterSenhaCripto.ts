import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

export default class InverterSenhaCripto implements ProvedorCriptografia{
    comparar(senha: string, senhaCriptografada: string): boolean {
        throw new Error("Method not implemented.");
    }
    criptografar(senha: string): string {
        return  senha.split('').reverse().join('')
    }
}