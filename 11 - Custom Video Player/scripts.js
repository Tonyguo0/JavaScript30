const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// buidl out functions

function togglePlay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
    // if (video.paused) {
    //     video.play()
    // } else {
    //     video.pause()
    // }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'

    toggle.textContent = icon
    console.log('Update the button')
}

function skip() {
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}
function handleRangeUpdate() {
    video[this.name] = this.value
    console.log(this.name)
    console.log(this.value)
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    // e.offsetX shows the progress of the bar
    // progress.offsetWidth = width of the entire progress bar
    // devide the two above and you get in percentage the duration of the bar
    // multiply that by the video duration which gives the video duration of time of the video
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
    console.log(e)
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', handleProgress)
skipButtons.forEach((button) => button.addEventListener('click', skip))

ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate))
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate))

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', () => mouseDown && scrub)
progress.addEventListener('mousedown', () => (mouseDown = true))
progress.addEventListener('mouseup', () => (mouseDown = false))
