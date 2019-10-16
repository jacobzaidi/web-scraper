var akl_hamilton = [6417,7001,6229,6407,6501,6211,6609,6219,6411,6423,6503,6513]
var akl_hastings = [6609, 6602]
var akl_new_plymouth = [6417,6404,6411,6423,6416,6418]
var akl_palmerston = [7001,6407,6412,6503,6513]
var akl_rotorua = [6229,6211,6210,6219,6228,6503]
var akl_taupo = [7001,6501,6609,6503,6513]
var akl_tauranga = [6357,6363,6371]
var akl_thames = [6357,6363,6371]
var akl_tirau = [7001,6501,6211,6609,6503]
var akl_tokoroa = [7001,6501,6609]
var akl_wellington = [7001,6501,6503,6513]

var hamilton_akl = []
var hastings_akl = []
var new_plymouth_akl = []
var palmerston_akl = []
var rotorua_akl = []
var taupo_akl = []
var tauranga_akl = []
var thames_akl = []
var tirau_akl = []
var tokoroa_akl = [6502,6602]
var wellington_akl = []

var rawFile = new XMLHttpRequest();
var allText;
rawFile.open("GET", "./AKL-MNK-1.txt", false);
rawFile.onreadystatechange = function () {
	if(rawFile.readyState === 4) {
		if(rawFile.status === 200 || rawFile.status == 0) {
			allText = rawFile.responseText;
		}
	}
}
rawFile.send(null);

var lines = allText.split('\n');

function submitcity() {
	var htmlString = "<table>";
	var choice;
	var origin = document.getElementById("origin").value;
	var destination = document.getElementById("destination").value;
	
	if (origin == "auckland"){
		if (destination == "hamilton"){choice = akl_hamilton;}
		if (destination == "hastings"){choice = akl_hastings;}
		if (destination == "new_plymouth"){choice = akl_new_plymouth;}
		if (destination == "palmerston"){choice = akl_palmerston;}
		if (destination == "rotorua"){choice = akl_rotorua;}
		if (destination == "taupo"){choice = akl_taupo;}
		if (destination == "tauranga"){choice = akl_tauranga;}
		if (destination == "thames"){choice = akl_thames;}
		if (destination == "tirau"){choice = akl_tirau;}
		if (destination == "tokoroa"){choice = akl_tokoroa;}
		if (destination == "wellington"){choice = akl_wellington;}
	}
	else if (destination == "auckland"){
		if (origin == "hamilton"){choice = hamilton_akl;}
		if (origin == "hastings"){choice = hastings_akl;}
		if (origin == "new_plymouth"){choice = new_plymouth_akl;}
		if (origin == "palmerston"){choice = palmerston_akl;}
		if (origin == "rotorua"){choice = rotorua_akl;}
		if (origin == "taupo"){choice = taupo_akl;}
		if (origin == "tauranga"){choice = tauranga_akl;}
		if (origin == "thames"){choice = thames_akl;}
		if (origin == "tirau"){choice = tirau_akl;}
		if (origin == "tokoroa"){choice = tokoroa_akl;}
		if (origin == "wellington"){choice = wellington_akl;}
	}
	
	for (var i = 0; i < lines.length;i++) {
		for (var j = 0; j < choice.length;j++){
			if (lines[i].includes(choice[j].toString())) {
				htmlString += "<tr><td>" + lines[i] + "</td></tr>"
			}
		}
	}
	htmlString += "</table>"
	
	document.getElementById("show_tab").innerHTML = htmlString;
}