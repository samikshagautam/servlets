"use strict";

var speed = 250;
var interval;
var currentAnimationType;


window.onload = attachListeners;

function attachListeners() {
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").onclick = startPlaying;
    document.getElementById("stopbutton").onclick = stopPlaying;
    document.getElementById("typeofanimation").onchange = changeAnimationType;
    document.getElementById("size").onchange = changeSizeOfAnimation;
    document.getElementById("speed").onchange = turboSpeed;
}

function startPlaying() {
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
    document.getElementById("typeofanimation").disabled = true;
    let animArea = document.getElementById("animationarea");
    currentAnimationType = animArea.value.split("=====\n");
    interval = setInterval(function () {
        nextAnimationType(currentAnimationType);
    }, speed);
}

function nextAnimationType(animation) {
    let animArea = document.getElementById("animationarea");
    currentAnimationType = animation.shift();
    animArea.value = currentAnimationType;
    animation.push(currentAnimationType);
    currentAnimationType = animation;
}

function stopPlaying() {
    document.getElementById("startbutton").disabled = false;
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("typeofanimation").disabled = false;
    changeAnimationType();
    clearInterval(interval);
}

function changeAnimationType() {
    let animArea = document.getElementById("animationarea");
    let animationType = document.getElementById("typeofanimation");
    animArea.value = ANIMATIONS[animationType.value];
}

function changeSizeOfAnimation() {
    let fSize = document.getElementById("size").value; 
    let animArea = document.getElementById("animationarea"); 
    animArea.style.fontSize = fSize;
}

function turboSpeed() {
    clearInterval(interval);
    let turbo = document.getElementById("speed");
    if(turbo.checked == true){
        speed = 50;
    }else{
        speed = 250;
    }
    startPlaying();
}

 function restart(){
    clearInterval(interval);
    startPlaying();
}