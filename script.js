function updateCountdown(){
    let dispday=document.querySelector('.day');
    let disphour=document.querySelector('.hour');
    let dispmin= document.querySelector('.min');
    let dispsec=document.querySelector('.sec');
    let date=new Date();
    let nxtyr=date.getFullYear()+1;
    let newyr=new Date(nxtyr,0,1);
    let diff=newyr-date;
    let dayy=Math.floor(diff/(1000*60*60*24));
    let hourr=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let minn=Math.floor((diff%(1000*60*60))/(1000*60));
    let secc=Math.floor((diff%(1000*60))/1000);
    dispday.textContent=dayy.toString().padStart(2,'0');
    disphour.textContent=hourr.toString().padStart(2,'0');
    dispmin.textContent=minn.toString().padStart(2,'0');
    dispsec.textContent=secc.toString().padStart(2,'0');
}
setInterval(updateCountdown,1000);
updateCountdown();
