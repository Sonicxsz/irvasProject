import numbers from "./numberTest";

function calc(state){
const width = document.querySelectorAll('#width'),
      height = document.querySelectorAll('#height'),
      winform = document.querySelectorAll('.balcon_icons_img'),
      checkbox = document.querySelectorAll('.checkbox'),
      type = document.querySelectorAll('#view_type');

    numbers('#width');
    numbers('#height');
      function getSetting(elem, prop, action){
          elem.forEach((item, i) =>{
            item.addEventListener(action, () =>{
                switch(item.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') == 'checkbox'){
                            i == 0 ? state[prop] = 'Холодное' : 'Теплое';
                            
                            elem.forEach((box, j) =>{
                                box.checked = false;
                                if(i == j){
                                    box.checked = true;
                                }
                            });
                        }else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
            });
            
          });
       
      }

      getSetting(winform, 'form', 'click');
      getSetting(checkbox, 'check', 'change');
      getSetting(width, 'width', 'input');
      getSetting(height, 'height', 'input');
      getSetting(type, 'type', 'change');


}

export default calc;