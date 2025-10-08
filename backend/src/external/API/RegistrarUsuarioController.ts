import RegistrarUsuario from '@/core/usuario/service/RegistrarUsuario';
import { Express } from 'express';

// A idéia é que esse arquivo consiga chamar o caso de uso a partir de uma rota do express, por isso precisamos inicializar o servidor ( express ) e o caso de uso ( use case )
export default class RegistrarUsuarioController {
    
    // Procura inicializar o servidor e o caso de uso
    constructor(
        servidor: Express,
        cdu: RegistrarUsuario
    ) {
        
        // Cria a rota para registrar o usuário // requisição e resposta
        servidor.post('/api/usuarios/registrar', async (req, resp) => {
            try {
            await cdu.executar({
                nome: req.body.nome,
                email: req.body.nome,
                senha: req.body.nome,
            })
                resp.status(201).send()
            } catch (erro: any) {
                // Erro 400, quando há algum erro do lado do usuário, enviou dados inválidos por exemplo
                resp.status(400).send(erro.message)
            }
        })

    }

    


}