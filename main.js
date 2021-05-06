canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
imgs = ["i1.jpg", "i2.jfif", "i3.jpg", "i4.jfif", "i5.png", "mars.jpg"];
rn = Math.floor(Math.random()*6);
console.log(rn);
backgroundimage = imgs[rn];
console.log("Background image is: "+backgroundimage);
roverimage = "rover.png";
roverwidth = 100;
roverheight = 90;
roverX = 10;
roverY = 10;
function screenload(){
  nimg = new Image();
  nimg.onload = uploadmars;
  nimg.src = backgroundimage;
  nimgR = new Image();
  nimgR.onload = uploadrover;
  nimgR.src = roverimage;
}
function uploadmars(){
    ctx.drawImage(nimg,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(nimgR,roverX,roverY,roverwidth,roverheight);
}
window.addEventListener("keydown",kdn);
function kdn(e){
    keypress = e.keyCode;
    console.log(keypress);
if(keypress == '38'){
    up();
    console.log("Up arrow key");
}
if(keypress == '40'){
    down();
    console.log("Down arrow key");
}
if(keypress == '37'){
    left();
    console.log("Left arrow key");
}
if(keypress == '39'){
    right();
    console.log("Right arrow key");
}
}
function up(){
if(roverY>=0){
roverY=roverY-10;
console.log("When up arrow is pressed, X position of rover = "+roverX+"and Y is equal to: "+roverY);
uploadmars();
uploadrover();
}
}
function down(){
    if(roverY<=500){
    roverY=roverY+10;
    console.log("When down arrow is pressed, X position of rover = "+roverX+"and Y is equal to: "+roverY);
    uploadmars();
    uploadrover();
    }
    }
    function left(){
        if(roverX>=0){
        roverX=roverX-10;
        console.log("When left arrow is pressed, X position of rover = "+roverX+"and Y is equal to: "+roverY);
        uploadmars();
        uploadrover();
        }
        }
        function right(){
            if(roverX<=700){
            roverX=roverX+10;
            console.log("When right arrow is pressed, X position of rover = "+roverX+"and Y is equal to: "+roverY);
            uploadmars();
            uploadrover();
            }
            }
            