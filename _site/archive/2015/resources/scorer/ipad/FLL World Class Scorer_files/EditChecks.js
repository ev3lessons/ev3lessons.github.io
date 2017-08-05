// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
//                                EDIT CHECKS                                    //
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
var highlite = "#ffffff";
function highlight(obj) {
    obj.style.backgroundColor = highlite;
}
function leftClick(obj) {
    while (obj.nodeType == 1) {
        obj.style.backgroundColor = "#99ff99";
        obj = obj.nextSibling;
    }
}
function rightClick(obj) {
    while (obj.nodeType == 1) {
        obj.style.backgroundColor = "#ffffff";
        obj = obj.nextSibling;
    }
}

// Custom validator used on the JudgeTeams.aspx page
function ValidateRanks(source, arguments) {
    alert("ValidateRanks");
    arguments.IsValid = true;
    var _rows = document.getElementById("ContentBody_tbxRows").value;
    for (var _idx = 0; _idx < _rows; _idx++) {
        document.getElementById("ContentBody_gvInfo_SheetRank_" + _idx).style.backgroundColor = "transparent";
        document.getElementById("ContentBody_gvInfo_Sect1Rank_" + _idx).style.backgroundColor = "transparent";
        document.getElementById("ContentBody_gvInfo_Sect2Rank_" + _idx).style.backgroundColor = "transparent";
        document.getElementById("ContentBody_gvInfo_Sect3Rank_" + _idx).style.backgroundColor = "transparent";
    }
    for (var _idx = 0; _idx < _rows - 1; _idx++) {
        for (var _dex = _idx + 1; _dex < _rows; _dex++) {
            var _r1 = document.getElementById("ContentBody_gvInfo_SheetRank_" + _idx);
            var _r2 = document.getElementById("ContentBody_gvInfo_SheetRank_" + _dex);
            if (!isNaN(_r1.value) && !isNaN(_r2.value)) {
                if (parseInt(_r1.value) == parseInt(_r2.value)) { _r1.style.backgroundColor = "pink"; _r2.style.backgroundColor = "pink"; arguments.IsValid = false; }
            }
            var _r1 = document.getElementById("ContentBody_gvInfo_Sect1Rank_" + _idx);
            var _r2 = document.getElementById("ContentBody_gvInfo_Sect1Rank_" + _dex);
            if (!isNaN(_r1.value) && !isNaN(_r2.value)) {
                if (parseInt(_r1.value) == parseInt(_r2.value)) { _r1.style.backgroundColor = "pink"; _r2.style.backgroundColor = "pink"; arguments.IsValid = false; }
            }
            var _r1 = document.getElementById("ContentBody_gvInfo_Sect2Rank_" + _idx);
            var _r2 = document.getElementById("ContentBody_gvInfo_Sect2Rank_" + _dex);
            if (!isNaN(_r1.value) && !isNaN(_r2.value)) {
                if (parseInt(_r1.value) == parseInt(_r2.value)) { _r1.style.backgroundColor = "pink"; _r2.style.backgroundColor = "pink"; arguments.IsValid = false; }
            }
            var _r1 = document.getElementById("ContentBody_gvInfo_Sect3Rank_" + _idx);
            var _r2 = document.getElementById("ContentBody_gvInfo_Sect3Rank_" + _dex);
            if (!isNaN(_r1.value) && !isNaN(_r2.value)) {
                if (parseInt(_r1.value) == parseInt(_r2.value)) { _r1.style.backgroundColor = "pink"; _r2.style.backgroundColor = "pink"; arguments.IsValid = false; }
            }
        }
    }
}

// ***************************************************************************
var LastFocus;
function insert_keyword(keyword) {
    if (LastFocus > "") {
        var txtArea = document.getElementById(LastFocus);
        //IE        
        if (document.selection) {
            txtArea.focus();
            var sel = document.selection.createRange();
            sel.text = keyword;
        }
            //Firefox, chrome, mozilla        
        else if (txtArea.selectionStart || txtArea.selectionStart == '0') {
            var startPos = txtArea.selectionStart;
            var endPos = txtArea.selectionEnd;
            var scrollTop = txtArea.scrollTop;
            txtArea.value = txtArea.value.substring(0, startPos) + keyword + txtArea.value.substring(endPos, txtArea.value.length);
            txtArea.focus();
            txtArea.selectionStart = startPos + keyword.length;
            txtArea.selectionEnd = startPos + keyword.length;
        }
        else {
            txtArea.value += keyword.value;
            txtArea.focus();
        }
        bodysize()
    }
    return;
}

function bodysize() {
    var _lbl = document.getElementById('ContentBody_lblBody');
    var _tbx = document.getElementById('ContentBody_tbxBody');
    _lbl.innerText = _tbx.value.length + " characters (max 6000)";
}

// ***************************************************************************
function highlighter(obj, color) {
    document.getElementById('HighlightErase').className = "";
    document.getElementById('HighlightYellow').className = "";
    document.getElementById('HighlightRed').className = "";
    document.getElementById('HighlightGreen').className = "";
    document.getElementById('HighlightBlue').className = "";
    obj.className = "Border";
    highlite = color;
}

