// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// 2012 Calculate Score - Senior Solutions
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
function calcScore() {
    var sect = new Array(0,0,0,0,0,0,0, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0);
    var dex = 0;

//  Column 1
    if (getAnswer("A_Region") == "Red")     { sect[dex] += 31; }
    if (getAnswer("A_Region") == "Purple")  { sect[dex] += 23; }
    if (getAnswer("A_Region") == "Green")   { sect[dex] += 16; }
    if (getAnswer("A_Region") == "Blue")    { sect[dex] += 10; }
    setScore("S_Obstacles", sect[dex]);
    dex++;

    if (getAnswer("A_Truck") == "Yes")      { sect[dex] += 20; }
    setScore("S_SupplyTruck", sect[dex]);
    dex++;

    if (getAnswer("A_Sign") == "Yes")       { sect[dex] += 30; }
    setScore("S_EvacuationSign", sect[dex]);
    dex++;

    if (getAnswer("A_Plane") == "Blue")     { sect[dex] += 30; }
    if (getAnswer("A_Plane") == "Yellow")   { sect[dex] += 20; }
    setScore("S_CargoPlane", sect[dex]);
    dex++;

//    if (getAnswer("A_Tree") == "Yes") {
//        if (getAnswer("A_Cables") == "Yes") { sect[dex] += 30; }
//    }
    if (getAnswer("A_Tree") == "Yes")       { sect[dex] += 30; }
    setScore("S_TreeBranch", sect[dex]);
    dex++;

    if (getAnswer("A_Waves") == "Yes")      { sect[dex] += 20; }
    setScore("S_Tsunami", sect[dex]);
    dex++;

    if (getAnswer("A_ClearRunway") == "Yes") { sect[dex] += 30; }
    setScore("S_Runway", sect[dex]);
    dex++;

//  Column 2
//    if (getAnswer("A_AmbulanceRegion") == "Yes") {
//        if (getAnswer("A_AmbulanceWheels") == "Yes") { sect[dex] += 25; }
//    }
    if (getAnswer("A_AmbulanceRegion") == "Yes")    { sect[dex] += 25; }
    setScore("S_Ambulance", sect[dex]);
    dex++;

    if (getAnswer("A_Relocation") == "Yes")         { sect[dex] += 20; }
    setScore("S_ConstructionRelocation", sect[dex]);
    dex++; 

    if (getAnswer("A_House") == "Yes")              { sect[dex] += 25; }
    setScore("S_HouseLift", sect[dex]);
    dex++; 
    
    if (getAnswer("A_Isolation") == "Yes")          { sect[dex] += 30; }
    setScore("S_BaseIsolationTest", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_Building"))))
        { sect[dex] += parseInt(getText("A_Building")) * 5; }
    setScore("S_CodeConstruction", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_Colors"))))
        { sect[dex] += parseInt(getText("A_Colors")) * 2; }
    setScore("S_Progress", sect[dex]);
    dex++;

    if (getAnswer("A_FamilyPeople") == "3")         { sect[dex] += 66; }
    if (getAnswer("A_FamilyPeople") == "2")         { sect[dex] += 33; }
    setScore("S_Family", sect[dex]);
    dex++;

//  Column 3
    if (!isNaN(parseInt(getAnswer("A_PetPeople"))))
    { sect[dex] += parseInt(getText("A_PetPeople")) * 15; }
    setScore("S_Pets", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_WaterPeople"))))
    { sect[dex] += parseInt(getText("A_WaterPeople")) * 15; }
    setScore("S_Water", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_SafetyRed"))))
    { sect[dex] += parseInt(getText("A_SafetyRed")) * 18; }
    if (!isNaN(parseInt(getAnswer("A_SafetyYellow"))))
    { sect[dex] += parseInt(getText("A_SafetyYellow")) * 12; }
    setScore("S_Safety", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_SupplyRed"))))
    { sect[dex] += parseInt(getText("A_SupplyRed")) * 4; }
    if (!isNaN(parseInt(getAnswer("A_SupplyYellow"))))
    { sect[dex] += parseInt(getText("A_SupplyYellow")) * 3; }
    setScore("S_SuppliesEquipment", sect[dex]);
    dex++;

    if (getAnswer("A_Robot") == "Yes") { sect[dex] += 25; }
    setScore("S_SafePlace", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_PenaltyBlue"))))
    { sect[dex] += parseInt(getText("A_PenaltyBlue")) * -23; }
    if (!isNaN(parseInt(getAnswer("A_PenaltyOutside"))))
    { sect[dex] += parseInt(getText("A_PenaltyOutside")) * -10; }
    setScore("S_GamePenalty", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_JunkLarge"))))
    { sect[dex] += parseInt(getText("A_JunkLarge")) * -13; }
    if (!isNaN(parseInt(getAnswer("A_JunkSmall"))))
    { sect[dex] += parseInt(getText("A_JunkSmall")) * -5; }
    setScore("S_JunkPenalty", sect[dex]);
    dex++;

//  Update top of page
    var sheet = 0;
    for (var i in sect) { sheet += sect[i]; }
    setScore("S_Table", sheet);

    var color = "#ffcccc";
    if (checkItems()) { color = "#ccffcc"; }
    var obj = document.getElementById("S_Table");
    obj.style.backgroundColor = color;

    return;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
function checkItems() {

    if (!checkRadio("A_Region")) return false;
    if (!checkRadio("A_Truck")) return false;
    if (!checkRadio("A_Sign")) return false;
    if (!checkRadio("A_Plane")) return false;
    if (!checkRadio("A_Tree")) return false;
//    if (!checkRadio("A_Cables")) return false;
    if (!checkRadio("A_Waves")) return false;
    if (!checkRadio("A_ClearRunway")) return false;

    if (!checkRadio("A_AmbulanceRegion")) return false;
//    if (!checkRadio("A_AmbulanceWheels")) return false;
    if (!checkRadio("A_Relocation")) return false;
    if (!checkRadio("A_House")) return false;
    if (!checkRadio("A_Isolation")) return false;
    if (!checkNumber("A_Building", 0, 13)) return false;
    if (getAnswer("A_Isolation") == "Yes" && parseInt(getAnswer("A_Building")) > 5) {
        changeClass("A_Isolation", "Warning");
        changeClass("A_Building", "Warning");
        alert("Code Construction may not be > 5 if you scored the Base Issolation Test!");
        return false;
    }

    if (!checkNumber("A_Colors", 0, 16)) return false;
    if (!checkNumber("A_FamilyPeople", 0, 3)) return false;

    if (!checkNumber("A_PetPeople", 0, 2)) return false;
    if (!checkNumber("A_WaterPeople", 0, 3)) return false;

    if (!checkNumber("A_SafetyRed", 0, 3)) return false;
    if (!checkNumber("A_SafetyYellow", 0, 3)) return false;
    var Safety = 0;
    Safety += parseInt(getAnswer("A_SafetyRed"));
    Safety += parseInt(getAnswer("A_SafetyYellow"));
    if (Safety > 3) {
        changeClass("A_SafetyRed", "Warning");
        changeClass("A_SafetyYellow", "Warning");
        alert("Too many people in safety regions (Maximum is 3 total)!");
        return false;
    }

    if (!checkNumber("A_SupplyRed", 0, 12)) return false;
    if (!checkNumber("A_SupplyYellow", 0, 12)) return false;
    var Supply = 0;
    Supply += parseInt(getAnswer("A_SupplyRed"));
    Supply += parseInt(getAnswer("A_SupplyYellow"));
    if (Supply > 12) {
        changeClass("A_SupplyRed", "Warning");
        changeClass("A_SupplyYellow", "Warning");
        alert("Too many supplies in regions (Maximum is 12 total)!");
        return false;
    }

    if (!checkRadio("A_Robot")) return false;

    if (!checkNumber("A_PenaltyBlue", 0, 4)) return false;
    if (!checkNumber("A_PenaltyOutside", 0, 4)) return false;
    var Penalty = 0;
    Penalty += parseInt(getAnswer("A_PenaltyBlue"));
    Penalty += parseInt(getAnswer("A_PenaltyOutside"));
    if (Penalty > 4) {
        changeClass("A_PenaltyBlue", "Warning");
        changeClass("A_PenaltyOutside", "Warning");
        alert("Too many roof debris items (Maximum is 4 total)!");
        return false;
    }
    if (parseInt(getAnswer("A_PenaltyBlue")) > 0 && Penalty < 4) {
        changeClass("A_PenaltyBlue", "Warning");
        changeClass("A_PenaltyOutside", "Warning");
        alert("Game Penalty error, recheck numbers!");
        return false;
    }
    
    if (!checkNumber("A_JunkSmall", 0, 5)) return false;
    if (!checkNumber("A_JunkLarge", 0, 5)) return false;

    return true;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //