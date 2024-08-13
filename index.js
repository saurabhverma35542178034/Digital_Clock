
const backgroundImages = [
    'url("./img1.jpg")',
    'url("./img2.jpg")',
    'url("./img3.jpg")',
    'url("./img4.jpg")',
];
const body = document.body;
let i=0;

setInterval(()=>{
    body.style.backgroundImage = backgroundImages[i] ;

    if(i>3)
        i=0;
    i++;
},3000)



function update(){
    let date = new Date();
let hr = document.querySelector('.hr') ;
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let am_pm = document.querySelector('.am_pm');
let amOrPm='';

if(hr.textContent>=12)
    amOrPm='PM';
else
amOrPm='AM';


hr.innerHTML= date.getHours();
min.innerHTML=date.getMinutes();
sec.innerHTML=date.getSeconds();
am_pm.innerHTML=amOrPm;





}

setInterval(update,1000);

function setalarm()
{  

    let ihr=document.querySelector('.ihr');
    let imin=document.querySelector('.imin');
    let isec=document.querySelector('.isec');
if(ihr.textContent)
    alert("Alarm Set");
else
   alert('enter some time');
    let alamr=setInterval(()=>{
    

    
    // console.log(ihr.value);  
    let date = new Date();
    if(ihr.value==date.getHours() && imin.value==date.getMinutes())
        {
            alert("You got alarmed");
            clearInterval(alamr);

        }

},1000)
   
}