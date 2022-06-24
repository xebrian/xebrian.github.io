const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

const operator = prompt('Enter operator(+,-,*,/)')
let result = 0;

if (isNaN(num1) || isNaN(num2)){
  alert('Wrong input! Refresh page and retry')
}
else{
  if(operator == '+'){
    result = num1 + num2;
  }
  else if (operator == '-'){
        result = num1 - num2;
  }
  else if (operator == '*'){
        result = num1 * num2;
  }
  else if (operator == '/'){
        result = num1 / num2;
    
    }
    alert(num1+operator+num2+'=' + result);
          
}
