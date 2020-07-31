! function(e) {
    var t = {};

    function n(u) { if (t[u]) return t[u].exports; var r = t[u] = { i: u, l: !1, exports: {} }; return e[u].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
    n.m = e, n.c = t, n.d = function(e, t, u) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: u }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var u = Object.create(null);
        if (n.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(u, r, function(t) { return e[t] }.bind(null, r));
        return u
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t),
        function(e, t) {
            document.body.style.margin = "0 auto";
            let n = document.createElement("" + t);
            n.className = "video-container", document.body.append(n);
            let u = document.createElement("video");
            u.style.width = "640px", u.style.height = "365px", u.className = "video", n.append(u), u.addEventListener("timeupdate", (function() {
                var e = 100 / u.duration * u.currentTime;
                a.value = e
            })), u.addEventListener("click", (function() { 1 == u.paused ? (u.play(), l.innerHTML = "Pause") : (u.pause(), l.innerHTML = "Play") })), u.addEventListener("dblclick", (function() { n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullscreen && n.webkitRequestFullscreen() }));
            let r = document.createElement("div");
            r.className = "video-controls", n.append(r);
            let l = document.createElement("button");
            l.className = "play-pause", l.innerText = "play", r.append(l), l.addEventListener("click", (function() { 1 == u.paused ? (u.play(), l.innerHTML = "Pause") : (u.pause(), l.innerHTML = "Play") }));
            let a = document.createElement("input");
            a.type = "range", a.className = "seek-bar", a.value = 0, r.append(a), a.addEventListener("change", (function() {
                var e = u.duration * (a.value / 100);
                u.currentTime = e
            })), a.addEventListener("mousedown", (function() { u.pause() })), a.addEventListener("mouseup", (function() { u.play() }));
            let c = document.createElement("button");
            c.className = "mute", c.innerText = "mute", r.append(c), c.addEventListener("click", (function() { u.volume > 0 ? (u.volume = 0, mute.innerHTML = "Unmute", o.value = 0) : 0 == u.volume && (u.volume = 1, mute.innerHTML = "Mute", o.value = 1) }));
            let o = document.createElement("input");
            o.type = "range", o.className = "volume-bar", o.value = 1, o.max = 1, o.min = 0, o.step = .1, r.append(o), o.addEventListener("change", (function() { u.volume = o.value }));
            let i = document.createElement("button");
            i.className = "full-screen", i.innerText = "full", r.append(i), i.addEventListener("click", (function() { n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullscreen && n.webkitRequestFullscreen() })),
                function() {
                    var t = e;
                    if (Hls.isSupported()) {
                        var n = new Hls;
                        n.loadSource(t), n.attachMedia(u), n.on(Hls.Events.MANIFEST_PARSED, (function() { u.play() }))
                    } else u.canPlayType("application/vnd.apple.mpegurl") && (u.src = t, u.addEventListener("loadedmetadata", (function() { u.play() })))
                }()
        }("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", "div")
}]);