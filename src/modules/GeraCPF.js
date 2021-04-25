import ValidaCPF from './ValidaCPF.js'

export default class GeraCPF {

    static generateNineNumbers(max = 999999999, min = 100000000){
        const randomNum = String(
            Math.floor(Math.random() * (max - min) + min))

        return (
            randomNum.slice(0, 3) +'.'+
            randomNum.slice(3, 6) +'.'+
            randomNum.slice(6, 9)
        )
    }  

    static generateCPF() {
        const nineNumbers = GeraCPF.generateNineNumbers()
        const tempCPF = nineNumbers.replace(/\D+/g, '')
        const digit1 = ValidaCPF.validaUltimoDigito(tempCPF)
        const digit2 = ValidaCPF.validaUltimoDigito(tempCPF + digit1)

        return `${nineNumbers}-${digit1}${digit2}`
    }
}