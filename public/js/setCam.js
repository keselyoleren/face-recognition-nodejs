Webcam.set({
    width : 480,
    height : 320,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#my_camera');


function preview_snapshot() {
    Webcam.freeze();
    document.getElementById('pre_take_buttons').style.display = 'none';
    document.getElementById('post_take_buttons').style.display = '';
}

function cancel_preview() {
    Webcam.unfreeze();
    document.getElementById('pre_take_buttons').style.display = '';
    document.getElementById('post_take_buttons').style.display = 'none';
}

function save_photo() {
    Webcam.snap(function(data_uri) {
        document.getElementById('results').innerHTML = '<img src="' + data_uri + '" id="myImage"/>';
        var raw_image_data = data_uri.replace(/^data\:image\/\w+\;base64\,/, '');
        document.getElementById('image').value = raw_image_data;
        document.getElementById('pre_take_buttons').style.display = '';
        document.getElementById('post_take_buttons').style.display = 'none';
    });
}