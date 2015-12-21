/* test change implemented from Michael Hoffman's XNA demo:vhttp://gamedevelopment.tutsplus.com/tutorials/make-a-splash-with-dynamic-2d-water-effects--gamedev-236

*/

//  var canvas = document.getElementById('animation');

//var canvas = document.createElement("canvas");
//canvas.id = "animation";
//canvas.style.backgroundColor = '#1f2532';
//canvas.style.marginTop = '0px';
//canvas.style.position = 'absolute';

var canvas = document.getElementById('animation');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var tempCanvas = document.createElement("canvas");
var tempCtx = tempCanvas.getContext("2d");
tempCanvas.width = window.innerWidth;
tempCanvas.height = window.innerHeight;

var cwidth = canvas.width;
var cheight = canvas.height;

// Water colors
var waterCol_1 = 'rgba(214, 255, 223, .9)';
var waterCol_2 = 'rgba(131, 245, 212, .9)';
var waterCol_3 = 'rgba(97, 205, 192, .9)';
var waterCol_4 = 'rgba(57, 165, 164, .9)';

waterCol_1 = '#22e1bb';
waterCol_2 = '#16a085';
waterCol_3 = '#0d5e4d';
waterCol_4 = '#1f2532';

//water column every <x> pixels
var WAVE_FREQ = 5;

var WAV_PASS = 6;
//get wave count needed for screen width
var WAVE_COUNT = canvas.width / WAVE_FREQ + 1;

//surface of water height
var START_Y = canvas.height / 2.5;
//the depths
var END_Y = canvas.height;

//start height
var HEIGHT = END_Y - START_Y;

/*VARIABLES TO TWEAK*/
//spring constant
var K = 0.05;
//how fast waves spread 0 - 0.5
var SPREAD = .2;
//dampening factor
var DAMP = .005;
/*tension of spring*/
var TENSION = .01;
/*speed*/
var SPEED = 0;

var rock_source = "../images/rock.png";
var drop_source = "../images/rock.png";

var stanrock = new Image();
var standrop = new Image();

stanrock.src = rock_source;
standrop.src = drop_source;

var ROCK_WIDTH = '';
var ROCK_HEIGHT = '';

var Rock = function (x, y) {
    this.rock = stanrock;
    this.vx = 0;
    this.vy = 8;
    this.speed = 1;
    this.minvy = 4;
    this.maxvy = 18;
    this.splashed = false;
    this.x = x - (stanrock.width / 2);
    this.y = y - (stanrock.height / 2);
}

var Particle = function (r, x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.gy = .5;
    this.r = r;
    this.color = "#1c6ba0";
    this.drop = standrop;
}

//array of springs / columns for water
var springs = [];
var rocks = [];
var particles = [];

//listen for mouse click
canvas.addEventListener("mousedown", getPosition, false);


//update water droplets/particles
function updateParticles() {
    for (var i = 0; i < particles.length; i++) {
        //Math.atan2(1.5, 5.0)/(Math.PI/180)
        var thisDrop = particles[i];
        thisDrop.x += thisDrop.vx;
        thisDrop.y += thisDrop.vy;
        thisDrop.vy += thisDrop.gy;

        if (thisDrop.y > canvas.height + 200) {
            particles.splice(i, 1);
        }
    }
}
//update the springs/water
function updateWater() {
    //update springs
    for (var i = 0; i < springs.length; i++)
        springs[i].update();

    var leftDeltas = [];
    var rightDeltas = [];

    //go through and update springs based off of their siblings
    leftDeltas.length = springs.length;
    rightDeltas.length = springs.length;
    // do some passes where springs pull on their neighbours
    for (var j = 0; j < WAV_PASS; j++) {
        //create arrays for springs to the left and right of each spring/column
        for (var i = 0; i < springs.length; i++) {
            if (i > 0) {
                leftDeltas[i] = SPREAD * (springs[i].height - springs[i - 1].height);
                springs[i - 1].speed += leftDeltas[i];
            }
            if (i < springs.length - 1) {
                rightDeltas[i] = SPREAD * (springs[i].height - springs[i + 1].height);
                springs[i + 1].speed += rightDeltas[i];
            }
        }

        //update the position of each spring/column based on the sibling/delta arrays
        for (var i = 0; i < springs.length; i++) {
            if (i > 0)
                springs[i - 1].height += leftDeltas[i];
            if (i < springs.length - 1)
                springs[i + 1].height += rightDeltas[i];
        }
    }
}

