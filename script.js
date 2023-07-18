let flag=1;
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");
let b9=document.getElementById("b9");
let res=document.getElementById("res");

function fun1() {
    if(flag==1){
        b1.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b1.disabled=true;
    }
    else{
        b1.innerHTML="O";
        b1.disabled=true;
        res.innerHTML="X's Turn";
        flag=1;
    }
}
function fun2() {
    if(flag==1){
        b2.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b2.disabled=true;
        
    }
    else{
        b2.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b2.disabled=true;
    }
}
function fun3() {
    if(flag==1){
        b3.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b3.disabled=true;
    }
    else{
        b3.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b3.disabled=true;
    }
}
function fun4() {
    if(flag==1){
        b4.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b4.disabled=true;
    }
    else{
        b4.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b4.disabled=true;
    }
}
function fun5() {
    if(flag==1){
        b5.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b5.disabled=true;
    }
    else{
        b5.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b5.disabled=true;
    }
}
function fun6() {
    if(flag==1){
        b6.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b6.disabled=true;
    }
    else{
        b6.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b6.disabled=true;
    }
}
function fun7() {
    if(flag==1){
        b7.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b7.disabled=true;
    }
    else{
        b7.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b7.disabled=true;
    }
}
function fun8() {
    if(flag==1){
        b8.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b8.disabled=true;
    }
    else{
        b8.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b8.disabled=true;
    }
}
function fun9() {
    if(flag==1){
        b9.innerHTML="X";
        flag=0;
        res.innerHTML="O's Turn";
        b9.disabled=true;
    }
    else{
        b9.innerHTML="O";
        flag=1;
        res.innerHTML="X's Turn";
        b9.disabled=true;
    }
}
function result(){
    if(b1.innerHTML=="X" && b2.innerHTML=="X"&&b3.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b1.style.backgroundColor="red";
        b2.style.backgroundColor="red";
        b3.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b4.innerHTML=="X" && b5.innerHTML=="X" && b6.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b4.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b6.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b7.innerHTML=="X" && b8.innerHTML=="X" && b9.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b7.style.backgroundColor="red";
        b8.style.backgroundColor="red";
        b9.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b1.innerHTML=="X" && b4.innerHTML=="X" && b7.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b1.style.backgroundColor="red";
        b4.style.backgroundColor="red";
        b7.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b2.innerHTML=="X" && b5.innerHTML=="X" && b8.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b2.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b8.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b3.innerHTML=="X" && b6.innerHTML=="X" && b9.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b3.style.backgroundColor="red";
        b6.style.backgroundColor="red";
        b9.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b1.innerHTML=="X" && b5.innerHTML=="X" && b9.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b1.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b9.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b3.innerHTML=="X" && b5.innerHTML=="X" && b7.innerHTML=="X"){
        res.innerHTML="Player X Wins";
        b3.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b7.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b1.innerHTML=="O" && b2.innerHTML=="O"&&b3.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b1.style.backgroundColor="red";
        b2.style.backgroundColor="red";
        b3.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b4.innerHTML=="O" && b5.innerHTML=="O" && b6.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b4.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b6.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b7.innerHTML=="O" && b8.innerHTML=="O" && b9.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b7.style.backgroundColor="red";
        b8.style.backgroundColor="red";
        b9.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b1.innerHTML=="O" && b4.innerHTML=="O" && b7.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b1.style.backgroundColor="red";
        b4.style.backgroundColor="red";
        b7.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b2.innerHTML=="O" && b5.innerHTML=="O" && b8.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b2.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b8.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b3.innerHTML=="O" && b6.innerHTML=="O" && b9.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b3.style.backgroundColor="red";
        b6.style.backgroundColor="red";
        b9.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b1.innerHTML=="O" && b5.innerHTML=="O" && b9.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b1.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b9.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
    else if(b3.innerHTML=="O" && b5.innerHTML=="O" && b7.innerHTML=="O"){
        res.innerHTML="Player O Wins";
        b3.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b7.style.backgroundColor="red";
        b1.disabled=true;b2.disabled=true;b3.disabled=true;b4.disabled=true;b5.disabled=true;b6.disabled=true;b7.disabled=true;b8.disabled=true;b9.disabled=true;
    }
}
function reset(){
    b1.disabled=false;
    b1.innerHTML="";
    b2.disabled=false;
    b2.innerHTML="";
    b3.disabled=false;
    b3.innerHTML="";
    b4.disabled=false;
    b4.innerHTML="";
    b5.disabled=false;
    b5.innerHTML="";
    b6.disabled=false;
    b6.innerHTML="";
    b7.disabled=false;
    b7.innerHTML="";
    b8.disabled=false;
    b8.innerHTML="";
    b9.disabled=false;
    b9.innerHTML="";
    res.innerHTML="Welcome";
    b1.style.backgroundColor="black";
    b2.style.backgroundColor="black";
    b3.style.backgroundColor="black";
    b4.style.backgroundColor="black";
    b5.style.backgroundColor="black";
    b6.style.backgroundColor="black";
    b7.style.backgroundColor="black";
    b8.style.backgroundColor="black";
    b9.style.backgroundColor="black";
}