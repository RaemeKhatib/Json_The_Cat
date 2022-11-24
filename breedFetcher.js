const request = require("request");
// const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];


// request(url, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   if (!response.statusCode === 200) {
//     console.log('statusCode:', response && response.statusCode);
//     return;
//   }// Print the response status code if a response was received

//   // Print the HTML for the Google homepage.
//   const data = JSON.parse(body);
//   const cat = data[0];
//   if (!cat) {
//     console.log("Cat not found");
//     return;
//   }
//   console.log(cat.description);
 

// });

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (!response.statusCode === 200) {
      callback('bad response:', null);
      return;
    }// Print the response status code if a response was received
  
    // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    const cat = data[0];
    if (!cat) {
      callback("Cat not found", null);
      return;
    }

    callback(null,cat.description);
   
  
  });
 

};

module.exports = {
  fetchBreedDescription
};