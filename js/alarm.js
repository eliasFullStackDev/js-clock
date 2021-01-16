/*
 * js-clock
 * version: 1.0.0
 * By: Elias Abdurrahman
 * date: july 5, 2019
 */
function run_alarm(set_alarm, h=0, m=0, remove=false){
    if(remove) {
       clearTimeout(alarmRef);
    }
    var date = new Date();
    if(set_alarm){
        app_alarm.innerHTML=
        `
        <div class="alarm-view"> 
            <span>${h} : ${m}</span>
            <p onclick="run_alarm(false, 0, 0, true);">x</p>
        </div>
        `;
    }else{
    var h_array = [], h_array_str;
    for(var i= 0; i < 24; i++){ 
        if(i < 10){
            h_array.push("<option value='0"+i+"'>0"+i+"</option>");
        }else{
            h_array.push("<option value='"+i+"'>"+i+"</option>");
        }
    }
    h_array_str = h_array.toString().replace(/,/g, " ");


    // Minutes & Second
    var ms_array = [], ms_array_str;
    for(var i= 0; i < 60; i++){ 
        if(i < 10){
            ms_array.push("<option value='0"+i+"'>0"+i+"</option>");
        }else{
            ms_array.push("<option value='"+i+"'>"+i+"</option>");
        }
    }
    ms_array_str = ms_array.toString().replace(/,/g, " ");

    app_alarm.innerHTML = 
    `
    <div class="alarm-h">
    <label>Hour</label>
    <select id="alarm_hour">
        ${h_array_str}
     </select> 
  </div>
  <div class="alarm-m">
     <label>Minutes</label>
     <select id="alarm_minutes">
     ${ms_array_str}
      </select> 
   </div>
   <br>
   <button class="alarm-btn" onclick="saveAlarm()">Save</button> 
    `;
    }
    display();
}

function saveAlarm(){
    var dateNow = new Date();
    // dateNow.setHours(23);
    // dateNow.setMinutes(59);
    var defHour, defMinutes, convertToMs;

    var alarm_hour_str = document.getElementById("alarm_hour").value;
    var alarm_minutes_str = document.getElementById("alarm_minutes").value;

    var alarm_hour = Number(document.getElementById("alarm_hour").value);
    var alarm_minutes = Number(document.getElementById("alarm_minutes").value);
    if(dateNow.getHours() > alarm_hour){
        defHour = 23 - dateNow.getHours() + alarm_hour;
        defMinutes = Math.abs( 60 - dateNow.getMinutes() + alarm_minutes);
        convertToMs = (defHour * 60 * 60 * 1000) + (defMinutes * 60 * 1000 );
        convertToMs = convertToMs - dateNow.getSeconds() * 1000;
        alarmRef = setTimeout(setAlarmFunc, convertToMs);
    }if(dateNow.getHours() == alarm_hour){
      if(dateNow.getMinutes() > alarm_minutes){
        defHour = 23 - dateNow.getHours() + alarm_hour;
        defMinutes = Math.abs( 60 - dateNow.getMinutes() - alarm_minutes);
        convertToMs = (defMinutes * 60 * 1000 ) + (defHour * 60 * 60 * 1000);
        convertToMs = convertToMs - dateNow.getSeconds() * 1000;
        alarmRef = setTimeout(setAlarmFunc, convertToMs);
      }else{
        defHour = Math.abs(dateNow.getHours() - alarm_hour);
        defMinutes = Math.abs(dateNow.getMinutes() - alarm_minutes); 
        convertToMs = (defHour * 60 * 60 * 1000) + (defMinutes * 60 * 1000 );
        convertToMs = convertToMs - dateNow.getSeconds() * 1000;
        alarmRef = setTimeout(setAlarmFunc, convertToMs);
      }
    }else{
        if(dateNow.getMinutes() > alarm_minutes){
            defHour = Math.abs(dateNow.getHours() - alarm_hour);
            defMinutes = Math.abs(dateNow.getMinutes() - alarm_minutes);  
            convertToMs = (defHour * 60 * 60 * 1000) - (defMinutes * 60 * 1000 );
            convertToMs = convertToMs - dateNow.getSeconds() * 1000;
            alarmRef = setTimeout(setAlarmFunc, convertToMs);
        }else{
            defHour = Math.abs(dateNow.getHours() - alarm_hour);
            defMinutes = Math.abs(dateNow.getMinutes() - alarm_minutes);  
            convertToMs = (defHour * 60 * 60 * 1000) + (defMinutes * 60 * 1000 );
            convertToMs = convertToMs - dateNow.getSeconds() * 1000;
            alarmRef = setTimeout(setAlarmFunc, convertToMs);
        }   
    }

    alarmTxt = alarm_hour_str+':'+alarm_minutes_str;
    run_alarm(true, alarm_hour_str, alarm_minutes_str, false);
}

function setAlarmFunc(){
    alarmPopup.innerHTML = 
    `
    <div class="alarm-popup">
     <div class="alarm-popup-content">
         <span class="apc-1">Alarm</span>
         <span class="apc-2">${alarmTxt}</span>
         <span class="apc-3" onclick="removeAlarm()">x</span>
         <audio src="music/alarm.mp3" loop="true" autoplay="autoplay" type="audio/mpeg"></audio>
     </div>
    </div>
    `;
}

function removeAlarm(){
    alarmPopup.innerHTML = '';
    alarmTxt = '';
    run_alarm(false, 0, 0, true);
}