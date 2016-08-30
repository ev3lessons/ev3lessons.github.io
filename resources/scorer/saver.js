store = []
function getvar() {
    count = 0
    count1 = 0
    store = []
    while (count < all_mission.length){
	count1 = 0
	while (count1 < all_mission[count][1].length) {
	    store = store.concat([[ ""+all_mission[count][1][count1] +"|"+ window[all_mission[count][1][count1]+'save']+""]])
	    //alert([[ all_mission[count][1][count1] , window[all_mission[count][1][count1]]]])
			  count1 = count1+1
	}
	count = count + 1
    }
    //alert(store)
}
function loadsave(save) {
    newsave = String(save).split(',')
    count = 0
    count1 = 0
    while (count < save.length-1){
	save1 = newsave[count].split('|')
	//alert(save1[0])
	if (document.getElementById('yes'+save1[0]) != null) {
	    if (parseInt(save1[1]) != 0)  {
		document.getElementById('yes'+save1[0]).click()	
	    } else {
		document.getElementById('no'+save1[0]).click()	

	    }
	} else {
//	    document.getElementById(save1[0]).value = parseInt(save1[1])
	    $("#"+save1[0]).val(parseInt(save1[1])).slider("refresh");
	}
		count = count + 1

    }
}
