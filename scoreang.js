
var points = 0;
var M01 = 0;
var M02 = 0;
var M03 = 0;
var M03a = 0;
var M03b = 0;
var M04blu = 0;
var M04yel = 0;
var M04bla = 96;
var M04 = 96;
var M05 = 0;
var M06 = 0;
var M07a = 0;
var M07b = 0;
var M07c = 0;
var M07 = 0;
var M08a = 0;
var M08b = 0;
var M08 = 0;
var M09 = 0;
var M10 = 0; 
var M11 = 0; 
var M12 = 0;
var bboMax = 12;
var recmatMin = 0;

function resetform() {
    document.getElementById("form").reset() 
    document.getElementById("BlackBarsOrig").max = 12
    bboMax = 12;
    recmatMin = 0;
    document.getElementById("RecMatTxt").innerHTML = "";
    document.getElementById("BlackBarsOrig").value = 12;
    points = 0;
    M01 = 0;
    M02 = 0;
    M03 = 0;
    M03a = 0;
    M03b = 0;
    M04blu = 0;
    M04yel = 0;
    M04bla = 96;
    M04 = 96;
    M05 = 0;
    M06 = 0;
    M07a = 0;
    M07b = 0;
    M07c = 0;
    M07 = 0;
    M08a = 0;
    M08b = 0;
    M08 = 0;
    M09 = 0;
    M10 = 0; 
    M11 = 0; 
    M12 = 0;
    document.getElementById("westM04y").disabled = false;
    document.getElementById("safeM04y").disabled = false;
    document.getElementById("elseM04y").disabled = false;
    document.getElementById("westM04b").disabled = false;
    document.getElementById("safeM04b").disabled = false;
    document.getElementById("elseM04b").disabled = false;
    	    document.getElementById("yesM06b").disabled = false;
	    document.getElementById("noM06b").disabled = false;
	    document.getElementById("yesM06c").disabled = false;
	    document.getElementById("noM06c").disabled = false;
    calc(0,43);
}

    
function dropdowncheck(ppi, id, id2) {
    var index = document.getElementById(id2).selectedIndex;
    calc(ppi*index, id);
}

function dropdowncheck(ppi, id, id2) {
    var dropdown = document.getElementById(id2);
    //  alert(selectedDate.toString());
    //  alert("Index = " + selectedDate.selectedIndex);
    // var oStartDT = dropdown.options[selectedDate.selectedIndex].value;
    var index = dropdown.selectedIndex;
//    alert(ppi*index);
    calc(ppi*index, id);
}

function checkM01andM04() {
    var numSafeBin = 0;
    var yelperbin = $("input[name=YellowBin]:checked").val();
    var bluperbin = $("input[name=BlueBin]:checked").val();
    if (M01 == 240) {
	document.getElementById("safeM04y").checked = true;
	document.getElementById("safeM04b").checked = true;
	document.getElementById("westM04y").disabled = true;
	document.getElementById("safeM04y").disabled = true;
	document.getElementById("elseM04y").disabled = true;
	document.getElementById("westM04b").disabled = true;
	document.getElementById("safeM04b").disabled = true;
        document.getElementById("elseM04b").disabled = true;
	document.getElementById("RecMatTxt").innerHTML = "";
	yelperbin = $("input[name=YellowBin]:checked").val();
	bluperbin = $("input[name=BlueBin]:checked").val();
    } else {
	document.getElementById("westM04y").disabled = false;
	document.getElementById("safeM04y").disabled = false;
	document.getElementById("elseM04y").disabled = false;
	document.getElementById("westM04b").disabled = false;
	document.getElementById("safeM04b").disabled = false;
	document.getElementById("elseM04b").disabled = false;
	if (M01 == 180) {
	    if ((yelperbin != 0) && (bluperbin != 0))
		document.getElementById("RecMatTxt").innerHTML = "Warning: At least one of your bins must be in other team's Safety!";
	    else
		document.getElementById("RecMatTxt").innerHTML = "";
	}
	if (M01 < 180)
	    document.getElementById("RecMatTxt").innerHTML = "";
    }
    if (yelperbin == 0)
	numSafeBin++;
    if (bluperbin == 0)
	numSafeBin++;
    recmatMin = numSafeBin;
    if (recmatMin > document.getElementById("RecMat").value) {
           document.getElementById("RecMat").value = recmatMin;
    }
    M04yel = document.getElementById("YellowBars").value * $("input[name=YellowBin]:checked").val();
    M04blu = document.getElementById("BlueBars").value * $("input[name=BlueBin]:checked").val();
    M04 = M04yel + M04blu + M04bla;
    M01 = 60 * document.getElementById("RecMat").value;
}


