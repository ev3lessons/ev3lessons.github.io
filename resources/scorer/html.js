all_mission = []

function createbutton(mission,points,description){
  window[mission] = 0
  window[mission+'save'] = 0
    document.write('<tr>\
  <td width="200" style="font-size: 100%; background-color: sky;">\
  '+description+'\
  </td>\
  </tr>\
  <tr>\
  <td>\
  <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal" style="text-align: center;">\
  <label for="yes'+mission+'">{{Yes}}</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc('+points+',\''+mission+'\',1)" name="'+mission+'" value="true" id="yes'+mission+'" checked=false>\
  <label for="no'+mission+'">{{No}}</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc(0,\''+mission+'\', 0)" name="'+mission+'"  value="false" id="no'+mission+'" checked="true">\
  </fieldset>\
  </td>\
  </tr>')
}

function createcomment(description){
  document.write('<tr>\
  <td width="200" style="font-size: 100%; color: #990000">\
  '+description+'\
  </td>\
  </tr>')
}


function starttable(mission, title, image, children, extrarows){
  x = 0
  element = 1 + 2*children.length + extrarows
  all_mission = all_mission.concat([[mission,children]])
  document.write('\
  <table style="border: 1px solid black; border-collapse: collapse; " border="1">\
  <tr>\
    <td rowspan="'+element+'"> <img src="missions/'+image+'" width="80"></td>\
    <td width="300" style="font-size: 110%; text-align: center; background-color: green; color: white;">\
  '+mission+" - "+title+": "+'\
      <i style="font-style: normal;" id="'+mission+'pts">0</i>\
    </td>\
  </tr>\
  ')
}

function endtable() {
  document.write('</tr></td></table>')
}

function createrange(mission, increment, min, max, start, description) {
  window[mission] = 0
  window[mission+'save'] = 0
  window[mission+'inc'] = increment

  document.write('<tr>\
  <td width="200" style="font-size: 100%; background-color: sky;">\
  '+description+'	  </td>\
  </tr>\
  <tr>\
  <td width="200">\
  <input type="range"  data-highlight="true" data-theme="b" data-show-value="true" name="'+mission+'" id="'+mission+'" value="'+start+'" min="'+min+'" max="'+max+'" step="1" onchange=\'recalc(this.value*'+increment+',"'+mission+'",this.value)\'>\
  <p id="'+mission+'Txt" style="color: red"></p>\
  </td>\
  </tr>')

  if (start > 0) {
    recalc(increment*start,mission)
  }

}


function startrow(width) {
  if (window.innerWidth > width) {
    //alert(screen.width)
    //alert(width)
    document.write('<td valign="top">')
  }
}
function endrow(width) {
  if (window.innerWidth < width) {
    //alert('activate')
    document.write('</td>')
  }
}

function breakrow(minwidth, maxwidth) {
  if (window.innerWidth > minwidth && window.innerWidth < maxwidth) {
    document.write('</td>')
    document.write('<td valign="top">')
  } else {
  }
}

//document.write('hi')
