import Carro from './Carro';

export default function corrida(Carro: Carro, logger: (str: string) => void = console.log) {

    Array.from({length: 10}).forEach(() => {
        Carro.acelerar()
        logger(`\nVelocidade: ${Carro.velocidadeAtual}`)
    })
    Array.from({length: 10}).forEach(() => {
        Carro.frear()
        logger(`\nVelocidade: ${Carro.velocidadeAtual}`)
    })
}