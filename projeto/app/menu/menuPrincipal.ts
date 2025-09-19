import  TerminalUtil  from "../../util/TerminalUtil";
import { terminal } from "terminal-kit";

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal');

    const resposta = await terminal.singleColumnMenu(
        [
            '1 - Fundamentos',
            'Sair'
        ]).promise;
    switch (resposta.selectedIndex) {
        case 0:
            const menuFundamentos = async () => {
                TerminalUtil.titulo('Menu Fundamentos');
                // Adicione as opções do menu de fundamentos aqui
            };
            await menuFundamentos();
            break;
        case 1:
            process.exit(0);
    }
    await menuPrincipal();
}