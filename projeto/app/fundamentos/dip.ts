import TerminalUtil from "app/util/TerminalUtil";
import corrida from "core/fundamentos/corrida";
import Fusca from "core/fundamentos/Fusca";
import Ferrari from 'core/fundamentos/Ferrari';
import Civic from 'core/fundamentos/Civic'
import { terminal } from "terminal-kit";


export default async function dip() {
    TerminalUtil.titulo('DIP')
    const [tipo] = await TerminalUtil.selecionar("Tipo de carro: ", ['Fusca', 'Civic', 'Ferrari'])
    let carro
    switch(tipo){
        case 0: 
            carro = new Fusca
            break
        case 1: 
            carro = new Civic
            break
        default:
            carro = new Ferrari
            break
    }


    corrida(carro, terminal.red)
    await TerminalUtil.esperarEnter()
}