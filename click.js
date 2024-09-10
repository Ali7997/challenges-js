document.getElementById("box1").onclick = changeColor1;

function changeColor1() {
    document.getElementById("box1").style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
}

document.getElementById("box2").onclick = changeColor2;

function changeColor2() {
    document.getElementById("box2").style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
}

document.getElementById("box3").onclick = changeColor3;

function changeColor3() {
    document.getElementById("box3").style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
}