function updateRocks() {
    for (var i = 0; i < rocks.length; i++) {
        var thisRock = rocks[i];
        thisRock.x += thisRock.vx;
        thisRock.y += thisRock.vy;
        thisRock.vy += thisRock.speed;

        if (thisRock.y > canvas.height + 200) {
            rocks.splice(i, 1);
        } else {
            if (thisRock.vy > thisRock.maxvy) thisRock.vy = thisRock.maxvy;
            else if (thisRock.vy < thisRock.minvy) thisRock.vy = thisRock.minvy;
        }
    }
}

/******************
	DRAW
*******************/
//draw existing water droplet particles
function drawParticles() {
    //    tempCtx.clearRect(0,0,cwidth,cheight);
    for (var i = 0; i < particles.length; i++) {
        var thisDrop = particles[i];
        //context.drawImage(thisDrop.drop, thisDrop.x, thisDrop.y);

        var ph = thisDrop.drop.height;
        var pw = thisDrop.drop.width;

        //        //with droplet image
        //        context.save();
        //        context.translate(thisDrop.x, thisDrop.y);
        //        context.rotate(-Math.atan2(thisDrop.vx, thisDrop.vy));
        //        context.drawImage(thisDrop.drop, 0, 0, pw, ph, -pw / 2, -ph / 2, pw, ph);
        //        context.restore();



        //        //just a particle
        //        context.beginPath();
        //        context.arc(thisDrop.x, thisDrop.y, thisDrop.r, 0, 2 * Math.PI, false);
        //        context.fillStyle = thisDrop.color;
        //        context.fill();



        //        meta balls
//        tempCtx.beginPath();
//        var grad = tempCtx.createRadialGradient(thisDrop.x, thisDrop.y, 1, thisDrop.x, thisDrop.y, thisDrop.r * 2);
//        grad.addColorStop(0, waterCol_2);
//        grad.addColorStop(.4, waterCol_1);
//        tempCtx.fillStyle = grad;
//        tempCtx.arc(thisDrop.x, thisDrop.y, thisDrop.r, 0, Math.PI * 2);
//        tempCtx.fill();


    }

    if (particles.length > 0)
        meta();
}

function meta() {
    var imageData = tempCtx.getImageData(0, 0, cwidth, cheight);
    var pix = imageData.data;
    var threshold = 205;

    for (var i = 0, n = pix.length; i < n; i += 4) {
        if (pix[i + 3] < threshold) {
            pix[i + 3] /= 6;
            if (pix[i + 3] > threshold / 4) {
                pix[i + 3] = 0;
            }
        }
    }
    context.putImageData(imageData, 0, 0);
}

//draw rocks from array
function drawRocks() {
    for (var i = 0; i < rocks.length; i++) {
        var thisRock = rocks[i];
        context.drawImage(thisRock.rock, thisRock.x, thisRock.y);
    }
}
//draw water/columns/springs 
function drawWater() {
    for (var i = 0; i < springs.length; i++) {
        if (i != springs.length - 1) {
            connectSprings(springs[i], springs[i + 1]);
        }
    }
}
//for each spring(lines) fill as a trapezoid
function connectSprings(vOne, vTwo) {
    //water gradient
    //    var randBlue = "217";
    //    var opacity = 0.55; //55% visible

    //    var col1 = 'rgba(28,107,160,.75)';
    //    var col2 = 'rgba(20,80,120,.80)';
    //    var col3 = 'rgba(15,60,90,.85)';
    //    var col4 = 'rgba(6, 23, 37, .98)';



    var grd = context.createLinearGradient(0, vOne.height, 0, END_Y);
    grd.addColorStop(0, waterCol_1);
//    grd.addColorStop(.2, waterCol_2);
//    grd.addColorStop(.5, waterCol_3);
//    grd.addColorStop(.9, waterCol_4);

    //fill water area
    context.fillStyle = grd;
    context.beginPath();
    context.moveTo(vOne.x, vOne.height);
    context.lineTo(vTwo.x, vTwo.height);
    context.lineTo(vTwo.x, END_Y);
    context.lineTo(vOne.x, END_Y);
    context.lineTo(vOne.x, vOne.height);
    context.closePath();
    context.fill();
    //context.strokeStyle = '#0000FF';
    //context.stroke();
}

