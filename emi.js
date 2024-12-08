const principal = document.querySelector('#load-amount-input');
const interest = document.querySelector('#interest-rate-input');
const time = document.querySelector('#month-pay-input');
const calculate = document.querySelector('#calculate');
const result = document.querySelector('#emi');

console.log(principal, interest, time);

function calculateEMI() {
 if(principal.value ==='' || interest.value ==='' || time.value === ''){
    alert('Please enter all the values');
    return;
 }else{
    const p = principal.value;
    const r= interest.value /1200;
    const n = time.value ;

    const emiValue = (p * r * (1+r) **n) / ((1 +r) ** n-1);
    emi.textContent = emiValue.toFixed(2);
 }

   
}

calculate.addEventListener('click', calculateEMI);



