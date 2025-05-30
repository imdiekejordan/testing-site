const container = document.querySelector('.card-3d-container');
const card = document.getElementById('credit-card-3d');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 12; // max 12deg
  const rotateY = ((x - centerX) / centerX) * 18; // max 18deg
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 32px rgba(0,0,0,0.45)`;
});

container.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  card.style.boxShadow = '0 8px 32px rgba(0,0,0,0.45)';
}); 