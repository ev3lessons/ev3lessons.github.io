// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// 2014 Calculate Score - FLL World Class
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
function calcScore() {
    var sect = new Array(0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0);
    var dex = 0;

//  Column 1
    if (getAnswer("A_EngineeringBasket") == "Yes")     { sect[dex] += 30; }
    if (getAnswer("A_EngineeringBasket") == "Yes" && getAnswer("A_EngineeringModel") == "Yes")  { sect[dex] += 15; }
    setScore("S_ReverseEngineering", sect[dex]);
    dex++;

    if (getAnswer("A_Door") == "Yes")      { sect[dex] += 15; }
    setScore("S_OpeningDoors", sect[dex]);
    dex++;

    if (!isNaN(parseInt(getAnswer("A_Loops")))) {
        if (parseInt(getText("A_Loops")) > 0) { sect[dex] += 10; } // 10 point bonus for 1st loop
        sect[dex] += parseInt(getText("A_Loops")) * 10;
    }
    setScore("S_ProjectBasedLearning", sect[dex]);
    dex++;
    
    if (getAnswer("A_ApprenticeshipPeople") == "Yes") { sect[dex] += 20; }
    if (getAnswer("A_ApprenticeshipPeople") == "Yes" && getAnswer("A_ApprenticeshipCircle") == "Yes") { sect[dex] += 15; }
    setScore("S_Apprenticeship", sect[dex]);
    dex++;
    
    if (getAnswer("A_SearchWheel") == "Yes") { sect[dex] += 15; }
    if (getAnswer("A_SearchWheel") == "Yes" && getAnswer("A_SearchLoop") == "Yes") { sect[dex] += 45; }
    setScore("S_SearchEngine", sect[dex]);
    dex++;

    if (getAnswer("A_SportsShot") == "Yes") { sect[dex] += 30; }
    if (getAnswer("A_SportsShot") == "Yes" && getAnswer("A_SportsBall") == "Yes") { sect[dex] += 30; }
    setScore("S_Sports", sect[dex]);
    dex++;
    
    if (getAnswer("A_RoboticsInsert") == "Yes") { sect[dex] += 25; }
    if (getAnswer("A_RoboticsInsert") == "Yes" && getAnswer("A_RoboticsLoop") == "Yes") { sect[dex] += 30; }
    setScore("S_RoboticsCompetition", sect[dex]);
    dex++;

//  Column 2
    if (getAnswer("A_SensesLoop") == "Yes")  { sect[dex] += 40; }
    setScore("S_UsingtheRightSenses", sect[dex]);
    dex++;

    if (getAnswer("A_Remote") == "Yes")         { sect[dex] += 40; }
    setScore("S_RemoteCommunicationsLearning", sect[dex]);
    dex++; 

    if (getAnswer("A_ThinkingIdea") == "Yes") { sect[dex] += 25; }
    if (getAnswer("A_ThinkingIdea") == "Yes" && getAnswer("A_ThinkingBulb") == "Yes") { sect[dex] += 15; }
    setScore("S_ThinkingOutsidetheBox", sect[dex]);
    dex++; 
    
    if (getAnswer("A_Learning") == "Yes") { sect[dex] += 25; }
    setScore("S_CommunityLearning", sect[dex]);
    dex++;

    if (getAnswer("A_SDCard") == "Yes") { sect[dex] += 30; }
    setScore("S_CloudAccess", sect[dex]);
    dex++;

    if (getAnswer("A_Condition") == "Yes") { sect[dex] += 15; }
    setScore("S_AdaptingtoChangingConditions", sect[dex]);
    dex++;


    if (!isNaN(parseInt(getAnswer("A_Penalty"))))
        { sect[dex] += parseInt(getText("A_Penalty")) * -10; }
    setScore("S_Penalties", sect[dex]);
    dex++;

    // Get Non-Engagement Total 
    var sheet = 0;
    for (var i in sect) { sheet += sect[i]; }

    if (getAnswer("A_EngagementYellow") == "Yes") { sect[dex] += 20; }
    if (getAnswer("A_EngagementYellow") == "Yes") {
        if (!isNaN(parseInt(getAnswer("A_EngagementScale"))))
        { sect[dex] += Math.ceil(parseFloat(getText("A_EngagementScale")) / 100 * sheet); }
    }
    setScore("S_Engagement", sect[dex]);
    dex++;

//  Get Grand Total
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


    if (!checkNumber("A_Loops", 0, 8)) return false;

    if (!checkRadio("A_SearchWheel")) return false;
    if (!checkRadio("A_SearchLoop")) return false;
    if (parseInt(getAnswer("A_Loops")) > 6 && getAnswer("A_SearchLoop") == "Yes") {
        changeClass("A_Loops", "Warning");
        changeClass("A_SearchLoop", "Warning");
        alert("Too many loops on scale. This is an impossible score!");
        return false;
    }

    if (!checkRadio("A_EngineeringBasket")) return false;
    if (!checkRadio("A_EngineeringModel")) return false;

    if (!checkRadio("A_Door")) return false;

    if (!checkRadio("A_ApprenticeshipPeople")) return false;
    if (!checkRadio("A_ApprenticeshipCircle")) return false;

    if (!checkRadio("A_SportsShot")) return false;
    if (!checkRadio("A_SportsBall")) return false;

    if (!checkRadio("A_RoboticsInsert")) return false;
    if (!checkRadio("A_RoboticsLoop")) return false;


    if (!checkRadio("A_SensesLoop")) return false;

    if (!checkRadio("A_Remote")) return false;

    if (!checkRadio("A_ThinkingIdea")) return false;
    if (!checkRadio("A_ThinkingBulb")) return false;

    if (!checkRadio("A_Learning")) return false;

    if (!checkRadio("A_SDCard")) return false;

    if (!checkRadio("A_Condition")) return false;

    if (!checkNumber("A_Penalty", 0, 8)) return false;

    if (!checkRadio("A_EngagementYellow")) return false;
    if (!checkNumber("A_EngagementScale", 10, 58)) return false;

    return true;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //