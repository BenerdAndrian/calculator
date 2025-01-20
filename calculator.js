function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    
    return num1>num2?(num1-num2):-(num1-num2);
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
let num1 = null, num2 = null, operator = null;

function operate(num1,num2,operator){
if(operator==="+"){
    console.log(add(num1,num2))
}else if(operator==="-"){
    console.log(subtract(num1,num2))
}else if(operator==="*"){
    console.log(multiply(num1,num2))
}else if(operator==="/"){
    console.log(divide(num1,num2))
// }else if(operator==="="){

// }
}

}
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
const clickButton=document.querySelectorAll(".butt");
clickButton.forEach(stuff=>{
    stuff.addEventListener("click",function(){
        if(stuff.textContent==="+"||stuff.textContent==="-"||stuff.textContent==="*"||stuff.textContent==="/"){
            operator=stuff.textContent;
            console.log(operator)
        }else if(isNumber(stuff.textContent)&&num1==null){
            num1=Number(stuff.textContent);
            console.log(num1);
        }else if(isNumber(stuff.textContent)&&num1!=null){
            num2=Number(stuff.textContent);
            console.log(num2);
        }else if(stuff.textContent=="="){
            console.log(operate(num1,num2,operator));
            num1=null;num2=null;operator=null;
        }else if(stuff.textContent=="clear"){
            num1=null;num2=null;operator=null;
        }
    })
})
  