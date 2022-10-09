window.addEventListener('load',toMobile);
window.addEventListener('resize',toMobile);
var isMenuOpen = false;
var pg2mouseover = 0;
window.addEventListener('load',()=>{
    document.getElementById('splash').style.visibility = "hidden";
})
function toMobile(){
    if (innerWidth <= 390){
        // document.getElementById('h1').innerHTML = "CPYLER<br>THE COMPILER OF TOMORROW";
    }
    else{
        // document.getElementById('h1').innerHTML = "CPYLER, THE COMPILER OF TOMORROW";
    }
    document.getElementById('f1').style.left = (innerWidth-150)/2+"px";
    document.getElementById('f2').style.left = (innerWidth-150)/2+"px";
    document.getElementById('f3').style.left = (innerWidth-150)/2+"px";
    document.getElementById('f1').style.top = (innerHeight-250)*2+"px";
    document.getElementById('f2').style.top = (innerHeight-250)*2+"px";
    document.getElementById('f3').style.top = (innerHeight-250)*2+"px";
}
function toggleMenu(){
    if (isMenuOpen){
        isMenuOpen = false;
        document.getElementById('menucontainer').style.width = '0%';
        document.getElementById('menu').style.transform = "rotate(0deg)";
        // document.getElementById('menucontainer').style.width = '50%';
    }
    else{
        isMenuOpen = true;
        document.getElementById('menu').style.transform = "rotate(180deg)";
        document.getElementById('menucontainer').style.width = '50%';
        if (innerWidth <= 500){
            document.getElementById('menucontainer').style.width = '100%';
        }
    }
}
function scrollDown(count){
    if (count == 1){
        window.open("#banner2", "_self");
    }
}
document.getElementById('banner2').addEventListener('mouseover', preparePage2);
function preparePage2(){

    document.getElementById('f3').style.transform = `rotate(-30deg) translate(-50%)`;
    document.getElementById('f2').style.transform = `rotate(30deg) translate(50%)`;
    document.getElementById('f1').style.transform = `rotate(30deg) translate(40%, -50%)`;
    setTimeout(anime2, 1000);
}
function anime2(){
    document.getElementById('f3').style.transform = `translate(-25px, 25px)`;
    document.getElementById('f2').style.transform = `translate(-12px, 12px)`;
    document.getElementById('f1').style.transform = ``;
}
document.getElementById('banner3').addEventListener('mousemove',createEffect);
function createEffect(event){
    document.getElementById('moveimg').style.transform = "translate("+(event.pageX/10)+"px, "+(event.pageY/10)+"px)";
}
var i = 0;
var txt = 'CPYLER, THE COMPILER OF TOMORROW';
var speed = 50; 
window.addEventListener('load',typeWriter);
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("h1").innerHTML += txt.charAt(i);
    i++;
    if (i==txt.length){
        document.getElementById('b1').style.transform = "translate(0, 100%)";
    }
    setTimeout(typeWriter, speed);
  }

}




var i2 = 0;
var txt2 = 'This is how to run a HeckH Program;bash$ ./cpyler ./run.hhhh;Compiling...;Executing...;Hello World!';
var speed = 50; 
document.getElementById('terminal').addEventListener('click',typeWriter2);
function typeWriter2() {
    if (i2 == 0){
        document.getElementById('terminal').innerHTML = "";
    }
  if (i2 < txt2.length) {
    if (txt2.charAt(i2) == ';'){
        document.getElementById('terminal').innerHTML += "<br>";
    }
    else{
    document.getElementById("terminal").innerHTML += txt2.charAt(i2);
    }i2++;
    setTimeout(typeWriter2, speed);
  }

}
var i3 = 0;
var txt3 = 'Connecting to Github....';
var speed = 100; 
document.getElementById('x4').addEventListener('click',typeWriter3);
function typeWriter3() {
    if (i3 == 0){
        document.getElementById("words").innerHTML = "";
    }
  if (i3 < txt3.length) {
    document.getElementById("words").innerHTML += txt3.charAt(i3);
    i3++;
    if (i3 == txt3.length){
        document.getElementById("words").innerHTML = "Connected";
        window.open("https://github.com/sherry65-code/cpyler");
    }
    setTimeout(typeWriter3, speed);
  }

}