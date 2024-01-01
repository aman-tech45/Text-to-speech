const text =
    document.getElementById('textToConvert');
const convertBtn =
    document.getElementById('convertBtn');


convertBtn.addEventListener('click', function ()  {
    const speechSynthesis = window.speechSynthesis;
    const enteredText = text.value;
    const error = documnet.querySelector('.error-para');
    if (!speechSynthesis.speaking && 
        !enteredText.trim().length) {
        error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }
    if (!sppechSynth.speaking && enteredText.trim().length) {
        error.textContent = '';
        const speech = newUtter = 
            new SpeechSynthesisUtterance();
        speechSynthesis.speak(newUtter);
        convertBtn.textContent = 'Sound is Playing';

    }
    setTimeout(() => {
        convertBtn.textContent = 'Play Converted Sound';
    }, 5000);
});
