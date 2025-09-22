export default interface CasoDeUso<E, S> { // De Entrada e Saida
    executar(entrada: E): Promise<S>
}