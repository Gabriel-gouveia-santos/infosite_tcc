const verMaisTargets = document.querySelectorAll('.ver-mais-target');
const verMaisButtons = document.querySelectorAll('.ver-mais');

verMaisTargets.forEach((target, index) => {
  const button = verMaisButtons[index];

  if (target.textContent.length > 130) {
    target.style.overflow = 'hidden';
    target.style.textOverflow = 'ellipsis';
    target.style.display = '-webkit-box';
    target.style.WebkitLineClamp = 2;
    target.style.WebkitBoxOrient = 'vertical';

    button.style.display = 'block';
    button.textContent = 'Ver mais'; 

    button.addEventListener('click', (event) => { // Added event parameter
      event.preventDefault(); // Prevent default link behavior
      target.style.WebkitLineClamp = null;
      button.textContent = 'Ver menos'; 
      button.addEventListener('click', () => {
        target.style.WebkitLineClamp = 2;
        button.textContent = 'Ver mais'; 
      });
    });
  } else {
    button.style.display = 'none';
  }
});