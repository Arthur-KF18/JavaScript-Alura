const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

