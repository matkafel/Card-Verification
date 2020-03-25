import getCardProvider from './getCardProvider';

const cardType = document.querySelector('.cardType');
const inputNumber = document.querySelector('.inputNumber');
const flexContainer = document.querySelector('.flex-container');

let img = new Image()
img.classList.add('.logo')


inputNumber.addEventListener('change', e => {
    e.preventDefault();

    if (getCardProvider(inputNumber.value) === 'Visa') {
        cardType.innerHTML = getCardProvider(inputNumber.value)
        cardType.style.color = "white";
        cardType.style.marginRight = "15%";
        img.src = '/visa.7b505cfb.png'
        flexContainer.appendChild(img);

    } else if (getCardProvider(inputNumber.value) === 'MasterCard') {
        cardType.innerHTML = getCardProvider(inputNumber.value)
        cardType.style.color = "white";
        img.src = '/mastercard.61c43cec.png'
        flexContainer.appendChild(img);

    } else if (getCardProvider(inputNumber.value) === 'American Express') {
        cardType.innerHTML = getCardProvider(inputNumber.value)
        cardType.style.color = "white";
        img.src = '/am.a96eef0a.png';
        flexContainer.appendChild(img);

    } else if (getCardProvider(inputNumber.value) === 'JCB') {
        cardType.innerHTML = getCardProvider(inputNumber.value)
        cardType.style.color = "white";
        cardType.style.marginRight = "10%";
        img.src = '/jcb.391f2d68.png'
        flexContainer.appendChild(img);

    } else if (getCardProvider(inputNumber.value) === 'Discover') {
        cardType.innerHTML = getCardProvider(inputNumber.value);
        cardType.style.color = "white";
        cardType.style.marginRight = "15%";
        img.src = '/discover.5b3b2c3c.png';
        flexContainer.appendChild(img);

    } else {
        cardType.innerHTML = getCardProvider(inputNumber.value)
        cardType.style.color = "#F80000";
    }
})