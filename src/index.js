// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
var webhooks =[];
// Show the homepage
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));
var api_key = process.env.api_video_prod;
// Handle webhook from Fidel

//card added
app.post("/receive_webhook", function (request, response) {
  console.log("new video event from api.video");


  webhooks.push("New api.video event");
  let event = request.body;
  let body =request.body;
  console.log((body));
   let headers = request.headers;
  console.log("headers",headers);
  let type = body.type;
  let emittedAt = body.emittedAt;
  let webhookResponse="";
  let liveStreamId = "";
  let liveStreamStatus = false;
  if (type =="video.encoding.quality.completed"){
    let videoId = body.videoId;
    let encoding = body.encoding;
    let quality = body.quality;
    liveStreamId = body.liveStreamId;
    webhookResponse = "event: " +type+ " at: "+ emittedAt+ " videoId: "+videoId+ "  <br/>Encoding: " + encoding+" Video quality: "+ quality;
    
  } else if(type =="live-stream.broadcast.started"){
      liveStreamId = body.liveStreamId;
      liveStreamStatus = true;
      webhookResponse = "event: " +type+ " at: "+ emittedAt+ " LiveStream,Id: "+liveStreamId+ "  has started.";
    

  } else if (type =="live-stream.broadcast.ended"){
      liveStreamId = body.liveStreamId;
      liveStreamStatus = false;
      webhookResponse = "event: " +type+ " at: "+ emittedAt+ " LiveStream,Id: "+liveStreamId+ "  has stopped.";

  }

  let videoId = body.videoId;
  let encoding = body.encoding;
  let quality = body.quality;
  //console.log(headers);
  console.log("response",webhookResponse);
  //webhook url

  var textResponse = 
  webhooks.push(webhookResponse);
  
  response.sendStatus(200);  
});


// Send list of webhooks received
app.get("/get_webhooks", function (request, response) {
  response.send(webhooks); 
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3040, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
