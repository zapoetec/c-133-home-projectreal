var status="";
function preload(){
img = loadImage("1.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "There are 6 big objects in the image from which the cocossd model has detected 2 images";
}
function modelLoaded(){
    status.true("cocossd");
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
variable1="";
 array =[];
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    array = results;
}

function draw(){
    image(img,0,0,640,420);
    if(variable1 !=""){
    for(i=0;i<array.length;i++)
    {
        document.getElementById("h3").innerHTML = "status:objects detected";
        var math =floor(array[i].confidence*100);
        fill("green");
        text(array[i].label+" "+math+"%",array[i].x,array[i].y+10);
        noFill();
        stroke("red");
        rect(array[i].x,array[i].y,array[i].width,array[i].height);
    }
}
}