function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
let num1 = ``, num2 = ``, operator =null;
let result;

function operate(num1,num2,operator){
if(operator==="+"){
    return add(num1,num2)
}else if(operator==="-"){
    return subtract(num1,num2)
}else if(operator==="*"){
    return multiply(num1,num2)
}else if(operator==="/"){
    return divide(num1,num2)
// }else if(operator==="="){

// }
}

}

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
const calculatorScreen=document.getElementById("screen");
const numberInput=document.getElementById("calculation")


const clickButton=document.querySelectorAll(".butt");
clickButton.forEach(stuff=>{
    stuff.addEventListener("click",function(){
        if(stuff.textContent==="+"||stuff.textContent==="-"||stuff.textContent==="*"||stuff.textContent==="/"){

            if(num1!=``&&num2!=``){
                num1=operate(Number(num1),Number(num2),operator);
                console.log(num1)
                operator=null;
                num2=``;
                numberInput.textContent=`${num1}`;
                
            }
            operator=stuff.textContent;
            numberInput.textContent+=`${operator}`;
            calculatorScreen.appendChild(numberInput);
        }else if(isNumber(stuff.textContent)&&operator==null){
            num1+=Number(stuff.textContent);
            numberInput.textContent=`${num1}`;
           
            console.log(num1);
        }else if(isNumber(stuff.textContent)&&operator!=null){
            num2+=Number(stuff.textContent);
            numberInput.textContent=`${num2}`;
         
            console.log(num2);
           
        }else if(stuff.textContent=="="){
           
            // num1=operate(Number(num1),Number(num2),operator)
            // console.log(num1);
            if(num1!=``&&num2!=``){
                num1=operate(Number(num1),Number(num2),operator);
                if(!isFinite(num1)){
                    console.log("ERROR")
                    numberInput.textContent=`ERROR`;
                  
                }else{
                    operator=null;
                    num2=``;
                    console.log(num1)
                    numberInput.textContent=`${num1}`;
                
                }
               
            }
            
        }else if(stuff.textContent=="AC"){
            numberInput.textContent=`0`;
            num1=``;num2=``;operator=null;
            
        }
    })
})
  