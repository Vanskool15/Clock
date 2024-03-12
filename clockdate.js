const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//Code to Display Local Time
function startTime() {
  const today = new Date ();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let session = "AM";

  if(hours == 0) {
    hours = 12;
  }

  if(hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  

 
  document.getElementById('hrs').innerHTML = hours ;
  document.getElementById('mnts').innerHTML = minutes;
  document.getElementById('scnds').innerHTML = seconds;
  document.getElementById('am-pm').innerHTML = session;
  setTimeout(startTime,1000);

  
 
}


//Code to Display Date-Month-Year
function dateMonth() {
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let day = weekDay [d.getDay()];

//Convert  date & month to string
month = month.toString().padStart(2, '0 ');
date = date.toString().padStart(2, '0 ');


document.getElementById('month').innerHTML =  month ;
document.getElementById('date').innerHTML = date ;
document.getElementById('year').innerHTML = year;
document.getElementById('day').innerHTML = day + "," ;
}

dateMonth();

function updateNewYorkTime() {
  let date = new Date();
  let options = {timeZone: 'America/New_York', hour:'numeric', minute:'numeric', second: 'numeric' };
  let eastCoastTime = date.toLocaleString('en-US', options);
  
  document.getElementById('new-york').innerHTML = eastCoastTime;
  setTimeout(updateNewYorkTime,1000)
  
}

function updateTokyoTime() {
  let date = new Date ();
  let options = {timeZone: 'Asia/Tokyo', hour:'numeric', minute: 'numeric', second: 'numeric', hour12:true};
  let tokyoTime = date.toLocaleString('ja-JP', options);

  document.getElementById('tokyo-jap').innerHTML = tokyoTime;
  setTimeout(updateTokyoTime,1000);
}

function updateShanghaiChinaTime() {
  let date = new Date ();
  let options = {timeZone: 'Asia/Shanghai', hour:'numeric', minute: 'numeric', second: 'numeric'};
  let shanghaiTime = date.toLocaleString('en-US', options);

  document.getElementById('shanghai-china').innerHTML = shanghaiTime;
  setTimeout(updateShanghaiChinaTime,1000);
}

window.onload = function (){
  startTime();
  updateNewYorkTime();
  updateTokyoTime();
  updateShanghaiChinaTime();
  
  

};