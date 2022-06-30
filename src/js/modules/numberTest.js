function numbers(inpSelector){
const input = document.querySelectorAll(inpSelector);

input.forEach(i =>{
    i.addEventListener('input', ()=>{
        i.value = i.value.replace(/\D/, '');
    });
});
}

export default numbers;