/*
 * js-clock
 * version: 1.0.0
 * By: Elias Abdurrahman
 * date: july 5, 2019
 */
function runTimer(h, m, s, isSetTimer=false){
    if(isSetTimer){
        timerIntervRef = setInterval(timerSetUp, 1000);
        app_timer.innerHTML = 
        `
        <div class="timer-view"> 
            <span>${h} : ${m} : ${s}</span>
        </div>
        <div class="btn-pause-cancel">
            <button class="timer-btn-y">Pause</button> 
            <button class="timer-btn-r">Cancel</button> 
        </div>
        `;
    }else{
        clearInterval(timerIntervRef);
        var h_array = [], h_array_str;
        for(var i= 0; i < 49; i++){ 
            if(i < 10){
                h_array.push("<option value='0"+i+"'>0"+i+"</option>");
            }else{
                h_array.push("<option value='"+i+"'>"+i+"</option>");
            }
        }
        h_array_str = h_array.toString().replace(/,/g, " ");
    
    
        // Minutes & Second
        var ms_array = [], ms_array_str;
        for(var i= 0; i < 61; i++){ 
            if(i < 10){
                ms_array.push("<option value='0"+i+"'>0"+i+"</option>");
            }else{
                ms_array.push("<option value='"+i+"'>"+i+"</option>");
            }
        }
        ms_array_str = ms_array.toString().replace(/,/g, " ");
        
    app_timer.innerHTML = 
    `
    <div class="timer-ap ">
        <div class="timer-h">
            <label>Hours</label>
            <select name="" id="timer_hours">
                ${h_array_str}
            </select> 
        </div>
        <div class="timer-m">
            <label>Minutes</label>
            <select name="" id="timer_minutes">
            ${ms_array_str}
            </select> 
        </div>
        <div class="timer-m">
        <label>Seconds</label>
        <select name="" id="timer_seconds">
        ${ms_array_str}
        </select> 
    </div>
            <button class="timer-btn" onclick="startTimer()">Start</button> 
        </div>
    `;
    }
}
function startTimer(){
    var timer_hours_str, timer_minutes_str, timer_seconds_str;

    timer_hours_str = document.getElementById("timer_hours").value;
    timer_minutes_str = document.getElementById("timer_minutes").value;
    timer_seconds_str = document.getElementById("timer_seconds").value;
    hh = Number(timer_hours_str);
    mm = Number(timer_minutes_str);
    ss = Number(timer_seconds_str);
    runTimer(timer_hours_str, timer_minutes_str, timer_seconds_str, true);
}
function timerSetUp(pauseClicked = false){
    var end = false;
    var hhOutput,mmOutput,ssOutput;
    if(ss == 0){
        ss = 60;
        if(mm == 0){
            mm = 59;
            hh--;
            if(hh == -1){
                clearInterval(timerIntervRef);
                end = true;
            }
        }else{
            mm--;
        }
    }
    if(pauseClicked){
        if(hh > 9){
            hhOutput = hh;
        }else{
            hhOutput = '0'+hh;
        }

        if(mm > 9){
            mmOutput = mm;
        }else{
            mmOutput = '0'+mm;
        }

        if(ss > 9){
            ssOutput = ss;
        }else{
            ssOutput = '0'+ss;
        }
     app_timer.innerHTML = 
            `
            <div class="timer-view"> 
                <span>${hhOutput} : ${mmOutput} : ${ssOutput}</span>
            </div>
            <div class="btn-pause-cancel">
                <button class="timer-btn-g" onclick="resumeTimer()">Resume</button> 
                <button class="timer-btn-r" onclick="runTimer(0, 0, 0, false)">Cancel</button> 
            </div>
            `;
    }else{
    if(end){
        app_timer.innerHTML = 
            `
            <div class="timer-view"> 
                <span>${'00'} : ${'00'} : ${'00'}</span>
                <audio src="music/timer.mp3" autoplay="autoplay" type="audio/mpeg"></audio>
            </div>
            <div class="btn-pause-cancel">
                <button class="timer-btn-g" onclick="runTimer(0, 0, 0, false);">RESET</button> 
            </div>
            `;
    }else{
        ss--;
        if(hh > 9){
            hhOutput = hh;
        }else{
            hhOutput = '0'+hh;
        }

        if(mm > 9){
            mmOutput = mm;
        }else{
            mmOutput = '0'+mm;
        }

        if(ss > 9){
            ssOutput = ss;
        }else{
            ssOutput = '0'+ss;
        }
        app_timer.innerHTML = 
            `
            <div class="timer-view"> 
                <span>${hhOutput} : ${mmOutput} : ${ssOutput}</span>
            </div>
            <div class="btn-pause-cancel">
                <button class="timer-btn-y" onclick="pauseTimer()">Pause</button> 
                <button class="timer-btn-r" onclick="runTimer(0, 0, 0, false)">Cancel</button> 
            </div>
            `;
    }
  }
}

function pauseTimer(){
    clearInterval(timerIntervRef);    
    timerSetUp(true);
}
function resumeTimer(){
    clearInterval(timerIntervRef); 
    timerSetUp();
    timerIntervRef = setInterval(timerSetUp, 1000);
}