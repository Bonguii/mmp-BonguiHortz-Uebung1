
// start camera and replace "video"
function startCam2() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (!navigator.getUserMedia) {
        alert("No getUserMedia / camera support with your browser");
        return false;
    }
    navigator.getUserMedia({video: true, audio: true},
    function (localMediaStream) {
        var video = document.getElementById('video2');
        video.src = window.URL.createObjectURL(localMediaStream);

        // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
        // See crbug.com/110938.
        video.onloadedmetadata = function (e) {
            // Ready to go. Do some stuff.
        };
    },
            function (e) {
                console.log('cam fails!', e);
            }
    );
}
