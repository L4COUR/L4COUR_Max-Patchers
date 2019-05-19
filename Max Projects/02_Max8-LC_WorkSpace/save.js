const maxApi = require('max-api'); // Enables communication with Max/MSP
var fs = require('fs');            // Node package File System

const oldPath = "recording.aif";
const newPath = "/Users/Pacour/Documents/Ableton Stuff/Max8 - Recordings/";

// -- Date and Time
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

// -- The reName function finds the oldPath and moves the file to a specified local directory, aswell as renaming the file by month,day,year_filename.aif
async function reName(newName) {
  fs.renameSync(oldPath, newPath + m + today.getDate() + today.getFullYear() + '_' + newName + '.aif');
}

maxApi.addHandler('symbol', (newName) => {
  if (oldPath === null) {
    maxApi.post('no current file');
  } else {
    reName(newName);
  }
});
