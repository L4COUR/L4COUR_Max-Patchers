const maxApi = require('max-api');
var fs = require('fs');


maxApi.post('Hello world');

fs.rename('./02_Max8-LC_WorkSpace/recording.wave', './02_Max8-LC_WorkSpace/renamingworks.wave', function(err){

  if (err) {
    console.log(err)
  } else {
    console.log("file was renamed")
  }
});