/*******************
	MISCELLANEOUS
********************/
//trigger a splash at this x coordinate with this speed
function splash(index, sp) {
    if (index >= 0 && index < springs.length) {
        springs[index].speed = sp;

        createSplashParticles(index, sp);
    }
}
//create particles at splash location
function createSplashParticles(x, speed) {
    var y = springs[x].height + stanrock.height / 3;
    x = x * WAVE_FREQ;
    if (speed > 60) {
        for (var i = 0; i < speed / 4; i++) {
            var rvx = Math.floor(Math.random() * (10)) - Math.PI;
            var rvy = -Math.floor(Math.random() * Math.sqrt(speed) * 1.2);
            var rr = Math.random() * 25;
            //            console.log(rvx);
            //            console.log(rvy);
            var newDrop = new Particle(rr, Math.floor(Math.random() * 20) + x, y, rvx, rvy);
            particles[particles.length] = newDrop;
        }
    }
}
//creaate splash on mouse click
function getPosition(event) {
    var x = event.x;
    var y = event.y;

    var arock = new Rock(x, y);
    rocks[rocks.length] = arock;
}
//x coord of closest water column/spring
function getRealX(x) {
    if (x > 0)
        x = (Math.ceil(x / WAVE_FREQ) * WAVE_FREQ) / WAVE_FREQ;
    else if (x < 0)
        x = (Math.floor(x / WAVE_FREQ) * WAVE_FREQ) / WAVE_FREQ;
    else
        x = x;

    return x;
}

/**************
	COLLISION
***************/
function collide() {
    for (var i = 0; i < rocks.length; i++) {
        var thisRock = rocks[i];
        var realx = getRealX(thisRock.x + thisRock.rock.width / 2);

        var thisSpring = springs[realx];

        if (thisRock.splashed == false) {
            if ((thisSpring.height <= thisRock.y + thisRock.vy) &&
                (thisSpring.height >= thisRock.y - thisRock.vy)) {
                thisRock.splashed = true;
                thisRock.speed = -.5;
                splash(realx, Math.pow(thisRock.vy, 2) / 2);
            }
        }
    }

    for (var i = 0; i < particles.length; i++) {
        var thisDrop = particles[i];
        var realx = getRealX(thisDrop.x);

        var thisSpring = springs[realx];
        if (thisSpring) {
            if (thisSpring.height <= thisDrop.y) {
                particles.splice(i, 1);
            }
        }
    }
}

/********************
	ANIMATION LOOP
*********************/
//ANIMATION
if (!window.requestAnimFrame) {
    window.requestAnimFrame = (function () {
        return (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    })();
}

/*main loop for animation*/
function loop() {
    tempCtx.clearRect(0, 0, cwidth, cheight);
    context.clearRect(0, 0, cwidth, cheight);

    update();
    draw();

    requestAnimFrame(function () {
        loop();
    });
}

//update things
function update() {
    updateWater();
    updateRocks();
    updateParticles();

    collide();

    var randomPosition = Math.random();
    if (randomPosition > 0.85) {
        var arock = new Rock(620, 100);
        rocks[rocks.length] = arock;
    }
}

//draw to canvas
function draw() {
    drawParticles();
    //    drawRocks();
    drawWater();
}

/***********
	UPDATE
************/

/*****************
	INITIALIZE
******************/
//initialize springs
function init() {
    for (var i = 0; i < WAVE_COUNT; i++) {
        var nw = {};
        nw.x = i * WAVE_FREQ;
        nw.speed = SPEED;
        nw.height = HEIGHT;
        nw.update = function () {
            var x = HEIGHT - this.height;
            this.speed += TENSION * x - this.speed * DAMP;
            this.height += this.speed;
        };

        springs[i] = nw;
    }
    loop();
}

/*****************
	START THe GAME
******************/

window.onload = function () {
    console.log("All elements are loaded!");
    init();
}