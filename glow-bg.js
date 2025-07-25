const canvas = document.getElementById('glow-bg');
const ctx = canvas.getContext('2d');

let BALL_COUNT = window.innerWidth < 768 ? 10 : 20;
let balls = [];
const colors = [
  'rgba(74, 243, 184, 0.7)', // green
  'rgba(255,255,255,0.5)',   // white
  'rgba(74, 243, 184, 0.4)',
  'rgba(255,255,255,0.3)'
];
const labels = ['email us', 'call us'];

function createBalls(count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 30 + Math.random() * 30,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      label: labels[Math.floor(Math.random() * labels.length)]
    });
  }
  return arr;
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  BALL_COUNT = window.innerWidth < 768 ? 10 : 20;
  balls = createBalls(BALL_COUNT);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const ball of balls) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.shadowColor = ball.color;
    ctx.shadowBlur = 40;
    ctx.fill();
    ctx.shadowBlur = 0;
    // Draw label
    ctx.save();
    ctx.font = `bold ${Math.max(12, ball.r * 0.5)}px 'Segoe UI', Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#23272F';
    ctx.globalAlpha = 0.85;
    ctx.fillText(ball.label, ball.x, ball.y);
    ctx.globalAlpha = 1;
    ctx.restore();
    // Move
    ball.x += ball.dx;
    ball.y += ball.dy;
    // Bounce off edges
    if (ball.x - ball.r < 0 || ball.x + ball.r > canvas.width) ball.dx *= -1;
    if (ball.y - ball.r < 0 || ball.y + ball.r > canvas.height) ball.dy *= -1;
  }
  requestAnimationFrame(animate);
}
animate(); 
