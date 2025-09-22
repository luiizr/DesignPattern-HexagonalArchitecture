import TerminalUtil from "app/util/TerminalUtil";
import RegistrarUsuario from '../../core/usuario/service/RegistrarUsuario';
import Usuario from "core/usuario/model/Usuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuario");

    const id = await TerminalUtil.campoRequerido('Id: ', "jsidjai-jisaajdj-asjdja-ajsdj")
    const nome = await TerminalUtil.campoRequerido('Nome: ', "Nome do Usuário")
    const email = await TerminalUtil.campoRequerido('Email: ', "email@exemplo.com")
    const senha = await TerminalUtil.campoRequerido('Senha: ', "senha123")

    const usuario: Usuario = {id, nome, email, senha}
    await new RegistrarUsuario().executar(usuario)
    TerminalUtil.sucesso('Usuário registrado com sucesso!')
    await TerminalUtil.esperarEnter()
}