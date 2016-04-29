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

	var hoganRunsTotal = 0;
	var insaneRunsTotal = 0;
	var uRunsTotal = 0;
	var wrigRunsTotal = 0;
	var bestRunsTotal = 0;
	var stubbyRunsTotal = 0;
	var sanoRunsTotal = 0;
	var eaglesRunsTotal = 0;
	var bcRunsTotal = 0;
	var fatherRunsTotal = 0;

	for(var i = 0; i < 23; i++){
		for(var x = 0; x < matchupData[i].length; x++){
			var teamNow;

			if(matchupData[i][x].Name.substring(0,1) == "#"){
				teamNow = matchupData[i][x].Name.substring(matchupData[i][x].Name.indexOf(" ") + 1);
			} else {
				teamNow = matchupData[i][x].Name;
			}
			
			if(teamNow == teamNames[year][0]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					hoganRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					hoganRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][1]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					insaneRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					insaneRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][2]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					uRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					uRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][3]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					wrigRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					wrigRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][4]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					bestRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					bestRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][5]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					stubbyRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					stubbyRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][6]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					sanoRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					sanoRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][7]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					eaglesRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					eaglesRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][8]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					bcRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					bcRunsTotal += parseInt(matchupData[i][x][category]);
				}
			} else if(teamNow == teamNames[year][9]){
				if(category == "AVG" || category == "ERA" || category == "WHIP"){
					fatherRunsTotal += parseFloat(matchupData[i][x][category]);
				} else {
					fatherRunsTotal += parseInt(matchupData[i][x][category]);
				}
			}
		}

		if(category == "AVG" || category == "ERA" || category == "WHIP"){
			hoganHeroes.push([i, (hoganRunsTotal/(i+1))]);
			insane.push([i, (insaneRunsTotal/(i+1))]);
			u.push([i, (uRunsTotal/(i+1))]);
			wrig.push([i, (wrigRunsTotal/(i+1))]);
			best.push([i, (bestRunsTotal/(i+1))]);
			stubby.push([i, (stubbyRunsTotal/(i+1))]);
			sano.push([i, (sanoRunsTotal/(i+1))]);
			eagles.push([i, (eaglesRunsTotal/(i+1))]);
			bc.push([i, (bcRunsTotal/(i+1))]);
			father.push([i, (fatherRunsTotal/(i+1))]);
		} else {
			hoganHeroes.push([i, hoganRunsTotal]);
			insane.push([i, insaneRunsTotal]);
			u.push([i, uRunsTotal]);
			wrig.push([i, wrigRunsTotal]);
			best.push([i, bestRunsTotal]);
			stubby.push([i, stubbyRunsTotal]);
			sano.push([i, sanoRunsTotal]);
			eagles.push([i, eaglesRunsTotal]);
			bc.push([i, bcRunsTotal]);
			father.push([i, fatherRunsTotal]);
		}
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