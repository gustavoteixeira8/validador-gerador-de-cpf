export default class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '') 
        })
    }

    cpfSequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.cpfSequencia()) return false
        

        const cpfTemp = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.validaUltimoDigito(cpfTemp) 
        const digito2 = ValidaCPF.validaUltimoDigito(cpfTemp + digito1)   
  
        return cpfTemp + digito1 + digito2 === this.cpfLimpo
    }

    static validaUltimoDigito(cpfTemp) {
        let total = 0
        let lengthCpf = cpfTemp.length + 1

        for (let stringNum of cpfTemp) {
            total += parseInt(stringNum) * lengthCpf
            lengthCpf--
        }

        const contaDigito = 11 - (total % 11)

        return contaDigito > 9 ? '0' : String(contaDigito)
    }
}

// export { ValidaCPF as default }