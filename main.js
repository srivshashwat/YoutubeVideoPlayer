// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const apiKey = 'AIzaSyBTfDQeGCIapwCCjiAUx6O3roB9zZGdA9A';
const videoId = 'YCvAlwMdTOk';

function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // You can handle player state changes here
    // For example, check if the video has ended
    if (event.data == YT.PlayerState.ENDED) {
        console.log('Video has ended.');
    }
}

// Load the YouTube API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load the YouTube API and initialize the player when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    loadYouTubeAPI();
});
