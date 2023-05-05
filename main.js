let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let btn7 = document.querySelector('#btn7')
let btn8 = document.querySelector('#btn8')
let btn9 = document.querySelector('#btn9')
let btn0 = document.querySelector('#btn0')
let btnVirgola = document.querySelector('#btnVirgola')
let piu = document.querySelector('#piu')
let meno = document.querySelector('#meno')
let per = document.querySelector('#per')
let diviso = document.querySelector('#diviso')
let uguale = document.querySelector('#uguale')
let btnAC = document.querySelector('#btnAC')
let display = document.querySelector('.display')
let opa1
let ops1
let opm1
let opd1
let opa2
let ops2
let opm2
let opd2



btn1.addEventListener('click', () => {
    display.value = display.value + '1'
})

btn2.addEventListener('click', () => {
    display.value = display.value + '2'
})

btn3.addEventListener('click', () => {
    display.value = display.value + '3'
})

btn4.addEventListener('click', () => {
    display.value = display.value + '4'
})

btn5.addEventListener('click', () => {
    display.value = display.value + '5'
})

btn6.addEventListener('click', () => {
    display.value = display.value + '6'
})

btn7.addEventListener('click', () => {
    display.value = display.value + '7'
})

btn8.addEventListener('click', () => {
    display.value = display.value + '8'
})

btn9.addEventListener('click', () => {
    display.value = display.value + '9'
})

btn0.addEventListener('click', () => {
    display.value = display.value + '0'
})

btnVirgola.addEventListener('click', () => {
    display.value = display.value + '.'
})

btnAC.addEventListener('click', () => {
    display.value = ""
    let opa1 = 0
    let ops1 = 0
    let opm1 = 0
    let opd1 = 0
    let opa2 = 0
    let ops2 = 0
    let opm2 = 0
    let opd2 = 0
})

piu.addEventListener('click', () => {
    opa1 = parseFloat(display.value) 
    display.value= ""

    uguale.addEventListener('click', () => {
        let opa2 = parseFloat(display.value)
        display.value = String(((opa1) + opa2)) ;
        opa1 = 0
    })
    
})

meno.addEventListener('click', () => {
    ops1 = parseFloat(display.value) 
    display.value= ""

    uguale.addEventListener('click', () => {
        let ops2 = parseFloat(display.value)
        display.value = String(((ops1) - ops2));
        ops1 = 0
    })
})

per.addEventListener('click', () => {
    opm1 = parseFloat(display.value) 
    display.value= ""

    uguale.addEventListener('click', () => {
        let opm2 = parseFloat(display.value)
        display.value = String(((opm1) * opm2));
        opm1 = 0
    })
})

diviso.addEventListener('click', () => {
    opd1 = parseFloat(display.value) 
    display.value= ""

    uguale.addEventListener('click', () => {
        let opd2 = parseFloat(display.value)
        display.value = String(((opd1) / opd2));
        opd1 = 0
    })
})
