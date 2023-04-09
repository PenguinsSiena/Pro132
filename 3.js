img = "";

function preload(){
    img = loadImage("3.jpg");
}
function setup(){
    canvas = createCanvas(650, 500);
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
    image(img, 0, 0, 650, 500);
    fill("#473527");
    text("Oven", 70, 60);
    noFill();
    stroke("#a7714f");
    rect(70, 65, 500, 400);
}

function back()
{
    window.location = "index.html";
}