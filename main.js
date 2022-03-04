noseX = 0;
noseY = 0;
function preload(){
    moustache_nose = loadImage('https://i.postimg.cc/nrxdxXJ7/istockphoto-160350753-612x612.jpg');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    //canvas.position(400, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
 video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x-15;
noseY = results[0].pose.nose.y-15;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
    }
}
function modelLoaded(){
    console.log('PoseNet has been Initialized.');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache_nose, noseX, noseY, 30, 30);
    fill(255, 0, 0);
    stroke(255, 0, 0);
}

function take_snapshot(){
    save('moustache.png');
}
