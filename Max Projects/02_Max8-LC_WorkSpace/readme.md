# Max8 LC_WorkSpace
![](https://github.com/L4COUR/L4COUR_Max-Patchers/blob/master/Max%20Projects/02_Max8-LC_WorkSpace/media/LC_WorkSpace%20Patch%202019-05-19%20at%2019.11.32.png)

This patch is my first patch made with Max 8. This is the current patch as of the 18-05-2019. The idea with the patch is to create an environment for working with external sound design equipment. At the moment I am using the moog mother-32 alongside the moog DFAM, which I am interested in controlling via MIDI and CC messages through the Max/MSP environment. The patch consists of three major chunks of max objects
1) The Audio Interface, which is the input for the incoming channels from the Scarlett 6i6 USB soundcard </br>

2) Master, Record, MIDI Setup collection: This serves the audio output aswell as specifying the MIDI i/o, and lastly the Recording environment that records the master output and saves it locally on your machine by a given file-name through the
sfrecord~ object
</br>

3) this final chunk is the main workspace, within which I can conduct experiments with various max-objects in combination with my external gear. Currently this space is partly occupied by some MIDI message experiments, but it could be anything! </br>

## Further development

I made it more convinient to use the sfrecord~ object, in terms of storing and organizing sound-files in specified local directories on my machine. I utilized the Node for Max framework that was integrated into the Max 8 software, in concert with the File-System node package. The reason for adding this feature was to make it more convinient for me to use the sfrecord~ object and keep my sound files organized by date in a folder that is easily accessable from within Ableton Live. Moreover, it was a pretty good excuse to work with Node for Max and really get more into using Javascript inside the Max-environment.

``` javascript
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
```

Using the sfrecord~ in conjunction with this node.script save.js, makes it easy to name and store audio files, made within the LC_WorkSpace, in folders that are easily accesible from the Ableton Live environment. The seamless transitioning from the experimental and abstract DSP sound design environment of Max/MSP, and into the familiar tools of Ableton Live, provides a very rigourous engagement with the material. I find that being able to really dive into the extreme complexity of seamless DSP between sound, video, images and other types of media, and combine these in order to create new and interesting media only to then further transform the aesthetic qualities through the means of a DAW, gives the creator an insane amount of malleble control.

![](https://github.com/L4COUR/L4COUR_Max-Patchers/blob/master/Max%20Projects/02_Max8-LC_WorkSpace/media/LC_WorkSpace_NodeScript.gif)

## 17-07-19:Update - Adding Snippet functionality

It has now been a couple of weeks since I created this workspace patch. While this patch is great for quickly recording and storing the sounds of a given patch, I found it tedious to constaly upon the same patch up and copy and connect stuff whenever I wanted to work with it in Live. The solution to this seems to be the build-in "snippet"-functionality, which is a great feature that always the user to highlight certain parts of a patch and save it as a snippet that can be dragged into a new patcher. 

In order for this to work with this rather complicated snippet however we need to make the "save.js"-file globally available in Max's directory. Now, I don't know if this is how you are supposed to do it. So, I opened the help-patch for node4max, and found a globally available .js file called maxnode-basics.js. I then located the file to its designated folder inside the max-directory. I then just moved the "save.js" file to this exact location: /Max/Contents/Resources/C74/packages/Node For Max/help

![file path](https://github.com/L4COUR/L4COUR_Max-Patchers/blob/master/Max%20Projects/02_Max8-LC_WorkSpace/media/file-path%20for%20save.js-file.png)

Now I can easily drag in the workspace recorder as a snippet into any patcher at any time that I want it, while having the node script working as it should.

## sources:
- [Node for Max: Getting Started](https://www.youtube.com/watch?v=QuIcEHJSwz8)
- [Delicious Max 8 Tutorial 2: Node for Max](https://www.youtube.com/watch?v=RR5AlDgYI2s)
- [Learn nodejs, Renaming and removing files](https://www.youtube.com/watch?v=z5PmB_NWlgQ&t=196s)
- [Node.js Reference](https://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath)

