allmission = 0

function checkbuttonconflict(mission1,mission2,priority) {
  if (document.getElementById('yes'+mission1).checked == true && document.getElementById('yes'+mission2).checked == true) {
    if (priority != mission1) {
      document.getElementById('yes'+mission1).checked = false
      $('#no'+mission1).trigger('click');
    }
    if (priority != mission2) {
      document.getElementById('yes'+mission2).checked = false
      $('#no'+mission2).trigger('click');
    }
    $("input[type='radio']").attr("checked",true).checkboxradio("refresh");
  }
}

conflicts = []
function createbuttonconflict(conflict,mission,priority){
  conflicts = conflicts.concat([[conflict,mission,priority]])
}

enables = []
function createbuttonenables(mission,enabled){
  enables = enables.concat([[mission,enabled]])
}

function checkbuttonenables(mission,enabled) {
  if (document.getElementById('yes'+mission).checked == true) {
    $('#no'+enabled).checkboxradio('enable');
    $('#yes'+enabled).checkboxradio('enable');
  }
}
enables2 = []
function createsliderenables(mission,enabled){
  enables2 = enables2.concat([[mission,enabled]])
}

function checksliderenables(mission,enabled) {
  if (document.getElementById(mission).value == 2) {
    $('#no'+enabled).checkboxradio('enable');
    $('#yes'+enabled).checkboxradio('enable');
  }
}

function check_missions(mission) {
  conflictcount = 0
  while (conflictcount < conflicts.length){
    if (conflicts[conflictcount][2] == '') {
      checkbuttonconflict(conflicts[conflictcount][0],conflicts[conflictcount][1],mission)
    }
    else {
      checkbuttonconflict(conflicts[conflictcount][0],conflicts[conflictcount][1],conflicts[conflictcount][2])
    }
    conflictcount = conflictcount + 1
  }
  enablecount = 0
  while (enablecount < enables.length){
    thismission = enables[enablecount][1]
      $('#no'+thismission).checkboxradio('disable');
      $('#yes'+thismission).checkboxradio('disable');
    enablecount = enablecount + 1
  }
  enablecount = 0
  while (enablecount < enables2.length){
    thismission = enables2[enablecount][1]
      $('#no'+thismission).checkboxradio('disable');
      $('#yes'+thismission).checkboxradio('disable');
    enablecount = enablecount + 1
  }
  enablecount = 0
  while (enablecount < enables.length){
    checkbuttonenables(enables[enablecount][0],enables[enablecount][1])
    enablecount = enablecount + 1
  }
  enablecount = 0
  while (enablecount < enables2.length){
    checksliderenables(enables2[enablecount][0],enables2[enablecount][1])
    enablecount = enablecount + 1
  }
  enablecount = 0
  while (enablecount < enables.length){
    thismission = enables[enablecount][1]
    if ($('#no'+thismission).is(':disabled')) {
      document.getElementById('yes'+thismission).checked = false
      document.getElementById('no'+thismission).checked = true
      recalc(0,thismission,0)
      // $('yes'+thismission).checkboxradio("refresh");
      // $('no'+thismission).checkboxradio("refresh");
    }
    enablecount = enablecount + 1
  }
  enablecount = 0
  while (enablecount < enables2.length){
    thismission = enables2[enablecount][1]
    if ($('#no'+thismission).is(':disabled')) {
      document.getElementById('yes'+thismission).checked = false
      document.getElementById('no'+thismission).checked = true
      recalc(0,thismission,0)
      // $('yes'+thismission).checkboxradio("refresh");
      // $('no'+thismission).checkboxradio("refresh");
    }
    enablecount = enablecount + 1
  }
  $("input[type='radio']").attr("checked",true).checkboxradio("refresh");
}


savepts = 0
maxwater = 5
fountainUsed = 0
treatmentUsed = 1
flowerUsed = 0
stackUsed = 0

function recalc(points,mission,saveValue){

  // if (alt == 1 && points == 0) {
  //   savepts = 1
  // } else if (alt == 1 && points != 0) {
  //   savepts = points
  // } else if (alt > 1 && points != 0) {
  //   savepts = alt
  // } else {
  //   savepts = 0
  // }
  //var mission = 'hi'
  window[mission] = points
  window[mission+'save'] = saveValue

  if ((mission=="fountain")) {
      if (points > 0) {
	  fountainUsed = 1
      } else {
	  fountainUsed = 0
      }
      document.getElementById('collection2').max = maxwater - fountainUsed - treatmentUsed - flowerUsed - stackUsed
  }

  if ((mission=="flower1")) {
      if (points > 0) {
	  flowerUsed = 1
      } else {
	  flowerUsed = 0
      }
      document.getElementById('collection2').max = maxwater - fountainUsed - treatmentUsed - flowerUsed - stackUsed
  }

  if ((mission=="watertreatment")) {
      if (points > 0) {
	  treatmentUsed = 0
      } else {
	  treatmentUsed = 1
      }
      document.getElementById('collection2').max = maxwater - fountainUsed - treatmentUsed - flowerUsed - stackUsed
  }

  if ((mission=="collection3")) {
      if (points > 0) {
	  stackUsed = 1
      } else {
	  stackUsed = 0
      }
      document.getElementById('collection2').max = maxwater - fountainUsed - treatmentUsed - flowerUsed - stackUsed
  }

  counter = 0
  allmission = 0
  while (counter < all_mission.length){
    counter1 = 0
    thismission = 0
    while (counter1 < all_mission[counter][1].length){
      thismission = window[all_mission[counter][1][counter1]] + thismission
      //alert(thismission)
      counter1 = counter1 + 1
      //		alert(allmission)
    }
    allmission = allmission + thismission
    document.getElementById(all_mission[counter][0]+"pts").innerHTML = thismission
    counter = counter+1
  }

  document.getElementById('allpoints').innerHTML = allmission

    var ranges = $("input[data-type='range']");
//    var radios = $("input[type='radio']");

    ranges.slider("refresh");
//    radios.checkboxradio("refresh");

}
