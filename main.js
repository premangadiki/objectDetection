img = "";
status ="";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetecter = ml5.objectDetecter('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";

}

function modelLoaded(){
    console.log("COCOSD is initialized");
    status = true;
    objectDetecter.detect(img , gotresults);
}

function gotresults(error , results){
   if(error ){
    console.error(error);

}

else{
    console.log(results);
}
}

function draw(){
    image(img , 0 , 0 , 640 , 420);
    fill("#FF0000");
    text("dog" , 45 , 75);
    noFill();
    stroke("#FF0000");
    rect(30 , 60 , 450 , 350);

    fill("#FF0000");
    text("cat" , 320 , 120);
    noFill();
    stroke("#FF0000");
    rect(300 , 90 , 270 , 320);
}