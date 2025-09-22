import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "../usuario/registrarUsuario";

export default async function menuUsuario() {
    TerminalUtil.titulo("Usuario");

    const [indice] = await TerminalUtil.menu(
        [
        '1 - Registrar Usuário',
        'Voltar'
    ]);

    switch (indice) {
        case 0: 
            await RegistrarUsuario();
            break;
        default:
            return;
    }
    await menuUsuario();
}