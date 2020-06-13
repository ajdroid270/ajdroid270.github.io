window.onload = ()=>{
    $("#tile1").click(function () {
        palyAudio("assets/audio/a-5.mp3");
        console.log("clicked tile 1");
    });
    $("#tile2").click(function () {
        palyAudio("assets/audio/b5.mp3");
        console.log("clicked tile 2");
    });
    $("#tile3").click(function () {
        palyAudio("assets/audio/c5.mp3");
        console.log("clicked tile 3");
    });
    $("#tile4").click(function () {
        palyAudio("assets/audio/d5.mp3");
        console.log("clicked tile 4");
    });
    $("#tile5").click(function () {
        palyAudio("assets/audio/e5.mp3");
        console.log("clicked tile 5");
    });
    $("#tile6").click(function () {
        palyAudio("assets/audio/f5.mp3");
        console.log("clicked tile 6");
    });
    $("#tile7").click(function () {
        palyAudio("assets/audio/g5.mp3");
        console.log("clicked tile 7");
    });
    $("#tile8").click(function () {
        palyAudio("assets/audio/g-5.mp3");
        console.log("clicked tile 8");
    });
}

let audioElement = document.createElement("audio");
function palyAudio(x){
    audioElement.src = x;
    // audioElement.volume = 0.1;
    audioElement.autoPlay = false;
    audioElement.preLoad = true;
    audioElement.controls = false;
    audioElement.play();
}