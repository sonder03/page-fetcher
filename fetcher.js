

const fs = require('fs');


let v = process.argv.slice(2);

const request = require('request');
request(v[0], (error, response, body) => {

  fs.writeFile(v[1], body, err => {
    if (err) {
      console.error(err);
    }
    console.log("Downloaded and saved " + body.length + " bytes to " + v[1])
  });

});

console.log(v);