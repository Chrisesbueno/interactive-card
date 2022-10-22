const button = document.getElementById('submit');
const form = document.querySelector('.form__card')

const data = [
    document.getElementById('cvc'),
    document.getElementById('numbers'),
    document.getElementById('name'),
    document.getElementById('dateM'),
    document.getElementById('dateY')
]
const card = [
    document.querySelector('.back__cvc'), 
    document.querySelector('.front__number'),  
    document.querySelector('.front__name'),
    document.querySelector('.mm'),
    document.querySelector('.yy'),
]

button.addEventListener('click', (e) => {
    e.preventDefault()
    data.forEach(element => {
        if (element.value == '') {
            element.parentElement.classList.add('active')
        } else {
            element.parentElement.classList.remove('active')
        }      
    });
})

form.addEventListener('input', (element) => {
    
    /* Validate requirement inputs */
    let cvc = verified(data[0], data[0].value, 3);
    let numbers = verified(data[1], data[1].value, 19);
    let name = verified(data[2], data[2].value, 20);
    let MM = verified(data[3], data[3].value, 2);
    let YY = verified(data[4], data[4].value, 2)
    

    /* Add card values */
    realTime(0)
    realTime(1)
    realTime(2)
    realTime(3)
    realTime(4)

    // card[2].innerHTML = data[2].value
    // card[3].innerHTML = data[3].value
    // card[4].innerHTML = data[4].value


    /* Number card space */
    data[1].value = data[1].value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();

    /* Remove active styles when input is not empty */
    element.target.parentElement.classList.remove('active')

    button.addEventListener('click', (e) => {
        e.preventDefault()
        if (cvc.length == 3 && numbers.length == 16 && name.length > 0 && MM.length == 2 && YY.length == 2) {
            form.parentElement.classList.add('confirm')
        }
    })
})

function verified(input, number, n) {

    /* Remove spaces */
    let cardnumber = number.split(' ').join('')

    /* Limited value length input */
    input.value = input.value.slice(0, n) 

    /* Style show for when requirements are met */
    if (!Number(cardnumber)) {
        input.parentElement.classList.add('show')
    } else {
        input.parentElement.classList.remove('show')
    }
    if (number.length == 0){
        input.parentElement.classList.remove('show')
    }
    
    return cardnumber
}

function realTime(i) {
    card[i].innerHTML = data[i].value

}
