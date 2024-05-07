
// /TODO-List

// MAS Input
// EMPTY STYLES

const bill = document.querySelector('#billAmount')
const people = document.querySelector('#peopleAmount')
const tipPercent = document.querySelectorAll('.tipPercent')
const customTipPercent = document.querySelector('#custom')
const tipAmount = document.querySelector('#tipAmount')
const total = document.querySelector('#total')
const reset = document.querySelector('#reset')

let billNumber = 0
let peopleNumber = 1;
let percentNumber = 0.15;


// EVENTHANDLERS FOR INPUT AMOUNT

bill.addEventListener('input', parseBill);
people.addEventListener('input', parsePeople);
customTipPercent.addEventListener('input', parseCustom)
tipPercent.forEach(function (val) {
    val.addEventListener('click', handleEvent)
})
bill.addEventListener('click', () => {
    bill.value = ''
})


people.addEventListener('click', () => {
    people.value = ''
})

bill.addEventListener('click', () => {
    bill.value = ''
})

//RESET EVENTHANDLER

reset.addEventListener('click', resetButton)
window.addEventListener('resize', resetButton)

//RESET FUNCTION

function resetButton() {
    tipPercent.forEach(function (val) {
        val.classList.remove('active')
        customTipPercent.value = '';
    })
    document.querySelector('#error').style.display = 'none'
    people.classList.remove('inputError')
    bill.value = '0'
    people.value = 0;
    peopleNumber = 1;
    billNumber = 0;
    tipTotal = 0;
    reset.style.backgroundColor = 'hsl(183, 100%, 20%)'
    total.innerHTML = "$" + 00.toFixed(2);
    tipAmount.innerHTML = "$" + 00.toFixed(2);
    calculateTip();
}

//PARSING INPUT 

function parseBill() {
    billNumber = parseFloat(bill.value)
    reset.style.backgroundColor = 'hsl(172, 67%, 45%'
    calculateTip();
}

function parsePeople() {
    peopleNumber = parseInt(people.value)
    if (peopleNumber < 1) {
        document.querySelector('#error').style.display = 'block'
        people.classList.add('inputError')
    } else {
        document.querySelector('#error').style.display = 'none'
        people.classList.remove('inputError')
        reset.style.backgroundColor = 'hsl(172, 67%, 45%'
        calculateTip();
    }
}

function parseCustom() {
    percentNumber = parseFloat(customTipPercent.value) / 100;
    tipPercent.forEach(function (val) {
        val.classList.remove('active')
    })
    reset.style.backgroundColor = 'hsl(172, 67%, 45%'
    calculateTip();
}
function handleEvent(event) {
    tipPercent.forEach(function (val) {
        val.classList.remove('active')
        customTipPercent.value = '';
        if (event.target.value == val.value) {
            val.classList.add('active')
            percentNumber = parseFloat(val.value) / 100;
        }
        reset.style.backgroundColor = 'hsl(172, 67%, 45%'
        calculateTip();
    })
}

//CALCULATION & OUTPUT

function calculateTip() {
    if (peopleNumber >= 1) {
        let tipPerson = (billNumber * percentNumber) / peopleNumber;
        let tipTotal = (billNumber / peopleNumber) + tipPerson;
        total.innerHTML = "$" + tipTotal.toFixed(2);
        tipAmount.innerHTML = "$" + tipPerson.toFixed(2);
    }
}










