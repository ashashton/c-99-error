var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("text_input").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("text_input").innerHTML = Content;
    console.log(Content);
    speak()
}

function speak() {
    synth = window.speechSynthesis;
    speakdata = document.getElementById("text_input").value;
    utter_this = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utter_this)

}
