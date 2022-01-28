document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = 'turquoise'
    ctx.fill()
});
