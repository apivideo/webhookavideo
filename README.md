[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)

[![badge](https://img.shields.io/github/stars/apivideo/webhookavideo?style=social)](https://github.com/apivideo/webhookavideo)

[![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)

![](https://github.com/apivideo/API_OAS_file/blob/master/apivideo_banner.png)

<h1 align="center">api.video webhook a video</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

# api.video Webhooks
This example app allows you to receive webhooks from api.video.  Currently, we have 1 event that our webhoks report on:
```
video.encoding.quality.completed

```

This will report when each encoding is completed. For example:

```
{ "type": "video.encoding.quality.completed", 
  "emittedAt": "2021-01-29T16:46:25.217+01:00", 
  "videoId": "viXXXXXXXX", 
  "encoding": "hls", 
  "quality": "720p"
}
```

This reports that the 720p HLS encoding was completed.

## Fire the webhook

This webhook is connected to the same account as [upload.a.video](https://upload.a.video).  So, if you upload a video there, this webhook will fire when each video encoding is completed.
