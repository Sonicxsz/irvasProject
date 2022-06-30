
function image(){
    const workSection = document.querySelector('.works'),
    imgPopup = document.createElement('div'),
    bigImg = document.createElement('img');
    bigImg.style.width = '700px';
    bigImg.style.height = '600px';
    imgPopup.style.backgroundColor = '#00000072';

 


  workSection.addEventListener('click', (e) =>{
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
  
    imgPopup.appendChild(bigImg);
      e.preventDefault();
      if(e.target && e.target.classList.contains('preview')){
          imgPopup.style.display ='flex';
          let path = e.target.parentNode.getAttribute('href');
          bigImg.setAttribute('src', path);
          document.body.style.overflow = 'hidden';
      }

      if(e.target && e.target.matches('div.popup')){
          imgPopup.style.display = 'none';
          document.body.style.overflow = ''
      }
  });

}

export default image;