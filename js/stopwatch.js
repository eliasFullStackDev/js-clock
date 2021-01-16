/*
 * js-clock
 * version: 1.0.0
 * By: Elias Abdurrahman
 * date: july 5, 2019
 */
function runStopwatch(){
    var m, s, h;
    if (stopwatch_s == 60) {
        stopwatch_s = 0;
        stopwatch_m++;
    }
    if (stopwatch_m == 60) {
        stopwatch_m = 0;
        stopwatch_h++;
    }

    if(stopwatch_s < 10){
       s = '0'+stopwatch_s;
    }else {
       s = stopwatch_s;
    }

    if(stopwatch_m < 10){
       m = '0'+stopwatch_m;
    }else {
       m = stopwatch_m;
    }

    if(stopwatch_h < 10){
       h = '0'+stopwatch_h;
    }else {
       h = stopwatch_h;
    }
    stopwatch_s++;
   
   if(stopwatch_started == 1){

    app_stopwatch.innerHTML =
    `
      <span>${h}</span>&nbsp;:&nbsp;
      <span>${m}</span>&nbsp;:&nbsp;
      <span>${s}</span>&nbsp;<br>
      <button class="stopwatch-btn stopwatch-btn-red" id="stopwatchBtn" onclick="runStopwatchStop()">Stop</button>
      <button class="stopwatch-btn stopwatch-btn-yel" id="stopwatchBtn" onclick="runStopwatchReset()">Reset</button>
    `;
   }else if(stopwatch_started == 2){
    app_stopwatch.innerHTML =
    `
      <span>${h}</span>&nbsp;:&nbsp;
      <span>${m}</span>&nbsp;:&nbsp;
      <span>${s}</span>&nbsp;<br>
      <button class="stopwatch-btn stopwatch-btn-gre" id="stopwatchBtn" onclick="runStopwatchResume()">Resume</button>
      <button class="stopwatch-btn stopwatch-btn-yel" id="stopwatchBtn" onclick="runStopwatchReset()">Reset</button>
    `;
   }else {
     app_stopwatch.innerHTML =
    `
      <span>${h}</span>&nbsp;:&nbsp;
      <span>${m}</span>&nbsp;:&nbsp;
      <span>${s}</span>&nbsp;<br>
      <button class="stopwatch-btn stopwatch-btn-gre" id="stopwatchBtn" onclick="runStopwatchStart()">Start</button>
    `;
   }
}
function runStopwatchStart(){
  stopwatch_interval = setInterval(runStopwatch, 1000);  
  stopwatch_started = 1;
  runStopwatch();
}

function runStopwatchResume(){
  stopwatch_interval = setInterval(runStopwatch, 1000);  
  stopwatch_started = 1;
  runStopwatch();
}

function runStopwatchStop(){
  clearInterval(stopwatch_interval);  
  stopwatch_started = 2;
  runStopwatch();
}

function runStopwatchReset(){
    clearInterval(stopwatch_interval);   
    stopwatch_started = 0;
    stopwatch_s = 0;
    stopwatch_m = 0;
    stopwatch_h = 0;
    runStopwatch();
}