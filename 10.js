
function Cong(){
    let number1 = document.getElementById("x").value;
    let number2 = document.getElementById("y").value;
    let Result = Number(number1)+Number(number2)
    document.getElementById("Result").innerHTML = Result
    }
function Tru(){
    let number1 = document.getElementById("x").value;
    let number2 = document.getElementById("y").value;
    let Result = Number(number1)-Number(number2)
    document.getElementById("Result").innerHTML = Result
}
function Nhan(){
    let number1 = document.getElementById("x").value;
    let number2 = document.getElementById("y").value;
    let Result = Number(number1)*Number(number2)
    document.getElementById("Result").innerHTML = Result
}
function Chia(){
    let number1 = document.getElementById("x").value;
    let number2 = document.getElementById("y").value;
    let Result = Number(number1)/Number(number2)
    document.getElementById("Result").innerHTML = Result
}
