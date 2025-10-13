import { Express } from 'express';
import ObterProdutoPorId from '@/core/produto/service/obterProtudoPorId';

export default class ObterProdutoPorIdController {
    
    constructor(
        servidor: Express,
        cdu: ObterProdutoPorId,
        ...middlewares: any[]
    ) {
        
        servidor.post('/api/produtos/:id', ...middlewares , async (req, resp) => { 
            try {
                const produto = await cdu.executar({
                    produtoId: (req.params as any).id,
                    usuario: (req as any).usuario
                })
                resp.status(200).send(produto)
            } catch (erro: any) {
                resp.status(400).send(erro.message)
            }
        })

    }

    


}