function timer(deadline){

    function timeRemaining(deadline){

        const t = Date.parse(deadline) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60 ) % 24),
              minutes = Math.floor(t / (1000 * 60) % 60),
              seconds = Math.floor(t / 1000 % 60);
           
              return {
                  t,
                  days,
                  hours,
                  minutes,
                  seconds
              };
    }


    function setTime(deadline){
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');
              updateTime(deadline);
              
        const timer = setInterval(()=>{
                  updateTime(deadline);
              }, 1000);

              function updateTime(deadline){
                  const t = timeRemaining(deadline);
                  days.textContent = getZero(t.days);
                  hours.textContent = getZero(t.hours);
                  minutes.textContent = getZero(t.minutes);
                  seconds.textContent = getZero(t.seconds);

                  if(t.t <= 0){
                      clearInterval(timer);
                  }
              }
    }

    function getZero(num){
        if(num < 10){
            return `0${num}`;
        }else return num;
    }

    setTime(deadline);

}

export default timer;