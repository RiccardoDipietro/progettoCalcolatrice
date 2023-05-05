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
let op1 = ""
let op2 = ""
let contrOp = ""



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
    op1 = ""
    op2 = ""
    contrOp = ""
})

piu.addEventListener('click', () => {
    op1 = parseFloat(display.value)
    display.value = ""
    contrOp = "+"
})

meno.addEventListener('click', () => {
    op1 = parseFloat(display.value)
    display.value = ""
    contrOp = "-"
})

per.addEventListener('click', () => {
    op1 = parseFloat(display.value)
    display.value = ""
    contrOp = "x"
})

diviso.addEventListener('click', () => {
    op1 = parseFloat(display.value)
    display.value = ""
    contrOp = ":"
})


uguale.addEventListener('click', () => {
    op2 = parseFloat(display.value) 

    if (contrOp == '+') {
        display.value = op1 + op2
    }else if (contrOp == '-') {
        display.value = op1 - op2
    }else if (contrOp == 'x') {
        display.value = op1 * op2
    }else if (contrOp == ':') {
        display.value = op1 / op2
    }

    op1 = ""
    op2 = ""
})