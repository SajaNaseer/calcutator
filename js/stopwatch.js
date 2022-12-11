let second = 0;
// console.log(second);//عداد ثواني
let min = 0;
// console.log(min); // عداد دقايق
let hour = 0;
// console.log(hour);// عداد الساعات


let displaySecond = 0;
// console.log(displaySecond);// عشان يطبعلي صفر جنب الرقم طالما انو اقل من 10
let dispalayMin = 0;
// console.log(dispalayMin); // عشان يطبعلي صفر جنب الرقم طالما انو اقل من 10
let displayHour = 0;
// console.log(displayHour);// عشان يطبعلي صفر جنب الرقم طالما انو اقل من 10
let type = "stop";
console.log(type);
let typem = "";
console.log(typem);


let timerFuncton = ()=>{
    second++;
    // console.log(second);//هيك عداد الثواني شغال تمام شغال تمام
    if(second/60  === 1){
        second = 0;
        min ++;
        // console.log(min) // هيك عداد الدقايق شغال تمام 

        if(min/60 === 1){
            min = 0;
            hour++;
        }
    }
    if(second <10){
        displaySecond = "0"+ second
        // console.log(displaySecond)
    }
    else{
        displaySecond = second;
    }
    if(min <10){
        dispalayMin = "0"+ min
    }
    else{
        dispalayMin = min;
    }

    if(hour <10){
        displayHour = "0"+ hour
    }
    else{
        displayHour = hour;
    }
    document.getElementById("display").innerHTML = displayHour + ":" + dispalayMin + ":" + displaySecond ;
    // console.log(document.getElementById("display").innerHTML = displayHour + ":" + dispalayMin + ":" + displaySecond)
}

// console.log(timerFuncton())

let startStop = () =>{
    if(type == "stop"){
        typem= window.setInterval(timerFuncton , 1000);
        document.getElementById("start").innerHTML= "Stop";
        type = "start";

    }
    else if(type == "start"){
        window.clearInterval(typem);
        document.getElementById("start").innerHTML= "Start";
        type = "stop";
    }
}



let reset = ()=>{
    window.clearInterval(typem);
    document.getElementById("display").innerHTML = "00:00:00";
    let resttime= document.getElementById("start").innerHTML = "Srart"
    // resttime.reset()
    // inputValue.value = "";
}
