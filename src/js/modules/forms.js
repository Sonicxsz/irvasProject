
import numbers from "./numberTest";
function forms(state){
const form = document.querySelectorAll('form');
numbers('input[name="user_phone"]');

const message = {
    succes: 'Данные отправлены',
    fail: 'Что-то пошло не так',
    waiting: 'Отправляются....'
};
form.forEach(i =>{
    i.addEventListener('submit', (e)=>{
        e.preventDefault();
        const statusM = document.createElement('div');
              statusM.classList.add('status');
              i.append(statusM);
              

        const formData = new FormData(i);
        if(i.getAttribute('data-calc') === 'end'){
            for(let key in state){
                formData.append(key, state[key]);
            }
        }

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/requests', json)
        .then(data =>{
            console.log(data)
            statusM.textContent = message.succes;
        })
        .catch(data =>{
            statusM.textContent = message.fail;
        })
        .finally(() =>{
            i.reset();
            setTimeout(()=>{
                statusM.remove()
            }, 3000);
        });

    });
});

async function postData(url, body){
    document.querySelector('.status').textContent= message.waiting;
    const res = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:body
    });

    return await res.json();
}


}

export default forms;