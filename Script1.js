// JavaScript source code
//window.alert("from the JS");


var canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100, 100, 150, 150);
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(300, 200, 150, 150);
c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(500, 300, 150, 150);
c.fillStyle = 'rgba(0,255,255,0.5)';
c.fillRect(700, 400, 150, 150);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "gold";
c.stroke();

//Arch and Circle
/*c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();*/

for (var i = 0; i < 5000; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    
    c.strokeStyle = 'rgba( ' + getRandomInt(256) + ',' + getRandomInt(256) +',' + getRandomInt(256) +', 0.5)';
    
    c.stroke();
}

function getRandomInt(max) {
    var x = Math.floor(Math.random() * Math.floor(max));
    return x;
};
