let display = document.getElementById("display");

function appendtoDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value= "";


}
function calculate()
{
    try{
        display.value=eval(display.value);

    }
    catch(error){
        alert("invalid expression!!")
    }
    
}