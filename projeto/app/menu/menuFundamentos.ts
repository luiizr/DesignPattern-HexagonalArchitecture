import TerminalUtil from "app/util/TerminalUtil";
import menuPrincipal from "./menuPrincipal";
import polimorfismo from "app/fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalUtil.titulo("Fundamentos");

    const [indice] = await TerminalUtil.menu(
        [
        '1 - Polimorfismo',
        'Voltar'
    ]);

    switch (indice) {
        case 0: 
            await polimorfismo();
            break;
        case 1:
            process.exit(0);
    }
    await menuPrincipal();
}