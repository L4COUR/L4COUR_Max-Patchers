# Max8 LC_WorkSpace
![](https://github.com/L4COUR/L4COUR_Max-Patchers/blob/master/Max%20Projects/02_Max8-LC_WorkSpace/media/Max8-LC_WorkSpace%20Patch.png)

This patch is my first patch made with Max 8. This is the current patch as of the 18-05-2019. The idea with the patch is to create an environment for working with external sound design equipment. At the moment I am using the moog mother-32 alongside the moog DFAM, which I am interested in controlling via MIDI and CC messages through the Max/MSP environment. The patch consists of three major chunks of max objects
1) The Audio Interface, which is the input for the incoming channels from the Scarlett 6i6 USB soundcard </br>

2) Master, Record, MIDI Setup collection: This serves the audio output aswell as specifying the MIDI i/o, and lastly the Recording environment that records the master output and saves it locally on your machine by a given file-name through the sfrecord~ object. </br>

3) this final chunk is the main workspace, within which I can conduct experiments with various max-objects in combination with my external gear. Currently this space is partly occupied by some MIDI message experiments, but it could be anything! </br>
