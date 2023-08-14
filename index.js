// Função para mudar a imagem baseado no tamanho de tela

function changeImageBasedOnScreenSize() {
    const imageDiv = document.getElementById('image-div');
    const screenWidth = window.innerWidth;
  
    let imagePath = '';
    let imageClass = '';
  
    if (screenWidth <= 768) { 
      imagePath = './assets/hero-mobile.jpg';
      imageClass = 'mobile-image';
    } else { 
      imagePath = './assets/hero-desktop.jpg';
      imageClass = 'desktop-image';
    }
  
    imageDiv.innerHTML = `<img src="${imagePath}" alt="Imagem" class="${imageClass}">`;
  }
  
changeImageBasedOnScreenSize();
window.addEventListener('resize', changeImageBasedOnScreenSize);

const emailInput = document.getElementById('send-mail');
const errorMessage = document.querySelector('.error-message');
const inputArea = document.querySelector('.input-area');

emailInput.addEventListener('blur', function () {
  const errorIcon = document.createElement('img'); 
  errorIcon.src = './assets/icon-error.svg';
  errorIcon.alt = 'Error Icon'; 
  errorIcon.classList.add('error-icon'); 
  
  if (emailInput.value.indexOf('@') === -1) {
    emailInput.classList.add('input-error');
    inputArea.appendChild(errorIcon);
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please provide a valid email';
  } else {
    emailInput.classList.remove('input-error');
    inputArea.removeChild(errorIcon);
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
  }
});



  