document.getElementById('c-1').onclick = function () {
    // window.location.href = `http://10.224.129.43:80/#/vr-safety-community/function-manage/page4`
}

var framesUrl = [], lastTime = 0, nowTime = 0, num = 0;
function play_animation() {
    nowTime = Date.now()
    loopDraw()

    // frame animation
    var ani = new frame_ani({
        canvasTargetId: "c-1", // target canvas ID
        framesUrl: framesUrl, // frames url
        loop: true, // if loop
        height: 700, // source image's height (px)
        width: 350, // source image's width (px)
        frequency: 20, // count of frames in one second
        audioIonName: "noSound", // ion.sound audio name
        onComplete: function () { // complete callback
            console.log("Animation loop.");
        },
    });

    // preload & play
    ani.initialize(() => {
        $("#loading").hide();
        ani.play();
    });
}

function loopDraw() {
    for (let i = 0; i <= 350; i++) {
        var str;
        if (i < 10) {
            str = "000" + i;
        } else if (i < 100) {
            str = "00" + i;
        } else {
            str = "0" + i;
        }
        framesUrl.push('http://localhost:8787/vr/img/' + str + '.png');
    }
    if (nowTime - lastTime > 17000) {
        lastTime = nowTime
        loopDraw()
    }
}


$(document).ready(() => {
    // ion.sound BGM
    ion.sound({
        sounds: [
            {
                name: "noSound",
                loop: false
            },
        ],
        volume: 0,
        path: "http://localhost:8787/vr/audio/", // my test URL  
        preload: true,
        multiplay: false,
        // 保证音频加载完成
        ready_callback: () => {
            play_animation();
        }
    });


});