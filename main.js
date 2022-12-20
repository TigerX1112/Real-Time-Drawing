noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(500, 450);
    canvas.position(560, 120);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#969A97");

    document.getElementById("square_side").innerHTML = "Width and height of the square is "+difference+"px.";
    fill("#F90093");
    stroke("#F90093");
    square(noseX, noseY, difference);
}
function modalLoaded() {
    console.log("Modal is intiliazed");
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+noseX+" nose y = " +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x: "+leftWristX+" right wrist x: "+rightWristX+" difference: "+difference);
    }
}