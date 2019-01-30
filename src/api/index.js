// const {google} = require('googleapis');


// // let usedRows = null;
// const jwt = getJwt();
// const apiKey = getApiKey();
// const spreadsheetId = '1yFRYr-dVhrmBN0lVBdN0piOVGhQBlDGX7iOHBYgyRuU';
// const sheets = google.sheets({version: 'v4'});
// // let range = null;
// // var row = ['Ovidiu', 'Suciu', 'suciu.ovidiu@yahoo.com', 'None', 'None', 'Omnivore', 'None', 'Yes', new Date()];


// // appendSheetRow(jwt, apiKey, spreadsheetId, range, row);
// // readSheet(jwt, apiKey, spreadsheetId);
// // deleteSheetRow(jwt, apiKey, spreadsheetId);

// function getJwt() {
//   var credentials = require("./credentials.json");
//   return new google.auth.JWT(
//     credentials.client_email, null, credentials.private_key,
//     ['https://www.googleapis.com/auth/spreadsheets']
//   );
// }

// function getApiKey() {
//     var apiKeyFile = require("./api_key.json");
//     return apiKeyFile.key;
// }
  

// function errorHandler(errorCallback, error) {
//     if (errorCallback && error.response.status != 400) {
//         errorCallback(error);
//         return;
//     }
// }



// // This function appends a new row to the sheet
// function appendSheetRow(jwt, apiKey, spreadsheetId, range, row) {
//     const sheets = google.sheets({version: 'v4'});
//     sheets.spreadsheets.values.append({
//       spreadsheetId: spreadsheetId,
//       range: range,
//       auth: jwt,
//       key: apiKey,
//       valueInputOption: 'RAW',
//       resource: {values: [row]}
//     }, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       else {
//         console.log('Updated sheet: ' + result.data.updates.updatedRange);
//       }
//     });
//   }

export default {
    // This function reads the data from Sheet1 and checks how many rows are populated
    // readSheetData: function () {
    //     sheets.spreadsheets.values.get({
    //         spreadsheetId: spreadsheetId,
    //         auth: jwt,
    //         key: apiKey,
    //         range: "Sheet1"
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //     }).catch(function (error) {
    //         console.log(error);
    //     }) 
    // },
    tryThis: function (text) {
        console.log(text);
    }
}


  
// function deleteSheetRow(jwt, apiKey, spreadsheetId) {
//   const sheets = google.sheets({version: 'v4'});
//   sheets.spreadsheets.values.clear({
//     spreadsheetId: spreadsheetId,
//     auth: jwt,
//     key: apiKey,
//     range: "A2:I2"
//   }, function(err, result) {
//     if (err) {
//       throw err;
//     }
//     else {
//       console.log("Row successfully deleted" + result);
//     }
//   });
// }

// readSheetData: function (successCallback, errorCallback) {
//     sheets.spreadsheets.values.get({
//         spreadsheetId: spreadsheetId,
//         auth: jwt,
//         key: apiKey,
//         range: "Sheet1"
//     }, function(err, result) {
//         if (err) {
//         throw err;
//         }
//         else {
//         usedRows = result.data.values.length;
//         range = `A${usedRows}`;
//         console.log(range);
//         }
//     });

