function convertToSpeech() {
  const textInput = document.getElementById('textInput').value;
  const utterance = new SpeechSynthesisUtterance(textInput);
  speechSynthesis.speak(utterance);
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = `https://texttospeech.googleapis.com/v1/text:synthesize?input=${textInput}`;
}
