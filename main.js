canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover1_width = 130;
rover1_height = 73;

rover2_width = 130;
rover2_height = 73;

background_image = "racing.jpg";         
rover_image1 = "car1.png";
rover_image2 = "car2.jpg";

rover1_y = 10;
rover1_x = 10;

rover2_y = 115;
rover2_x = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover1_imgTag = new Image();
    rover1_imgTag.onload = uploadRover1;
    rover1_imgTag.src = rover_image1;

    rover2_imgTag = new Image();
    rover2_imgTag.onload = uploadRover2;
    rover2_imgTag.src = rover_image2;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover1() {
    ctx.drawImage(rover1_imgTag, rover1_x, rover1_y, rover1_width, rover1_height);
}
function uploadRover2() {
    ctx.drawImage(rover2_imgTag, rover2_x, rover2_y, rover2_width, rover2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        rover1_up();
        console.log("up arrow key");
    }
    if (keyPressed == '40') {
        rover1_down();
        console.log("down arrow key");
    }
    if (keyPressed == '37') {
        rover1_left();
        console.log("left arrow key");
    }
    if (keyPressed == '39') {
        rover1_right();
        console.log("right arrow key");
    }
    if (keyPressed == '87') {
        rover2_up();
        console.log("key w");
    }
    if (keyPressed == '65') {
        rover2_left();
        console.log("key a");
    }
    if (keyPressed == '83') {
        rover2_down();
        console.log("key s");
    }
    if (keyPressed == '68') {
        rover2_right();
        console.log("key d");
    }
}

function rover1_up() {
    if (rover1_y >= 0) {
        rover1_y = rover1_y - 10;
        console.log("When up arrow is pressed, x = " + rover1_x + " | y = " + rover1_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}

function rover1_down() {
    if (rover1_y <= 500) {
        rover1_y = rover1_y + 10;
        console.log("When down arrow is pressed, x = " + rover1_x + " | y = " + rover1_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}

function rover1_left() {
    if (rover1_x >= 0) {
        rover1_x = rover1_x - 10;
        console.log("When left arrow is pressed, x = " + rover1_x + " | y = " + rover1_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}

function rover1_right() {
    if (rover1_x <= 500) {
        rover1_x = rover1_x + 10;
        console.log("When right arrow is pressed, x = " + rover1_x + " | y = " + rover1_y);
        uploadBackground();
        uploadRover1();
        uploadRover2();
    }
}
function rover2_up() {
    if (rover2_y >= 0) {
        rover2_y = rover2_y - 10;
        console.log("When up arrow is pressed, x = " + rover2_x + " | y = " + rover2_y);
        uploadBackground();
        uploadRover2();
        uploadRover1();
    }
}

function rover2_down() {
    if (rover2_y <= 500) {
        rover2_y = rover2_y + 10;
        console.log("When down arrow is pressed, x = " + rover2_x + " | y = " + rover2_y);
        uploadBackground();
        uploadRover2();
        uploadRover1();
    }
}

function rover2_left() {
    if (rover2_x >= 0) {
        rover2_x = rover2_x - 10;
        console.log("When left arrow is pressed, x = " + rover2_x + " | y = " + rover2_y);
        uploadBackground();
        uploadRover2();
        uploadRover1();
    }
}

function rover2_right() {
    if (rover2_x <= 500) {
        rover2_x = rover2_x + 10;
        console.log("When right arrow is pressed, x = " + rover2_x + " | y = " + rover2_y);
        uploadBackground();
        uploadRover2();
        uploadRover1();
    }
}