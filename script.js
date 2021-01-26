document.querySelector("button").addEventListener('click',function (){

var player1Game1=parseInt( document.getElementById("player1Game1").value);
var player1Game2=parseInt( document.getElementById("player1Game2").value);
var player1Game3=parseInt( document.getElementById("player1Game3").value);
var average1=(player1Game1+player1Game2+player1Game3)/3;
document.getElementById("player1average").innerHTML=average1;

var player2Game1=parseInt( document.getElementById("player2Game1").value);
var player2Game2=parseInt( document.getElementById("player2Game2").value);
var player2Game3=parseInt( document.getElementById("player2Game3").value);
var average2=(player2Game1+player2Game2+player2Game3)/3;
document.getElementById("player2average").innerHTML=average2;
event.preventDefault();
player1=document.getElementById("player1").value;
player2=document.getElementById("player2").value;
if(average1>average2){
    document.getElementById("result").innerHTML=`${player1}\'s average score ${average1} is higher than ${player2}\'s  average score ${average2}`;
}else if(average1==average2){
    document.getElementById("result").innerHTML=`${player1}\'s average score ${average1} is equal to ${player2}\'s  average score ${average2}`;
}else{
    document.getElementById("result").innerHTML=`${player1}\'s average score ${average1} is lower than ${player2}\'s  average score ${average2}`;
}


})