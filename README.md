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
