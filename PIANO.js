const nombre = 'Marlenne'
const edad = 18;
const likesMusic = true;

const nombreElement = document.querySelector('span#name');
const edadElement = document.querySelector('span#age');
const likesMusicElement = document.querySelector('span#likesMusic');

nombreElement.textContent = nombre;
edadElement.textContent = edad;
if (likesMusic === true){
    likesMusicElement.textContent = 'me gusta la música';
} else{
    likesMusicElement.textContent = 'detesto la música';
}

const playNote = (key) => { 
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', (e) => {
  alert('Hola!!!');
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  console.log(whiteKeys[whiteKeyIndex]);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});