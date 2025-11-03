 let calculation = localStorage.getItem('calculation') || '';
 a();

 function updateCalculation(value) {
     calculation += value;
     a();

     localStorage.setItem('calculation', calculation);
 }

 function a() {
     document.querySelector('.js-show').innerHTML = calculation;
 }
