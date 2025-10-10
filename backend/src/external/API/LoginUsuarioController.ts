import LoginUsuario from '@/core/usuario/service/LoginUsuario';
import { Express } from 'express';
import ProvedorJwt from './ProvedorJwt';

// A idéia é que esse arquivo consiga chamar o caso de uso a partir de uma rota do express, por isso precisamos inicializar o servidor ( express ) e o caso de uso ( use case )
export default class LoginUsuarioController {
    
    // Procura inicializar o servidor e o caso de uso
    constructor(
        servidor: Express,
        cdu: LoginUsuario
    ) {
        const provedorJwt = new ProvedorJwt(process.env.JWT_SECRET!)
        
        // Cria a rota para registrar o usuário // requisição e resposta
        servidor.post('/api/usuarios/login', async (req, resp) => { 
            try {
            const resposta = await cdu.executar({ // resposta = usuário
                email: req.body.email,
                senha: req.body.senha,
            })
                resp.status(200).send({
                    resposta,
                    token: provedorJwt.gerar(resposta)
            })
            } catch (erro: any) {
                // Erro 400, quando há algum erro do lado do usuário, enviou dados inválidos por exemplo
                resp.status(400).send(erro.message)
            }
        })

    }

    


}