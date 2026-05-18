# Learnt
- `video[method]()` to control the video player, where `method` can be `play`, `pause`, `load`, etc.
- `video[attribute]` to get or set the video player's attributes, where `attribute` can be `currentTime`, `duration`, `volume`, etc.
- `video.addEventListener('event', callback)` to listen for video events, where `event` can be `play`, `pause`, `timeupdate`, etc.
- `const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration` to calculate the time to scrub to based on the click position on the progress bar.
- `video.currentTime = scrubTime` to set the current time of the video to the calculated scrub time.
- `const percent = (video.currentTime / video.duration) * 100` to calculate the percentage of the video that has been played.