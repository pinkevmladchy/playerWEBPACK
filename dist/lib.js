! function(e) {
    var n = {};

    function t(u) { if (n[u]) return n[u].exports; var r = n[u] = { i: u, l: !1, exports: {} }; return e[u].call(r.exports, r, r.exports, t), r.l = !0, r.exports }
    t.m = e, t.c = n, t.d = function(e, n, u) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: u }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var u = Object.create(null);
        if (t.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(u, r, function(n) { return e[n] }.bind(null, r));
        return u
    }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.p = "", t(t.s = 0)
}([function(e, n, t) {
    "use strict";

    function u(e, n) {
        document.body.style.margin = "0 auto";
        let t = document.createElement("" + n);
        t.className = "video-container", document.body.append(t);
        let u = document.createElement("video");
        u.style.width = "640px", u.style.height = "365px", u.className = "video", t.append(u), u.addEventListener("timeupdate", (function() {
            var e = 100 / u.duration * u.currentTime;
            a.value = e
        })), u.addEventListener("click", (function() { 1 == u.paused ? (u.play(), l.innerHTML = "Pause") : (u.pause(), l.innerHTML = "Play") })), u.addEventListener("dblclick", (function() { t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen() }));
        let r = document.createElement("div");
        r.className = "video-controls", t.append(r);
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
        i.className = "full-screen", i.innerText = "full", r.append(i), i.addEventListener("click", (function() { t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen() })),
            function() {
                var n = e;
                if (Hls.isSupported()) {
                    var t = new Hls;
                    t.loadSource(n), t.attachMedia(u), t.on(Hls.Events.MANIFEST_PARSED, (function() { u.play() }))
                } else u.canPlayType("application/vnd.apple.mpegurl") && (u.src = n, u.addEventListener("loadedmetadata", (function() { u.play() })))
            }()
    }
    t.r(n), t.d(n, "makePlayer", (function() { return u }))
}]);