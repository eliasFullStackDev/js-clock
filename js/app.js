/*
 * js-clock
 * version: 1.0.0
 * By: Elias Abdurrahman
 * date: july 5, 2019
 */

function display(){
    if(ck){
        app_clock.style.display = "block";
        nav.children[0].setAttribute("class", "active");
    }else{
        app_clock.style.display = "none";
        nav.children[0].removeAttribute("class");

    }

    if(am){
        app_alarm.style.display = "block";
        nav.children[1].setAttribute("class", "active");

    }else{
        app_alarm.style.display = "none";
        nav.children[1].removeAttribute("class");

    }

    if(sh){
        app_stopwatch.style.display = "block";
        nav.children[2].setAttribute("class", "active");

    }else{
        app_stopwatch.style.display = "none";
        nav.children[2].removeAttribute("class");

    }

    if(tr){
        app_timer.style.display = "block";
        nav.children[3].setAttribute("class", "active");

    }else{
        app_timer.style.display = "none";
        nav.children[3].removeAttribute("class");
    }
}

function chane_display(n){

    if(n === 1){
        ck = true;
        am = false;
        sh = false;
        tr = false;
    }else if(n === 2){
        ck = false;
        am = true;
        sh = false;
        tr = false;
     }else if(n === 3){
        ck = false;
        am = false;
        sh = true;
        tr = false;
    }else{
        ck = false;
        am = false;
        sh = false;
        tr = true;
    }
    display();
}

function run_clock(){
    var date = new Date();
    app_clock.innerHTML = 
    `
        <span>${date.getHours()}</span>&nbsp;:&nbsp;
        <span>${date.getMinutes()}</span>&nbsp;:&nbsp;
        <span>${date.getSeconds()}</span>&nbsp;<br>
    `;
    display();
}