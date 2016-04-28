//TODO: Refactor all the things

jQuery(function($){
//********


var displayData = function contortData(category, year){
	var hoganHeroes = [];
	var insane = [];
	var u = [];
	var wrig = [];
	var best = [];
	var stubby = [];
	var sano = [];
	var eagles = [];
	var bc = [];
	var father = [];

	var matchupData;

	switch(year){
		case 0:
			matchupData = data2013;
			break;
		case 1:
			matchupData = data2014;
			break;
		case 2:
			matchupData = data2015;
			break;
	}

	for(var i = 0; i < matchupData.length; i++){
		var hoganRuns = 0;
		var insaneRuns = 0;
		var uRuns = 0;
		var wrigRuns = 0;
		var bestRuns = 0;
		var stubbyRuns = 0;
		var sanoRuns = 0;
		var eaglesRuns = 0;
		var bcRuns = 0;
		var fatherRuns = 0;

		for(var x = 0; x < matchupData[i].length; x++){
			if(matchupData[i][x].Name == teamNames[year][0]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					hoganRuns = parseFloat(matchupData[i][x][category]);
				} else {
					hoganRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][1]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					insaneRuns = parseFloat(matchupData[i][x][category]);
				} else {
					insaneRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][2]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					uRuns = parseFloat(matchupData[i][x][category]);
				} else {
					uRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][3]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					wrigRuns = parseFloat(matchupData[i][x][category]);
				} else {
					wrigRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][4]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					bestRuns = parseFloat(matchupData[i][x][category]);
				} else {
					bestRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][5]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					stubbyRuns = parseFloat(matchupData[i][x][category]);
				} else {
					stubbyRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][6]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					sanoRuns = parseFloat(matchupData[i][x][category]);
				} else {
					sanoRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][7]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					eaglesRuns = parseFloat(matchupData[i][x][category]);
				} else {
					eaglesRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][8]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					bcRuns = parseFloat(matchupData[i][x][category]);
				} else {
					bcRuns = parseInt(matchupData[i][x][category]);
				}
			} else if(matchupData[i][x].Name == teamNames[year][9]){
				if(category == "AVG" || category == "ERA" || category || "WHIP"){
					fatherRuns = parseFloat(matchupData[i][x][category]);
				} else {
					fatherRuns = parseInt(matchupData[i][x][category]);
				}
			}
		}

		hoganHeroes.push([i, hoganRuns]);
		insane.push([i, insaneRuns]);
		u.push([i, uRuns]);
		wrig.push([i, wrigRuns]);
		best.push([i, bestRuns]);
		stubby.push([i, stubbyRuns]);
		sano.push([i, sanoRuns]);
		eagles.push([i, eaglesRuns]);
		bc.push([i, bcRuns]);
		father.push([i, fatherRuns]);
	}

	return [
		{
			data: hoganHeroes,
			label: teamNames[year][0].split(" (")[0]
		},
		{
			data: insane,
			label: teamNames[year][1].split(" (")[0]
		},
		{
			data: u,
			label: teamNames[year][2].split(" (")[0]
		},
		{
			data: wrig,
			label: teamNames[year][3].split(" (")[0]
		},
		{
			data: best,
			label: teamNames[year][4].split(" (")[0]
		},
		{
			data: stubby,
			label: teamNames[year][5].split(" (")[0]
		},
		{
			data: sano,
			label: teamNames[year][6].split(" (")[0]
		},
		{
			data: eagles,
			label: teamNames[year][7].split(" (")[0]
		},
		{
			data: bc,
			label: teamNames[year][8].split(" (")[0]
		},
		{
			data: father,
			label: teamNames[year][9].split(" (")[0]
		}
	];
}

var yearIndex = 0;

drawMultiLine(displayData("R", yearIndex), "runsMultiLine", "Runs", yearIndex);
drawMultiLine(displayData("HR", yearIndex), "homerunsMultiLine", "Home Runs", yearIndex);
drawMultiLine(displayData("RBI", yearIndex), "rbiMultiLine", "RBIs", yearIndex);
drawMultiLine(displayData("SB", yearIndex), "stolenbasesMultiLine", "Stolen Bases", yearIndex);
drawMultiLine(displayData("AVG", yearIndex), "averageMultiLine", "Batting Average", yearIndex);

drawMultiLine(displayData("K", yearIndex), "strikeoutsMultiLine", "Strikeouts", yearIndex);
drawMultiLine(displayData("W", yearIndex), "winsMultiLine", "Wins", yearIndex);
drawMultiLine(displayData("SV", yearIndex), "savesMultiLine", "Saves", yearIndex);
drawMultiLine(displayData("ERA", yearIndex), "eraMultiLine", "ERA", yearIndex);
drawMultiLine(displayData("WHIP", yearIndex), "whipMultiLine", "WHIP", yearIndex);

yearIndex = 1;

drawMultiLine(displayData("R", yearIndex), "runsMultiLine", "Runs", yearIndex);
drawMultiLine(displayData("HR", yearIndex), "homerunsMultiLine", "Home Runs", yearIndex);
drawMultiLine(displayData("RBI", yearIndex), "rbiMultiLine", "RBIs", yearIndex);
drawMultiLine(displayData("SB", yearIndex), "stolenbasesMultiLine", "Stolen Bases", yearIndex);
drawMultiLine(displayData("AVG", yearIndex), "averageMultiLine", "Batting Average", yearIndex);

drawMultiLine(displayData("K", yearIndex), "strikeoutsMultiLine", "Strikeouts", yearIndex);
drawMultiLine(displayData("W", yearIndex), "winsMultiLine", "Wins", yearIndex);
drawMultiLine(displayData("SV", yearIndex), "savesMultiLine", "Saves", yearIndex);
drawMultiLine(displayData("ERA", yearIndex), "eraMultiLine", "ERA", yearIndex);
drawMultiLine(displayData("WHIP", yearIndex), "whipMultiLine", "WHIP", yearIndex);

yearIndex = 2;

drawMultiLine(displayData("R", yearIndex), "runsMultiLine", "Runs", yearIndex);
drawMultiLine(displayData("HR", yearIndex), "homerunsMultiLine", "Home Runs", yearIndex);
drawMultiLine(displayData("RBI", yearIndex), "rbiMultiLine", "RBIs", yearIndex);
drawMultiLine(displayData("SB", yearIndex), "stolenbasesMultiLine", "Stolen Bases", yearIndex);
drawMultiLine(displayData("AVG", yearIndex), "averageMultiLine", "Batting Average", yearIndex);

drawMultiLine(displayData("K", yearIndex), "strikeoutsMultiLine", "Strikeouts", yearIndex);
drawMultiLine(displayData("W", yearIndex), "winsMultiLine", "Wins", yearIndex);
drawMultiLine(displayData("SV", yearIndex), "savesMultiLine", "Saves", yearIndex);
drawMultiLine(displayData("ERA", yearIndex), "eraMultiLine", "ERA", yearIndex);
drawMultiLine(displayData("WHIP", yearIndex), "whipMultiLine", "WHIP", yearIndex);


//********
});