var _timer;
var _time = 10;

function SetTimer() {
    var _disp = document.getElementById("ContentBody_theTimer_lblClock");
    var _dur = document.getElementById("ContentBody_theTimer_ddlDuration");
    _disp.innerHTML = _dur.options[_dur.selectedIndex].text;
    document.getElementById("ContentBody_theTimer_pnlTimer").style.backgroundColor = "black"
    document.getElementById("ContentBody_theTimer_lblClock").style.color = "white"
}
function StartTimer() {
    _time = document.getElementById("ContentBody_theTimer_ddlDuration").value;
    _timer = setInterval(TickTimer, 1000);
    document.getElementById("btnStart").style.display = "none";
    document.getElementById("btnReset").style.display = "inline";    
    document.getElementById("ContentBody_theTimer_ddlDuration").disabled = "disabled";
    document.getElementById("ContentBody_theTimer_ddlSound").disabled = "disabled";
    document.getElementById("ContentBody_theTimer_ddlSize").disabled = "disabled";
    document.getElementById("ContentBody_theTimer_pnlTimer").style.backgroundColor = "green"
    document.getElementById("ContentBody_theTimer_lblClock").style.color = "black"
}
function ResetTimer() {    
    clearInterval(_timer);
    SetTimer();
    document.getElementById("btnStart").style.display = "inline";
    document.getElementById("btnReset").style.display = "none";
    document.getElementById("ContentBody_theTimer_ddlDuration").disabled = "";
    document.getElementById("ContentBody_theTimer_ddlSound").disabled = "";
    document.getElementById("ContentBody_theTimer_ddlSize").disabled = "";
}
function CloseTimer() {
    ResetTimer();
    document.getElementById("ContentBody_theTimer_pnlTimer").style.display = "none";
}

function TickTimer() {
    _time--;
    var _clk = document.getElementById("ContentBody_theTimer_lblClock");
    var _pnl = document.getElementById("ContentBody_theTimer_pnlTimer");
    var minutes = Math.floor(_time / 60);
    if (minutes < 10) minutes = "0" + minutes;
    var seconds = _time % 60;
    if (seconds < 10) seconds = "0" + seconds;
    var text = minutes + ':' + seconds;
    _clk.innerHTML = text;
    _clk.style.color = "black"

    if (_time <= 0) { _pnl.style.backgroundColor = "white" }
    else if (_time <= 10) { _pnl.style.backgroundColor = "red" }
    else if (_time <= 30) { _pnl.style.backgroundColor = "gold" }
    else { _pnl.style.backgroundColor = "green" }

    if (_time == 0) {
        var _ddl = document.getElementById("ContentBody_theTimer_ddlSound");
        var _sound = _ddl.options(_ddl.selectedIndex).value;
        if (_sound != "none") document.getElementById(_sound).play();
        clearInterval(_timer);
        document.getElementById("ContentBody_theTimer_ddlDuration").disabled = "";
        document.getElementById("ContentBody_theTimer_ddlSound").disabled = "";
        document.getElementById("ContentBody_theTimer_ddlSize").disabled = "";
    }
}

/* these are not used at this time 

function PauseTimer() {
clearInterval(_timer);
} 
function ResumeTimer() {
_timer = setInterval(TickTimer, 1000);
}
*/