// ***************************************************************************
function fixImages() {
    var imgs, i;
    imgs = document.getElementsByTagName('img');
    for (i in imgs) {
        imgs[i].title = imgs[i].alt;
    }
    imgs = document.getElementsByTagName('area');
    for (i in imgs) {
        imgs[i].title = imgs[i].alt;
    }
}
// ***************************************************************************
function SubmitPage(ASPHandler, Actions) {
    document.forms[0].action = ASPHandler;
    document.forms[0].Actions.value = Actions;
    document.forms[0].submit();
}

function confirmAction(act, parm) {
    return confirm("Are you sure you want to " + act + " this " + parm + "?");
}

function gotoScoreboard(id) {
    if (!confirm("You must logoff to view the Scoreboard (for security reasons).\nContinue to the Scoreboard?")) { return; }
    var url = "Scoreboard.aspx?tid=" + id;
    window.location.href = url;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
function changeClass(fld, cls) {
    if (!document.forms[0].elements[fld]) {
        return;
    }
    var obj = document.forms[0].elements[fld];
    if (!obj.length) {
        obj.className = cls;
        // if (cls == "Warning") obj.focus();
        return;
    }
    for (var i = 0; i < obj.length; i++) {
        obj[i].className = cls;
    }
    // if (cls == "Warning") obj[0].focus();
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
function getAnswer(fld) {
    var obj = document.forms[0].elements[fld];
    if (!obj) {
        alert(fld && " not found. (getAnswer)");
        return "";
    }
    if (obj.selectedIndex != undefined)
        return obj.options[obj.selectedIndex].value;
    if (obj.length == undefined)
        return obj.value;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) { return obj[i].value; }
    }
    return "";
}

function setScore(fld, num) {
    var obj = document.forms[0].elements[fld];
    if (!obj) {
        alert(fld && " not found. (setScore)");
        return "";
    }
    if (num == 0) {
	obj.value = "";
    } else {
	obj.value = num.toString();
    }
    return "";
}

function checkDropDown(fld) {
    if (!document.forms[0]) return false;
    var obj = document.forms[0].elements[fld];
    if (!obj) return false;
    changeClass(fld, "");
    if (obj.selectedIndex != 0) return true;
    changeClass(fld, "Warning");
    return false;
}


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
function getRadio(fld) {
    return getAnswer(fld);
}

function setRadio(fld, val) {
    if (!document.forms[0].elements[fld])
        return;
    var objRadio = document.forms[0].elements[fld];
    for (var i = 0; i < objRadio.length; i++) {
        objRadio[i].checked = false;
        if (objRadio[i].value == val.toString()) {
            objRadio[i].checked = true;
        }
    }
}

function checkRadio(fld) {
    if (!document.forms[0])
        return false;
    var objRadio = document.forms[0].elements[fld];
    if (!objRadio)
        return false;
    changeClass(fld, "");
    for (var i = 0; i < objRadio.length; i++) {
        if (objRadio[i].checked) return true;
    }
    changeClass(fld, "Warning");
    return false;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
function getText(fld) {
    return getAnswer(fld);
}

function setText(fld, val) {
    if (!document.forms[0].elements[fld])
        return;
    document.forms[0].elements[fld].value = val;
}

function checkNumber(fld, low, high) {
    if (!document.forms[0])
        return false;
    var objText = trim(getAnswer(fld));
    if (!objText)
        return false;
    objText = trim(objText);
    if (objText.length == 0) {
        changeClass(fld, "Warning");
        return false;
    }
    if (isNaN(objText)) {
        changeClass(fld, "Warning");
        alert(fld + " must be a number between " + low + " and " + high + "!");
        return false;
    }
    if (objText < low || objText > high) {
        changeClass(fld, "Warning");
        alert(fld + " outside of valid range from " + low + " to " + high + "!");
        return false;
    }
    changeClass(fld, "");
    return true;
}

function checkText(fld) {
    var objText = document.forms[0].elements[fld];
    if (trim(objText.value).length == 0) {
        changeClass(fld, "Warning");
        return false;
    }

    changeClass(fld, "");
    return true;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

function trim(txt) {
    while ('' + txt.charAt(0) == ' ')
        txt = txt.substring(1, txt.length);

    while ('' + txt.charAt(txt.length - 1) == ' ')
        txt = txt.substring(0, txt.length - 1);

    return txt;
}

function Left(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0, n);
}

function Right(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// This check is used on the Room Rank page
function CheckUnique(sender, args) {
    var _id = sender.id.replace("val", "");
    var _val = document.getElementById(_id).value;
    var _rows = document.getElementById("ContentBody_tbxRows").value;
    var _root = _id;
    while (_root.substring(_root.length - 1) != "_") {
        _root = _id.substring(0, _id.length - 1);
    }
    for (var _dex = 0; _dex < _rows; _dex++) {
        var _oid = _root + _dex;
        var _oval = document.getElementById(_oid).value;
        if (_id != _oid && _val == _oval) {
            args.IsValid = false;
            return;
        }
    }
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
