import ProvedorCriptografia from "core/usuario/service/ProvedorCriptografia";
import bcrypt from 'bcrypt'

export default class SenhaCripto implements ProvedorCriptografia {
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(10) // Ingrediente de entrada, quantidade de rodadas (consome bastante processador)
        return bcrypt.hashSync(senha, salt) // Passa a senha e o salt
    }
}