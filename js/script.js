let totalSum = 0;

const zero = document.querySelector("#button_id_0");
const num0 = JSON.parse(zero.textContent);


zero.addEventListener("click",(event)=> {
    totalSum += num0;
    
});

const one = document.querySelector("#button_id_1");
const num1 = JSON.parse(one.textContent);


one.addEventListener("click",(event)=> {
    totalSum += num1;
    
});

const two = document.querySelector("#button_id_2");
const num2 = JSON.parse(two.textContent);


two.addEventListener("click",(event)=> {
    totalSum += num2;
    
});

const three = document.querySelector("#button_id_3");
const num3 = JSON.parse(three.textContent);


three.addEventListener("click",(event)=> {
    totalSum += num3;
    
});

const four = document.querySelector("#button_id_4");
const num4 = JSON.parse(four.textContent);


four.addEventListener("click",(event)=> {
    totalSum += num4;
    
});

const five = document.querySelector("#button_id_5");
const num5 = JSON.parse(five.textContent);


five.addEventListener("click",(event)=> {
    totalSum += num5;
    
});

const six = document.querySelector("#button_id_6");
const num6 = JSON.parse(six.textContent);


six.addEventListener("click",(event)=> {
    totalSum += num6;
    
});

const seven = document.querySelector("#button_id_7");
const num7 = JSON.parse(seven.textContent);


seven.addEventListener("click",(event)=> {
    totalSum += num7;
    
});

const eight = document.querySelector("#button_id_8");
const num8 = JSON.parse(eight.textContent);


eight.addEventListener("click",(event)=> {
    totalSum += num8;
    
});

const nine = document.querySelector("#button_id_9");
const num9 = JSON.parse(nine.textContent);


nine.addEventListener("click",(event)=> {
    totalSum += num9;
    
});


/* const plusOperator = document.querySelector("#button_id_plus");
const plusOperatorText = plusOperator.textContent;
console.log(plusOperatorText);
*/


const equalOperator = document.querySelector("#button_id_equal");
const equalOperatorText = equalOperator.textContent;
console.log(equalOperatorText);

const screenDisplay = document.querySelector("#screen_id");

equalOperator.addEventListener("click",(event)=> {
    console.log(totalSum);
    screen_id.textContent  = totalSum;
})

