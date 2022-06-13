
const calculatorScreen = document.querySelector ('.calculator-screen')
const numbers = document.querySelectorAll(".number")



let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0' ) {
        currentNumber = number
    } else {
    currentNumber += number
    }
}

const updateScreen = (number) => {
    calculatorScreen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => { 
        inputNumber(event.target.value)
            updateScreen(currentNumber)
    })
})

//langkah 4
const operators = document.querySelectorAll(".operator")

operators.forEach ((operator) => {
    operator.addEventListener("click" , (event) => {
        inputOperator (event.target.value)
    })
})

//langkah 8 pembaruan 
const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
}
    calculationOperator = operator
    currentNumber = '0'
}
//langkah5
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click' ,() => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+" :
            result = parseFloat (prevNumber)  + parseFloat (currentNumber) 
            break
        case "-" :
            result = prevNumber - currentNumber
            break
        case "*" :
            result = prevNumber * currentNumber
            break
        case "/" :
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

//langkah6

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'

}
const clearBtn = document.querySelector('.all-Clear')

clearBtn.addEventListener('click' , () => {
    clearAll ()
    updateScreen(currentNumber)
})

//langkah 7

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})