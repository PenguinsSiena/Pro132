img = "";

function preload(){
    img = loadImage("5.jpg");
}
function setup(){
    canvas = createCanvas(650, 530);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status : Object Detecting";
}
function modelLoaded(){
    console.log("modelLoaded!");
    statuss = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error) {
        console.log(error);
    } 
     console.log(results);
}

function draw(){
    image(img, 0, 0, 650, 530);
    fill("#473527");
    text("Tv", 80, 140);
    noFill();
    stroke("#473527");
    rect(80, 150, 400, 300);
}

function back()
{
    window.location = "index.html";
}