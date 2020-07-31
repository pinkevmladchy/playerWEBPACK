export function makePlayer(src_video, selector) {
    createElements();
    fillStyles();
    appendElem();
    buttonsFill();
    eventListeners();

    function appendElem() {
        document.body.append(vid_cont);
        vid_cont.append(video);
        vid_cont.append(vid_control);
        vid_control.append(b1);
        vid_control.append(seek);
        vid_control.append(b2);
        vid_control.append(volume);
        vid_control.append(b3);
    }

    function createElements() {
        let vid_cont = document.createElement(`${selector}`);
        let video = document.createElement('video');
        let vid_control = document.createElement('div');
        let b1 = document.createElement('button');
        let seek = document.createElement('input');
        let b2 = document.createElement('button');
        let volume = document.createElement('input');
        let b3 = document.createElement('button');
    }

    function eventListeners() {
        b1.addEventListener("click", function() {
            if (video.paused == true) {
                video.play();
                b1.innerHTML = "Pause";
            } else {
                video.pause();
                b1.innerHTML = "Play";
            }
        });
        b2.addEventListener("click", function() {
            if (video.volume > 0) {
                video.volume = 0;
                mute.innerHTML = "Unmute";
                volume.value = 0;
            } else if (video.volume == 0) {
                video.volume = 1;
                mute.innerHTML = "Mute";
                volume.value = 1;
            }
        });
        b3.addEventListener("click", fullScreen());
        volume.addEventListener("change", function() {
            video.volume = volume.value;
        });
        seek.addEventListener("change", function() {
            var time = video.duration * (seek.value / 100);
            video.currentTime = time;
        });
        seek.addEventListener("mousedown", function() {
            video.pause();
        });
        seek.addEventListener("mouseup", function() {
            video.play();
        });
        video.addEventListener("timeupdate", function() {
            var value = (100 / video.duration) * video.currentTime;

            seek.value = value;
        });
        video.addEventListener("click", function() {
            if (video.paused == true) {
                video.play();
                b1.innerHTML = "Pause";
            } else {
                video.pause();
                b1.innerHTML = "Play";
            }
        })
        video.addEventListener("dblclick", fullScreen());
    }

    function buttonsFill() {
        b1.className = "play-pause";
        b1.innerText = "play";
        b2.className = "mute";
        b2.innerText = "mute";
        b3.className = "full-screen";
        b3.innerText = "full";
    }

    function fillStyles() {
        document.body.style.margin = "0 auto";
        vid_cont.className = "video-container";
        vid_control.className = "video-controls";
        seek.type = "range";
        seek.className = "seek-bar";
        seek.value = 0;
        volume.type = "range";
        volume.className = "volume-bar";
        volume.value = 1;
        volume.max = 1;
        volume.min = 0;
        volume.step = 0.1;
        video.style.width = "640px";
        video.style.height = "365px";
        video.className = "video";
    }

    function fullScreen() {
        if (vid_cont.requestFullscreen) {
            vid_cont.requestFullscreen();
        } else if (vid_cont.mozRequestFullScreen) {
            vid_cont.mozRequestFullScreen(); // мозила
        } else if (vid_cont.webkitRequestFullscreen) {
            vid_cont.webkitRequestFullscreen(); // хром сафари
        }
    }

    function hlsStreamVideo() {
        var videoSrc = src_video;
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
            video.addEventListener('loadedmetadata', function() {
                video.play();
            });
        }
    }
    hlsStreamVideo();
};