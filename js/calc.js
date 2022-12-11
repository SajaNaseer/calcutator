/*
Steps:
function to get numbers
function to get operators
function to display value
calcutation operation
accept more than opreation
accept more than numbers
function delete
function clear
*/ 

let inputValue = document.querySelector("#value");
let numbers = document.querySelectorAll(".press");
let number1 = document.querySelector("#num1");
let number2 = document.querySelector("#num2");
let number3 = document.querySelector("#num3");
let number4 = document.querySelector("#num4");
let number5 = document.querySelector("#num5");
let number6 = document.querySelector("#num6");
let number7 = document.querySelector("#num7");
let number8 = document.querySelector("#num8");
let number9 = document.querySelector("#num9");
let number10 = document.querySelector("#num10");
let number0= document.querySelector("#num0");
let div = document.querySelector("#div");
let squr = document.querySelector("#squr");
let mul = document.querySelector("#mult");
let remind = document.querySelector("#remind");
let min = document.querySelector("#nin");
let delet = document.querySelector("#delete");
let del = document.querySelector("#del");
let plus = document.querySelector("#plus");
let equl = document.querySelector("#equl");
let clear = document.querySelector("#clear");
let togetherNumber = false;

//Get Number 
let currenetValue = null;
let newValue = null;
let result = null;
let getNumbers = (num)=>{
    let lastResult;
    if(togetherNumber === true){
        if(newValue){
            lastResult = newValue + "" + num;
            newValue = lastResult ; 
            inputValue.value = lastResult
        }
        else{
            lastResult = currenetValue + ""+ num;
            currenetValue = lastResult;
            inputValue.value = lastResult;
        }
    }
    else{
        inputValue.value = num
        if(currenetValue != null){
            newValue = num
        }
        else{
            currenetValue = num ;
        }
    }
    togetherNumber = true;
}


//Get Operation
let operType = " ";
let getOperator = (oper)=>{
    inputValue.value = oper; 
    operType = oper;
    togetherNumber = false;
}



//Fanction Equle
let equleOperator = () =>{
    if(currenetValue && newValue && operType ){
        if(operType === "+"){
            let newReault =  Number(currenetValue)+  Number(newValue);
            inputValue.value = newReault;
            currenetValue = newReault
        }
        if(operType === "-"){
            let newReault =  Number(currenetValue) - Number(newValue);
            inputValue.value = newReault;
            currenetValue = newReault
        }
        if(operType === "*"){
            let newReault =  Number(currenetValue) * Number(newValue);
            inputValue.value = newReault;
            currenetValue = newReault
        }
        if(operType === "/"){
            let newReault =  Number(currenetValue) / Number(newValue);
            inputValue.value = newReault;
            currenetValue = newReault
        }
        if(operType === "%"){
            let newReault =  Number(currenetValue) % Number(newValue);
            inputValue.value = newReault;
            currenetValue = newReault
        }
        // if(operType === "^"){
        //     inputValue.value = saveValue.currenetValue ^ saveValue.newValue;
        // }
        // if(operType === "."){
        //     inputValue.value = saveValue.currenetValue . saveValue.newValue;
        // }
    }
    togetherNumber = false;
}

// Clear Function
let clearValue = ()=>{
    inputValue.value = "";
}

// Delete Function
let deleteValue = ()=>{
    inputValue.value = inputValue.value.slice(0,-1)
}







// number0.addEventListener("click" , getValue(0))
// number1.addEventListener("click" ,  getValue(1))
// number2.addEventListener("click" , getValue(2))
// number3.addEventListener("click" ,  getValue(3))
// number4.addEventListener("click" ,  getValue(4))
// number5.addEventListener("click" ,  getValue(5))
// number6.addEventListener("click" ,  getValue(6))
// number7.addEventListener("click" ,  getValue(7))
// number8.addEventListener("click" ,  getValue(8))
// number9.addEventListener("click" ,  getValue(9))