function calc(points, id) {  
    if (id == 11) {
	M01 = points;
        checkM01andM04();
    } else if (id == 21) {
	M02 = points;
    } else if (id == 31) {
	M03a = points;
        M03 = M03a + M03b;
    } else if (id == 32) {
	M03b = points;
        M03 = M03a + M03b;
    } else if (id == 41) {
        var perbin = $("input[name=YellowBin]:checked").val() 
	M04yel = document.getElementById("YellowBars").value * perbin;
	M04 = M04yel + M04blu + M04bla;
        checkM01andM04();
    } else if (id == 42) {
        var perbin = $("input[name=BlueBin]:checked").val()
	M04blu = document.getElementById("BlueBars").value * perbin;
	M04 = M04yel + M04blu + M04bla;
        checkM01andM04();
    } else if (id == 43) {
	var bbo = document.getElementById("BlackBarsOrig").value;
	var bbb = document.getElementById("BlackBarsBin").value;
	var bbp = 12 - bbo - bbb;
	if (bbp < 0) {
	    bbb = 12 - bbo;
	    bbp = 0;
	    document.getElementById("BlackBarsBin").value = bbb;
	}
	document.getElementById('BlackBarPen').innerHTML = bbp;
	M04bla = 8 * bbo + 3 * bbb - (8 * bbp);
	M04 = M04yel + M04blu + M04bla;
    } else if (id == 44) {
	var bbo = document.getElementById("BlackBarsOrig").value;
	var bbb = document.getElementById("BlackBarsBin").value;
	var bbp = 12 - bbo - bbb;
	if (bbp < 0) {
	    bbo = 12 - bbb;
	    bbp = 0;
	    document.getElementById("BlackBarsOrig").value = bbo;
	}
	document.getElementById('BlackBarPen').innerHTML = bbp;
	M04bla = 8 * bbo + 3 * bbb - (8 * bbp);
	M04 = M04yel + M04blu + M04bla;
    } else if (id == 51) {
	M05 = points;
    } else if (id == 61) {
	if (points == 1) {
	    document.getElementById("noM06b").checked = true;
	    document.getElementById("noM06c").checked = true;
	    document.getElementById("yesM06b").disabled = true;
	    document.getElementById("yesM06c").disabled = true;
	    document.getElementById("noM06b").disabled = true;
	    document.getElementById("noM06c").disabled = true;
	    M06 = 0;
	} else {
	    document.getElementById("yesM06b").disabled = false;
	    document.getElementById("noM06b").disabled = false;
	    document.getElementById("yesM06c").disabled = false;
	    document.getElementById("noM06c").disabled = false;
	}
    } else if (id == 62) {
	M06 = points;
	document.getElementById("noM06c").checked = true;
    } else if (id == 63) {
	M06 = points;
	document.getElementById("noM06b").checked = true;
    } else if (id == 71) {
	M07a = points;
	M07 = M07a + M07b + M07c;
    } else if (id == 72) {
	M07b = points;
	M07 = M07a + M07b + M07c;
    } else if (id == 73) {
	M07c = points;
	M07 = M07a + M07b + M07c;
    } else if (id == 81) {
	M08a = points;
	M08 = M08a + M08b;
    } else if (id == 82) {
	if (points != 0) {
	    document.getElementById("yesM08a").checked = true;
	    M08a = 60;
	}
	M08b = points;
	M08 = M08a + M08b;
    } else if (id == 91) {
	M09 = points;
    } else if (id == 101) {
	M10 = points;
	if (points == 0) {
	    bboMax = 12;
	} else {
	    if (document.getElementById("BlackBarsOrig").value > 8) {
		document.getElementById("BlackBarsOrig").value=8;
            }
	    bboMax = 8;
	    calc(0,43);
	}
    } else if (id == 111) {
	M11 = points;
    } else if (id == 121) {
	M12 = points;
	document.getElementById("yesM08a").checked = true;
	M08a = 60;
	M08 = M08a + M08b;
    }

    document.getElementById('M01pts').innerHTML = M01;
    document.getElementById('M02pts').innerHTML = M02;
    document.getElementById('M03pts').innerHTML = M03;
    document.getElementById('M04pts').innerHTML = M04;
    document.getElementById('M05pts').innerHTML = M05;
    document.getElementById('M06pts').innerHTML = M06;
    document.getElementById('M07pts').innerHTML = M07;
    document.getElementById('M08pts').innerHTML = M08;
    document.getElementById('M09pts').innerHTML = M09;
    document.getElementById('M10pts').innerHTML = M10;
    document.getElementById('M11pts').innerHTML = M11;
    document.getElementById('M12pts').innerHTML = M12;
    points = M01 + M02 + M03 + M04 + M05 + M06 + M07 + M08 + M09 + M10 + M11 + M12;
    document.getElementById('points').value = points + ' ' + text[9];

    var ranges = $("input[data-type='range']");
    var radios = $("input[type='radio']");

    ranges.slider("refresh");
    radios.checkboxradio("refresh");
}

