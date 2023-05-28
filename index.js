const container = document.querySelector('.container');
const box = document.querySelector('.box');

container.addEventListener('mousemove', (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  
  box.style.transform = `translate(${x}px, ${y}px)`;
});