import GeraCPF from './modules/GeraCPF'
import ValidaCPF from './modules/ValidaCPF'

import './assets/css/style.css'


(function(){
    // Gerador de CPF
    const btnGeraCPF = document.querySelector('#btnGeraCPF')
    btnGeraCPF.addEventListener('click', () => {
        const geraCPF = GeraCPF.generateCPF()
        const containerCPF = document.querySelector('#containerCPF')
        
        containerCPF.innerHTML = `CPF -> ${geraCPF}`
    })


    // Validador de CPF
    const btnValidaCPF = document.querySelector('#btnValidaCPF')
    
    btnValidaCPF.addEventListener('click', () => {
        const resultValidCPF = document.querySelector('#resultValidCPF')
        const inputCPF = document.querySelector('#inputCPF')
        const validaCPF = new ValidaCPF(inputCPF.value)

        if(validaCPF.valida()) {
            resultValidCPF.innerHTML = `
            <div class="alert my-5 alert-success">
                CPF válido -> ${inputCPF.value}
            </div>   
            `
        } else {
            resultValidCPF.innerHTML = `
            <div class="alert my-5 alert-danger text-center">
                CPF Inválido
            </div>   
            `
        }

        setTimeout(() => resultValidCPF.innerHTML = '', 10000)
    })

})()
