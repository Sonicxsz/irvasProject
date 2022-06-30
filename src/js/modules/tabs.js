function tabs(tabSelector, contentSelector, parentSelector, activeClass, display = 'block'){
const tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector),
      parent = document.querySelector(parentSelector);    

      function hideTabs(){
          tab.forEach(i =>{
              i.classList.remove(activeClass)
          });
          content.forEach(i =>{
              i.style.display = 'none';
          });
      }

      function showTabs(i = 0){
          tab[i].classList.add(activeClass);
          content[i].style.display = display;
      }
      showTabs();
      parent.addEventListener('click', (e) =>{
          if(e.target.classList.contains(tabSelector.replace(/\./, '')) ||
          e.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))){
              tab.forEach((item, i) =>{
                  if(e.target == item || e.target.parentNode == item){
                      
                    hideTabs();
                    showTabs(i);
                  }
              });
          }
      });




}

export default tabs;