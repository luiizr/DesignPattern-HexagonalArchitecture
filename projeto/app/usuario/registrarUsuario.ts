import TerminalUtil from "app/util/TerminalUtil";
import RegistrarUsuario from '../../core/usuario/service/RegistrarUsuario';
import Usuario from "core/usuario/model/Usuario";
import SenhaCripto from "core/adapters/auth/SenhaCripto";
import RepositorioUsuarioEmMemoria from "core/adapters/mock/RepositorioUsuarioEmMemoria";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuario");

    const nome = await TerminalUtil.campoRequerido('Nome: ', "Nome do Usuário")
    const email = await TerminalUtil.campoRequerido('Email: ', "email@exemplo.com")
    const senha = await TerminalUtil.campoRequerido('Senha: ', "senha123")

    const usuario: Usuario = {nome, email, senha}

    const repositorio = new RepositorioUsuarioEmMemoria()
    const provedorCripto = new SenhaCripto
    const CasoDeUso = new RegistrarUsuario(repositorio, provedorCripto)
    
    await CasoDeUso.executar(usuario)
    TerminalUtil.sucesso('Usuário registrado com sucesso!')
    await TerminalUtil.esperarEnter()

    try { 
        await CasoDeUso.executar(usuario)
    } catch(e: any) {
        TerminalUtil.deuErro(e.message)
    } finally {
        await TerminalUtil.esperarEnter()
    }
} 