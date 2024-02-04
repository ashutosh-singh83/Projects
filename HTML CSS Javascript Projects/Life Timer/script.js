let isDOBopen=false;
let dateOfBirth;
let settingIcon=document.querySelector("#setIcon");
let settingContent=document.querySelector(".settingContent");
let initialTextEl=document.querySelector("#initial_text");
let afterDOBbtnTextEl=document.querySelector("#afterDOBbtnText");
let yearEl=document.querySelector("#year");
let monthEl=document.querySelector("#year");
let dayEl=document.querySelector("#year");
let hourEl=document.querySelector("#year");
let minuteEl=document.querySelector("#year");
let secondEl=document.querySelector("#year");
const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
  };
  
const toggleDOBselector=()=>{
    if(isDOBopen){
        settingContent.classList.add("hide");
    }else{
        settingContent.classList.remove("hide");
    }
    isDOBopen=!isDOBopen;
    console.log("Toggle",isDOBopen);
}
settingIcon.addEventListener("click",toggleDOBselector);
const updateAge=()=>{
    const currentDate=new Date();
    const dateDiff=currentDate-dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;
  
  yearEl.innerHTML=makeTwoDigitNumber(year);
  monthEl.innerHTML=makeTwoDigitNumber(month);
  dayEl.innerHTML=makeTwoDigitNumber(day);
  hourEl.innerHTML=makeTwoDigitNumber(hour);    
  minuteEl.innerHTML=makeTwoDigitNumber(minute);
  secondEl.innerHTML=makeTwoDigitNumber(second);
}
const contentToggler=()=>{
    updateAge();
    if(dateOfBirth){
        initialTextEl.classList.add("hide");
        afterDOBbtnTextEl.classList.remove("hide");
    }else{
        initialTextEl.classList.remove("hide");
        afterDOBbtnTextEl.classList.add("hide");
    }
}
