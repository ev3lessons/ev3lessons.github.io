all_mission = []

function createbutton(mission,points,description){
  window[mission] = 0
  window[mission+'save'] = 0
    document.write('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;">\
  '+description+'\
  </td>\
  </tr>\
  <tr>\
  <td>\
  <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal" style="text-align: center;">\
  <label for="yes'+mission+'" style="font-size: 12px;">'+yes+'</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc('+points+',\''+mission+'\',1)" name="'+mission+'" value="true" id="yes'+mission+'" checked=false>\
  <label for="no'+mission+'" style="font-size: 12px;">'+no+'</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc(0,\''+mission+'\', 0)" name="'+mission+'"  value="false" id="no'+mission+'" checked="true">\
  </fieldset>\
  </td>\
  </tr>')
}

function create3button(mission,points,points2,description){
  window[mission] = 0
  window[mission+'save'] = 0
    document.write('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;">\
  '+description+'\
  </td>\
  </tr>\
  <tr>\
  <td>\
  <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal" style="text-align: center; font-size: 50%;">\
  <label for="completely'+mission+'" style="font-size: 12px;">'+completely+'</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc('+points2+',\''+mission+'\',2)" name="'+mission+'" value="completely" id="completely'+mission+'" checked=false>\
  <label for="partly'+mission+'" style="font-size: 12px;">'+partly+'</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc('+points+',\''+mission+'\',1)" name="'+mission+'" value="partly" id="partly'+mission+'" checked=false>\
  <label for="no'+mission+'" style="font-size: 12px;">'+no+'</label>\
  <input  type="radio" onclick="check_missions(\''+mission+'\');recalc(0,\''+mission+'\', 0)" name="'+mission+'"  value="false" id="no'+mission+'" checked="true">\
  </fieldset>\
  </td>\
  </tr>')
}

function createcomment(description){
  document.write('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px; color: #990000">\
  '+description+'\
  </td>\
  </tr>')
}

function createrange(mission, increment, min, max, start, description,js) {
  window[mission] = 0
  window[mission+'save'] = 0
  window[mission+'inc'] = increment

  document.write('<tr>\
  <td style="font-size: 90%; padding-left: 10px; padding-right: 5px; background-color: sky;">\
  '+description+'	  </td>\
  </tr>\
  <tr>\
  <td width="200">\
  <input type="range"  data-highlight="true" data-theme="b" data-show-value="true" name="'+mission+'" id="'+mission+'" value="'+start+'" min="'+min+'" max="'+max+'" step="1" onchange="check_missions(\''+mission+'\');recalc(this.value*'+increment+',\''+mission+'\',this.value);">\
  <p id="'+mission+'Txt" style="color: red"></p>\
  </td>\
  </tr>')

  if (start > 0) {
    recalc(increment*start,mission,start)
  }

}


function starttable(mission, title, image, children, extrarows){
  x = 0
  //width="'+(window.innerWidth/columnCount-5)+'"
  element = 1 + 2*children.length + extrarows
  all_mission = all_mission.concat([[mission,children]])
  document.write('\
  <div class="missionFmt">\
  <table style="width:100%; border: 1px solid black; border-collapse: collapse; " border="1">\
  <tr>\
    <td rowspan="'+element+'" width="60px"> <img src="missions/'+image+'" width="58px"></td>\
    <td style="font-size: 110%; text-align: center; background-color: blue; color: white;">\
  '+mission+" - "+title+": "+'\
      <i style="font-style: normal;" id="'+mission+'pts">0</i>\
    </td>\
  </tr>\
  ')
}

function endtable() {
  document.write('</tr></td></table></div>')
}

function startrow(width) {
  if (window.innerWidth > width) {
    //alert(screen.width)
    //alert(width)
    document.write('<td width="'+(100/columnCount)+'%" style="padding-right: 2px; padding-left: 2px;" valign="top">')
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
    document.write('<td width="'+(100/columnCount)+'%" style="padding-right: 2px;" valign="top">')
  } else {
  }
}

//document.write('hi')
