img = "";
status ="";
objects =[];

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
    objects = results;
}
}

function draw(){
    image(img , 0 , 0 , 640 , 420);
    
    if( status != ""){
        for( i = 0 ; i < objects.length ; i++ ){

            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" + objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x ,objects[i].y , objects[i].width , objects[i].height);
        }
    }
}