function modal(btnSelector, modalSelector, closeSelector, closeWindows = true){
    const button = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelectorAll(closeSelector),
          windows = document.querySelectorAll('[data-modal]');

          button.forEach(i =>{
            i.addEventListener('click', (e) =>{
                e.preventDefault();
                openModal();
            });
          });

          close.forEach(i =>{
              i.addEventListener('click', closeModal);
          });
          modal.addEventListener('click', (e) =>{
            if(e.target == modal && closeWindows){
              closeModal();
            }
          });
          function openModal(){
            windows.forEach(i =>{
              i.style.display = 'none';
            });
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden';
          }

          function closeModal(){
            windows.forEach(i =>{
              i.style.display = 'none'
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
          }

          window.addEventListener('keydown', (e)=>{
            if(e.key == 'Escape'){
              closeModal();
            }
          });

}

export default modal;
