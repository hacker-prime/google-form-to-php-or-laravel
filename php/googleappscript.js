// NOTE - This is the logic that would be used in Google App Script's Editor Section
// How to Auto-Send Emails on a Google Form Submission - https://www.youtube.com/watch?v=1CQymthRcyo   
// Google Spreadsheet Post data to MySQL database @local PC - https://www.youtube.com/watch?v=SMYgZb4Zg84 @2:04
function sendData(e) {

    Logger.log("onSubmitForm Running");
  
    
    var named_values = e.namedValues
    // var values = e.values
  
    // console.log("named_values:: ", named_values)
    // console.log(`values: ${values}`)
    console.log("Email:: ", named_values['Email address'])
  
    var email = named_values['Email address']
  
    var data = email
  
    // https://www.youtube.com/watch?v=SMYgZb4Zg84 @0:25 we can see similar logic  
    // https://www.endpointdev.com/blog/2021/11/forwarding-google-forms-responses-to-api/ 
    var options = { 
      method: "post",
      payload: JSON.stringify(data),
      contentType: "application/json; charset=utf-8"
      // muteHttpExceptions: true
    };
  
    var url = 'https://169e-96-43-164-151.ngrok.io/googleappscript/index.php'
  
    var response = UrlFetchApp.fetch(url, options)
   
  
    if (response.getResponseCode() == 200) {
      // var params = JSON.parse(response.getContentText());
      // Logger.log(params.question);
      // Logger.log(params.answer);
      Logger.log("code: " + response.getResponseCode());
      Logger.log("text: " + response.getContentText());
    } 
  
    // if (response.getResponseCode() == 405) {
    //   console.log("ERROR" + response.getContentText())
    // } 
  
  
  }
  