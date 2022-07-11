https://teachablemachine.withgoogle.com/models/sbPAodZXo/

Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("webcam_live_view");
Webcam.attach("#webcam_live_view");

console.log('ml5 version used is',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sbPAodZXo/model.json",modelLoaded());