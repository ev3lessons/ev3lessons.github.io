// Google Saving System 1.0

// Client ID and API key from the Developer Console
var CLIENT_ID = "770638819380-lib9n1cq2t7kg3171fkrpm9jfpn831lh.apps.googleusercontent.com";
var API_KEY = '';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');
var values = []
var newArr = []


/*
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
	
        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        //listMajors();
	displayGoogleSaves()
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

function makeSheet() {
    var spreadsheetBody = {
	//	    "title":"EV3Lessons.com FLL Into Orbit Scorer"
        // TODO: Add desired properties to the request body.
    };

    var request = gapi.client.sheets.spreadsheets.create({}, spreadsheetBody);
    request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        sheet = response.result;
	document.getElementById('sheetId').value = sheet["spreadsheetId"];
	window.localStorage.DRIOGoogleSheet = sheet["spreadsheetId"];
	var requests = [];
	// Change the spreadsheet's title.
	requests.push({
	    updateSpreadsheetProperties: {
		properties: {
		    title: 'EV3Lessons FLL Into Orbit Scorer'
		},
		fields: 'title'
	    }
	});
	var batchUpdateRequest = {requests: requests}

	gapi.client.sheets.spreadsheets.batchUpdate({
	    spreadsheetId: sheet["spreadsheetId"],
	    resource: batchUpdateRequest
	}).then((response) => {
//	    var findReplaceResponse = response.result.replies[1].findReplace;
//	    console.log(`${findReplaceResponse.occurrencesChanged} replacements made.`);
	});
	alert(created)
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}


function appendValues(spreadsheetId, range, valueInputOption, _values, callback) {
    var values = _values
    var body = {
	values: values
    };
    gapi.client.sheets.spreadsheets.values.append({
	spreadsheetId: spreadsheetId,
	range: range,
	valueInputOption: valueInputOption,
	resource: body
    }).then((response) => {
	var result = response.result;
	console.log(`${result.updates.updatedCells} cells appended.`)
	alert(savedto+' https://docs.google.com/spreadsheets/d/'+document.getElementById('sheetId').value+'/edit')
	displayGoogleSaves()
    });
}


function transposeArray(array, arrayLength){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}

function readLn(spreadsheetId, range) {
    console.log('readln '+range);
    gapi.client.sheets.spreadsheets.values.get({
	spreadsheetId: spreadsheetId,
	range: range
    }).then((response) => {
	var result = response.result;
	var numRows = result.values ? result.values.length : 0;
	console.log(result.values);
	values = result.values;
	console.log(`${numRows} rows retrieved.`);
    });
}

async function googleSaver() {
    getvar();store2d = []; 
    store.forEach(function(element) {
	tmp=element[0].split('|');
	store2d.push(tmp)
    });
    store2d = transposeArray(store2d, store2d.length);
    store2d[0].forEach(function(part, index, theArray) {
	store2d[0][index] = missionDict[part];
    });
    saveDateTimeScore();

    store2d[0].unshift(teamText+" #")
    store2d[1].unshift(document.getElementById('team_num').value)
    store2d[0].unshift(roundText+" #")
    store2d[1].unshift(document.getElementById('round_num').value)


    store2d[0].unshift(dateText)
    store2d[1].unshift(datetime)
    store2d[0].unshift(totalText)
    store2d[1].unshift(score)
    // readLn(document.getElementById('sheetId').value, 'A:A')
    // setTimeout(function()
    // {
	if (values != undefined) {
	    appendValues(document.getElementById('sheetId').value, 'A:A', 'RAW', [store2d[1]],'');
	} else {
	    appendValues(document.getElementById('sheetId').value, 'A:A', 'RAW', store2d,'');
	}
//    }, 500);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function displayGoogleSaves() {
    var range = 'Sheet1!A2:AJ'
    var spreadsheetId = document.getElementById('sheetId').value;
    document.getElementById('GoogleDisplay').innerHTML = ""
    // readLn(document.getElementById('sheetId').value, 'Sheet1!A2:AJ')
    //    setTimeout(function() {
    console.log('readln '+range);
    gapi.client.sheets.spreadsheets.values.get(
	{spreadsheetId: spreadsheetId,
	 range: range }).then((response) => {
	     var result = response.result;
	     var numRows = result.values ? result.values.length : 0;
	     console.log(result.values);
	     values = result.values;
	     console.log(`${numRows} rows retrieved.`);
	     values.forEach(function(part, index, theArray) {
		 document.getElementById('GoogleDisplay').innerHTML = document.getElementById('GoogleDisplay').innerHTML + '<br>' + saveText+" "+String(index+1)+": "+ part[0] + " "+pointsText+" - " + part[1]
		 maximumGoogle = values.length
	})
    });

//    },400);

}

var invert = function (obj) {

  var new_obj = {};

  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};

function transpose(array) {
    return array.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), []);
}



// Converter/Wrapper for the legacy loadsave(save) function
function loadGoogleSave(saveid) {
    readLn(document.getElementById('sheetId').value, 'Sheet1!A1:AJ')
    newArr = []
//    setTimeout(function() {
	values.forEach(function(part, index, theArray) {
	    part.splice(0, 1)
	    part.splice(0, 1)
	    part.splice(0, 1)
	    part.splice(0, 1)
//	    part.splice(0, 1)
	    newArr.push(part)
	})
	newArr[0].forEach(function(part, index, theArray) {
	    newArr[0][index] = invertMissionDict[part]; 
	})

	newArr = transpose(newArr, newArr.length)
	console.log(newArr)
	tmp=[];
	newArr.forEach(function(part, index, theArray) { 
	    tmp.push(part[0]+'|'+part[saveid])
	})
	console.log(tmp)
	loadsave(String(tmp))
	alert(loadedText)
//    },700);
}


/*

[[0,1,2],      [[0,3,6],
 [3,4,5].  ==>  [1,4,7],
 [6,7,8]]       [2,5,8]]

*/

invertMissionDict = invert(missionDict);


