
setInterval(setClock,1000);

const hourHand = document.querySelector(`[data-hour-hand]`);
const minuteHand = document.querySelector(`[data-minute-hand]`);
const secondHand = document.querySelector(`[data-second-hand]`)

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio +currentDate.getHours()) / 12;

    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hoursRatio);

}



function setRotation(element, rotationRatio) {
element.style.setProperty(`--rotation`, rotationRatio * 360)
}





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
  let day = weekDay[d.getDay()];
 let options ={timeZone:'Asia/Manila', month: '2-digit', day: '2-digit', year: 'numeric'};

 let maniladate = d.toLocaleDateString('en-PH', options);

 document.getElementById('weekday').innerHTML = day;
 document.getElementById('manila-date').innerHTML = maniladate;
 



}



function updateNewYorkTime() {
  let date = new Date();
  let options = {timeZone: 'America/New_York', hour:'2-digit', minute:'numeric', second: 'numeric', weekday: 'long' };
  let option = {timeZone:'America/New_York',month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US',option);
  let eastCoastTime = date.toLocaleString('en-US', options);
 
  document.getElementById('new-york-date').innerHTML = dateFormated;
  document.getElementById('new-york').innerHTML = eastCoastTime;
  setTimeout(updateNewYorkTime,1000);
  
}

function updateTokyoTime() {
  let date = new Date ();

  let options = {timeZone: 'Asia/Tokyo', hour:'2-digit', minute: 'numeric', second: 'numeric', weekday: 'long', hour12:true};
  let option = {timeZone:'Asia/Tokyo', month: '2-digit', day: '2-digit', year: 'numeric'};

  

  let dateFormated = date.toLocaleDateString('en-US', option);
  let tokyoTime = date.toLocaleString('ja-JP', options );
  
  document.getElementById('tokyo-date').innerHTML = dateFormated;
  document.getElementById('tokyo-jap').innerHTML = tokyoTime;
  setTimeout(updateTokyoTime,1000);
}

function updateShanghaiChinaTime() {
  let date = new Date ();
  let options = {timeZone: 'Asia/Shanghai', hour:'2-digit', minute: 'numeric', second: 'numeric', weekday: 'long'};
  let option = {timeZone:'Asia/Shanghai', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);
  let shanghaiTime = date.toLocaleString('en-US', options);

  document.getElementById('shanghai-date').innerHTML = dateFormated;
  document.getElementById('shanghai-china').innerHTML = shanghaiTime;
  setTimeout(updateShanghaiChinaTime,1000);
}

function updateSydneyTime() {
  let date = new Date ();
  let options = {timeZone: 'Australia/Sydney', hour: '2-digit', minute: 'numeric', second: 'numeric', weekday:'long'};
  let option = {timeZone:'Australia/Sydney', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);
  let SydneyTime = date.toLocaleString('en-US', options);

  document.getElementById('sydney-date').innerHTML = dateFormated;
  document.getElementById('sydney-Aus').innerHTML = SydneyTime;
  setTimeout(updateSydneyTime,1000);

}

function updateBerlinTime() {
  let date = new Date();
  let options = {timeZone: 'Europe/Berlin', hour: '2-digit', minute: 'numeric', second: 'numeric', weekday: 'long'};
  let option = {timeZone:'Europe/Berlin', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);
  let berlinTime = date.toLocaleString('en-US', options);
  
  document.getElementById('berlin-date').innerHTML = dateFormated;
  document.getElementById('berlin-ger').innerHTML = berlinTime;
  setTimeout(updateBerlinTime,1000);
}

function updateLaTime() {
  let date = new Date();
  let options ={timeZone: 'America/Los_Angeles', hour: '2-digit', minute: 'numeric', second: 'numeric', weekday: 'long'};
  let option = {timeZone:'America/Los_Angeles', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);
  let losangelesTime = date.toLocaleString('en-US', options);

  document.getElementById('La-date').innerHTML = dateFormated;
  document.getElementById('los-angeles').innerHTML = losangelesTime;
  setTimeout(updateLaTime,1000);
}

function updateRiyadhTime() {
  let date = new Date();
  let options = {timeZone: 'Asia/Riyadh', hour: '2-digit', minute: 'numeric', second: 'numeric',weekday:'long'};
  let option = {timeZone:'Asia/Riyadh', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);
  let riyadhTime = date.toLocaleString('en-US', options);
  
  document.getElementById('Saudi-date').innerHTML =dateFormated;
  document.getElementById('saudi-arabia').innerHTML = riyadhTime;
  setTimeout(updateRiyadhTime,1000);
}

function updateOsloTime() {
  let date = new Date();
  let options = {timeZone: 'Europe/Oslo', hour: '2-digit', minute: 'numeric', second: 'numeric', weekday:'long'};
  let option = {timeZone:'Europe/Oslo', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);
  let osloTime = date.toLocaleString('en-US', options);
  
  document.getElementById('Oslo-date').innerHTML = dateFormated;
  document.getElementById('oslo-norway').innerHTML = osloTime;
  setTimeout(updateOsloTime,1000);

}
function updateNewZealandTime() {
  let date = new Date();
  let options = {timeZone: 'Pacific/Auckland', hour:'2-digit', minute: 'numeric', second: 'numeric', weekday: 'long'};
  let option = {timeZone:'Pacific/Auckland', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);
  
  let newZealandTime = date.toLocaleString('en-NZ',options);
  
  document.getElementById('newzeal-date').innerHTML = dateFormated;
  document.getElementById('new-zeal').innerHTML = newZealandTime;
  setTimeout(updateNewZealandTime,1000);
}

function updateOttawaTime() {
  let date = new Date();
  let options = {timeZone: 'America/Toronto', hour:'2-digit', minute: 'numeric', second: 'numeric', weekday: 'long'};
  let option = {timeZone:'America/Toronto', month: '2-digit', day: '2-digit', year: 'numeric'};
  let dateFormated = date.toLocaleDateString('en-US', option);

  let ottawaTime = date.toLocaleString('en-US', options);

  document.getElementById('Ottawa-date').innerHTML = dateFormated;
  document.getElementById('ottawa-can').innerHTML = ottawaTime;
  setTimeout(updateOttawaTime,1000);
}




window.onload = function (){
  startTime();
  updateNewYorkTime();
  updateTokyoTime();
  updateShanghaiChinaTime();
  updateSydneyTime();
  updateBerlinTime();
  updateLaTime();
  updateRiyadhTime();
  updateOsloTime();
  updateNewZealandTime();
  updateOttawaTime();
  dateMonth();
  setClock();
  

};


