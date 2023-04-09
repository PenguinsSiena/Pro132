img = "";

function preload(){
    img = loadImage("4.jpg");
}
function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
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
    image(img, 0, 0, 550, 500);
    fill("#473527");
    text("Closet", 400, 40);
    noFill();
    stroke("#473527");
    rect(80, 50, 450, 430);
}

function back()
{
    window.location = "index.html";
}