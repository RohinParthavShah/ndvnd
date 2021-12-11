
img="";
status ="";


function preload(){
    img = loadImage('IMG_8490.jpg');
}


function setup(){
    canvas = createCanvas(640,240);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log('Modal Loaded!');
    status = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
else {
    console.log(results);
}
}


function draw(){
    image(img,0,0,640,240);
    fill('#FF0000');
    text("bed",45,75);
    noFill();
    stroke('#FF0000');
    rect(30,60,450,450);

    fill('#FF0000');
    text("Purse",380,100);
    noFill();
    rect(380,100,80,80)

}
