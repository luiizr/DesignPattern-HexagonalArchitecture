import Carro from "core/fundamentos/Carro";
import { terminal } from "terminal-kit";

export default class TerminalUtil {
  static titulo(texto: string): void {
    terminal.clear();
    terminal.magenta(`${texto}\n`);
    terminal.magenta(`-`.repeat(texto.length) + `\n`);
  }

  static limpar(): void {
    terminal.clear();
  }
  
  static async menu(opcoes: string[]): Promise<[number, string]> {
        const resposta = await terminal.singleColumnMenu(
          opcoes
        ).promise;
    return [resposta.selectedIndex, resposta.selectedText]
  }

  static exibirChaveValor(chave: string, valor: any) {
    terminal.yellow(chave).green(valor).white('\n')
  }

  static async confirmacao(texto: string): Promise<boolean> {
    terminal.yellow(`\n${texto}`)
    const resposta = await terminal.singleLineMenu(['Sim', 'Não']).promise
    return resposta.selectedIndex === 0
  }

  static async selecionar(texto: string, opcoes: string[]): Promise<[number, string]> {
    terminal.yellow(`\n${texto}`)
    const resposta = await terminal.singleLineMenu(opcoes).promise
    return [resposta.selectedIndex, resposta.selectedText]
  }

  static async esperarEnter(): Promise<void> {
    terminal.white('\nPressione ENTER para continuar')
    await terminal.inputField({echo: false}).promise
  }

  static async campoRequerido(label: string, valorPadrao: string = ''): Promise<string> {
    terminal.yellow(`\n${label}`)
    const valor = await terminal.inputField({default: valorPadrao}).promise
    if (valor) return valor
    return TerminalUtil.campoRequerido(label)
  }

  static async sucesso(texto: string) {
    terminal.green(`${texto}`)
  }

  static async deuErro(texto: string) {
    terminal.red(`${texto}`)
  }

}
