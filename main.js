noseX=0;
noseY=0;
function preload(){
   lipstick = loadImage("https://i.postimg.cc/zfh9wz9Y/PNGPIX-COM-Lips-PNG-Transparent-Image-4.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
   image(video,0,0,300,300);
   image(lipstick, noseX -15, noseY, 35, 30);
}
function take_snapshot() {
    save("Filter glow.png")
}
function modelLoaded() {
    console.log("Posenet is Initalized!");
}

function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y +15;
    console.log("nose X = " + results[0].pose.nose.x);
    console.log("nose Y = " + results[0].pose.nose.y);
}
}