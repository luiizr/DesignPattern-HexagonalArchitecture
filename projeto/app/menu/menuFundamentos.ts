import TerminalUtil from "app/util/TerminalUtil";
import { terminal } from 'terminal-kit';
import menuPrincipal from "./menuPrincipal";
import polimorfismo from "app/fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalUtil.titulo("Fundamentos");
    const resposta = await terminal.singleColumnMenu(
        [
        '1 - Polimorfismo',
        'Voltar'
    ]).promise;

    switch (resposta.selectedText) {
        case '1 - Polimorfismo': 
            await polimorfismo();
            break;
        case 'Voltar':
            process.exit(0);
    }
    await menuPrincipal();
}