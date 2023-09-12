const deg = 6;
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
setInterval(() => {

    let day = new Date();

    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    hr.style.transform = `rotate(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotate(${mm}deg)`;
    sec.style.transform = `rotate(${ss}deg)`;
},1000);
