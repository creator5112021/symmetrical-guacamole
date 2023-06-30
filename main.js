song1 = ""
song2 = ""
leftWristx = 0
leftWristy = 0
rightWristx = 0
rightWristy = 0
scoreleftWrist = 0
scorerightWrist = 0

function setup(){
    canvas = createCanvas(550,550)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
    
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose", gotResults)
}
function modelLoaded() {
    console.log("PoseNet has loaded")
}
function gotResults(results){
    if (results.length >0) {
        console.log(results)
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = " +scoreleftWrist)
        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("scorerightWrist = " +scorerightWrist)

        if (scoreleftWrist > 0.1) {
        //rightWristx = results[0].pose.rightWrist.x;
        //rightWristy = results[0].pose.rightWrist.y;
        //console.log("rightWristx = " +rightWristx+ " rightWristy = " +rightWristy) 

        //leftWristx = results[0].pose.leftWrist.x;
        //leftWristy = results[0].pose.leftWrist.y;
        //console.log("leftWristx = " +leftWristx+ " leftWristy = " +leftWristy) 
          song1play = "play"
        }
        if (scorerightWrist > 0.1) {

          song2play = "play"

    }
}
function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}
function draw() {
    image(video,0,0,550,550)

    fill("#FF0000");
    stroke("800000");
    circle(leftWristx, leftWristy,20);

    if (song1play = "play") {
        song1.play
    }
    if (song2play = "play") {
        song2.play
    }
    //InNumberleftWristy = Number(leftWristy);
    //remove_decimals = floor(InNumberleftWristy);
    //volume = remove_decimals/500;
    //document.getElementById("volume").innerHTML = "Volume = "+volume;
    //song.setVolume(volume);
}
//function play() {
    //song.play()
    //song.setVolume(1)
    //song.rate(1)

//}
}
