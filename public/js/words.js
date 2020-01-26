let startDate = new Date(2019, 0, 12);
let currentDate = new Date();
let diffMilliSeconds = currentDate.getTime() - startDate.getTime();
let delta = diffMilliSeconds / 1000;
let numDay = Math.floor(delta / 86400);
delta -= numDay * 86400;
let numHour = Math.floor(delta / 3600) % 24;
delta -= numHour * 3600;
let numMinute = Math.floor(delta / 60) % 60;
delta -= numMinute * 60;
let numSec = Math.floor(delta % 60); 

let count = numDay + " " + numHour + ":" + numMinute + " " + numSec;

let wordList = [];
let row = 1;
let col = 1;
for (let char of count) {
	if (char === " ") {
		col++;
		continue;
	}
	wordList.push(char);
	wordList.push("");
	wordList.push("");
	wordList.push(col);
	wordList.push(row);
	col++;
}
export var words = wordList;