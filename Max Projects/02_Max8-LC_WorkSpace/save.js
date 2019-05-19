const maxApi = require('max-api');
var fs = require('fs');

const newPath = "/Users/Pacour/Documents/Ableton Stuff/Max8 - Recordings/";

let today = new Date();
var month = new Array();
month[0] = "01";
month[1] = "02";
month[2] = "03";
month[3] = "04";
month[4] = "05";
month[5] = "06";
month[6] = "07";
month[7] = "08";
month[8] = "09";
month[9] = "10";
month[10] = "11";
month[11] = "12";
var m = month[today.getMonth()];

async function reName() {
  fs.renameSync('recording.aif', newPath + m + today.getDate() + today.getFullYear() + '_' + 'renamedRec.aif');
}

maxApi.addHandler('text', (dir) => {
  reName();
  maxApi.post("Renaming complete ${dir}");
});


//maxApi.outlet("wuhuuu! I love Node");
