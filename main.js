leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw()
{
    image(video, 0, 0, 550, 550);
    background('#03FCDF');
    fill('#17A398');
    text('Sophia', 0, 0);
}
function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        difference = textSize(0);
    }
}