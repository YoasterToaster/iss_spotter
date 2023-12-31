/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes((passTimes));
});

// fetchMyIP((error, ip) => {
//   // use request to fetch IP address from JSON API
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   fetchCoordsByIP(ip, (error, data) => {
//     console.log(data);
//     fetchISSFlyOverTimes(null, data);
//   });

//   nextISSTimesForMyLocation((error, passTimes) => {
//     if (error) {
//       return console.log("It didn't work!", error);
//     }
//     // success, print out the deets!
//     console.log(passTimes);
//   });

//   console.log('It worked! Returned IP:' , ip);
  
// // {"ip":"174.119.175.95"}
// });

module.exports = { fetchMyIP };