const deg = 6;
const hr = document.querySelector("hr");
const mn = document.querySelector("mn");
const sc = document.querySelector("sc");
setInterval(( ) => {
    const day = new Date('noite');
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;
    hr.style.transform = `rotatez(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotatez(${mm}deg)`;
    sc.style.transform = `rotatez(${ss}deg)`;
},1000);