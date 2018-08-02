// Timer System 1.5

var audio = new Audio('ring.wav');
var CDseconds = 30, CDminutes = 2;
var CDinterval=null;

function sub() {

    if (CDseconds == 0) {
        CDseconds = 59;
        CDminutes--;
    } else {
	CDseconds--;
    }
    
    if ((CDseconds == 0) && (CDminutes == 0)) {
	audio.play();
	clearTimeout(CDinterval);
	CDinterval = null;
    }
	
    // document.getElementById('countdownTime')
//CDtime.textContent 
document.getElementById('countdownTime').innerHTML = CDminutes + ":" + (CDseconds > 9 ? CDseconds : "0" + CDseconds);
}

function CDtimer() {
    if (CDinterval == null)
	CDinterval = setInterval(sub, 1000);
}

var SWseconds = 0, SWminutes = 0, SWtenths = 0, SWinterval = null;

function add() {

    SWtenths++;
    if (SWtenths == 10) {
	SWseconds++;
	SWtenths = 0;
    }
    if (SWseconds >= 60) {
        SWseconds = 0;
        SWminutes++;
    }
    
//    document.getElementById('stopwatchTime').textContent = (SWminutes ? (SWminutes > 9 ? SWminutes : "0" + SWminutes) : "00") + ":" + (SWseconds > 9 ? SWseconds : "0" + SWseconds) + "." + SWtenths;

//    SWtime.textContent 
document.getElementById('stopwatchTime').innerHTML = (SWminutes ? (SWminutes > 9 ? SWminutes : "0" + SWminutes) : "00") + ":" + (SWseconds > 9 ? SWseconds : "0" + SWseconds) + "." + SWtenths;

}

function SWtimer() {
    if (SWinterval == null)
	SWinterval = setInterval(add, 100);
}

