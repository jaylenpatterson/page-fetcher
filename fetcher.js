const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);
let url = args[0];
let path = args[1];

let fetcher = function(url, path){
  // Makes a request to a url. Once that request is made, writes the page to the path.
  request(url, function(error, response, body) {
    let bytes = body.length;
    if(error){
      console.log("fails to download page")
    }
      fs.writeFile(path, body, err => {
        if (err) {
          console.error(err)
          return
        }
        else {
          console.log(`Downloaded and saved ${bytes} bytes to ${path} successfully!`)
        }
      });
  })
}

fetcher(url, path);

