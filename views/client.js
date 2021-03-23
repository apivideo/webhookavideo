// client-side js
// run by the browser each time your view template is loaded

$(function() {
    var auto_refresh = setInterval(function(){
      $.get('/get_webhooks', function(webhooks) {
        var content="";
        if(webhooks.length!==0){
          webhooks.forEach(function(webhook) {
            content+='<li>' + webhook + '</li>';
          });
          $('ul#webhooks').html(content);
          content="";
        } else {
          $('ul#webhooks').html("None received yet");
        }
      });
    }, 3000);
  });