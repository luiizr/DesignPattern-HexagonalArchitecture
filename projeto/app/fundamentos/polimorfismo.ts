import TerminalUtil from "app/util/TerminalUtil";

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo");

    while(true){
        TerminalUtil.limpar()
        const continuar = await TerminalUtil.confirmacao('Deseja Continuar?')
        if(!continuar) return
    }
}