img = "";

function preload(){
    img = loadImage("2.jpg");
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
    text("Bathroom", 450, 100);
    noFill();
    stroke("#a7714f");
    rect(200, 120, 300, 350);
}

function back()
{
    window.location = "index.html";
}