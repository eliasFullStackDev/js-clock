/*
 * js-clock
 * version: 1.0.0
 * By: Elias Abdurrahman
 * date: july 5, 2019
 */

var app_clock = document.getElementById("app_clock");
var app_alarm = document.getElementById("app_alarm");
var app_stopwatch = document.getElementById("app_stopwatch");
var app_timer = document.getElementById("app_timer");
var alarmPopup = document.getElementById("alarmPopup");

var nav = document.getElementById("nav");

var ck = true;
var am = false;
var sh = false;
var tr = false;

// for alarm
var alarmRef;
var alarmTxt;

// for timer
var ss = 13;
var mm = 0;
var hh = 0;
var timerIntervRef;

// for stopwatch
var stopwatch_s = 0;
var stopwatch_m = 0;
var stopwatch_h = 0;
var stopwatch_started = 0;
var stopwatch_interval;