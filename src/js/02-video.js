import throttle from "lodash.throttle"
import vimeoPlayer from '@vimeo/player';
const STORAGE_KEY = "videoplayer-current-time"

const iframe = document.querySelector("#vimeo-player")
const player = new vimeoPlayer(iframe)
const saveCurrentTime = localStorage.getItem(STORAGE_KEY)

onPageLoad()

player.on("timeupdate", throttle(onVideoPlayer, 1000))

function onVideoPlayer(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
}

function onPageLoad() {
    if (saveCurrentTime) {
        player.setCurrentTime(saveCurrentTime) 
    }
}








