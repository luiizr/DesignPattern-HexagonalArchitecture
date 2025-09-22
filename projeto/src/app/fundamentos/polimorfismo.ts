import TerminalUtil from "../util/TerminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo");

    const [tipoCarro] = await TerminalUtil.selecionar('Tipo de carro?', ['Ferrari', 'Fusca'])
    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca()

    while(true){
        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor('Velocidade Máxima: ', `${carro.velocidadeMaxima} km/h`)
        TerminalUtil.exibirChaveValor('Velocidade Atual: ', `${carro.velocidadeAtual} km/h`)
        const [opcao] = await TerminalUtil.selecionar("Qual opção?", ["acelerar", "frear"])
        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtil.confirmacao('Deseja Continuar?')
        if(!continuar) return
    }
}