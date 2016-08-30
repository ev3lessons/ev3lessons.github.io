savepts = 0
function recalc(points,mission,alt){
  if (alt == 1 && points == 0) {
    savepts = 1
  } else if (alt == 1 && points != 0) {
    savepts = points
  } else if (alt > 1 && points != 0) {
    savepts = alt
  } else {
    savepts = 0
  }
  //var mission = 'hi'
  window[mission] = points
  window[mission+'save'] = savepts

  //alert(window[mission])
  //    document.getElementById('MO1: Seal and Camera:pts').innerHTML = seal + camera
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
  counter = 0
  while (counter < conflicts.length){
    counter1 = 0
    thismission = 0
    //	alert(conflicts[counter][0]+conflicts[counter][1]+mission)
    // if (conflicts[counter][2] == '') {
      //checkbuttonconflict(conflicts[counter][0],conflicts[counter][1],mission)
    //}
    //else {
      checkbuttonconflict(conflicts[counter][0],conflicts[counter][1],conflicts[counter][2])
    //}
    counter = counter + 1
  }
  document.getElementById('allpoints').innerHTML = "Points: "+ allmission
}
