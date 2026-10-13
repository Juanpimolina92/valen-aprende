'use strict';

// Todos los dibujos son personajes genéricos. No se usan fotografías ni datos faciales.
const ICONS = {
  arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  play:'<path d="m9 5 11 7-11 7Z"/>',
  sound:'<path d="m11 5-6 4H2v6h3l6 4Z"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  muted:'<path d="m11 5-6 4H2v6h3l6 4Z"/><path d="m16 9 6 6m0-6-6 6"/>',
  settings:'<path d="m10 3-.6 2.1-2 .9-2.1-.6-2 3.4 1.5 1.5v2.3L3.3 14l2 3.4 2.1-.5 2 1 .6 2.1h4l.6-2.1 2-1 2.1.5 2-3.4-1.5-1.4v-2.3l1.5-1.5-2-3.4-2.1.6-2-.9L14 3Z"/><circle cx="12" cy="11.6" r="3"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  chat:'<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H8l-5 2 1.5-5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 10h8m-8 4h5"/>',
  palette:'<path d="M12 3a9 9 0 1 0 0 18h1c2 0 3-1 3-2.5S14.5 16 16 15s5 .5 5-4a9 9 0 0 0-9-8Z"/><circle cx="7" cy="10" r=".7"/><circle cx="10" cy="7" r=".7"/><circle cx="15" cy="7" r=".7"/>',
  close:'<path d="m6 6 12 12m0-12L6 18"/>',
  shuffle:'<path d="M3 7h3c6 0 6 10 12 10h3m-4-4 4 4-4 4M3 17h3c2 0 3-1 4-3m3-5c1-1 2-2 5-2h3m-4-4 4 4-4 4"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.sound}</svg>`;
const svg = content => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" aria-hidden="true">${content}</svg>`;
const eye = (x,y,r=7) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#233b37"/><circle cx="${x+2}" cy="${y-2}" r="${r*.28}" fill="#fff"/>`;
const ART = {
  toucan:svg(`<ellipse cx="100" cy="180" rx="50" ry="8" fill="#324c3c" opacity=".08"/><path d="m66 131-14 35q22 0 35-22" fill="#356f6c"/><ellipse cx="94" cy="118" rx="44" ry="57" fill="#314741"/><ellipse cx="108" cy="115" rx="28" ry="42" fill="#fff6da"/><path d="M92 60C151 17 190 40 185 85q-7 23-63 19L92 78Z" fill="#f4a53d"/><path d="M99 67q49-31 80-12" stroke="#ffd873" stroke-width="10" stroke-linecap="round"/><path d="M160 42q29 10 25 43l-28-5Z" fill="#3d554b"/><path d="M121 91q32 9 58-6" stroke="#df783b" stroke-width="4" stroke-linecap="round"/><ellipse cx="79" cy="117" rx="16" ry="31" transform="rotate(24 79 117)" fill="#4f6760"/><path d="m77 167-4 10m37-11 3 11" stroke="#e9a242" stroke-width="7" stroke-linecap="round"/>${eye(107,77,9)}<ellipse cx="120" cy="92" rx="6" ry="4" fill="#f0b899"/>`),
  macaw:svg(`<ellipse cx="100" cy="181" rx="55" ry="8" fill="#324c3c" opacity=".08"/><path d="m92 143-16 38h20l17-31" fill="#438ebd"/><path d="m91 154-5 20" stroke="#74c2e0" stroke-width="5" stroke-linecap="round"/><ellipse cx="104" cy="116" rx="41" ry="53" fill="#f5cb43"/><path d="M73 83C47 86 32 105 26 137q38 6 59-35" fill="#479bc7"/><path d="m32 131 32-25m-21 33 33-31" stroke="#287dae" stroke-width="6" stroke-linecap="round"/><path d="M131 85q35 6 46 48-37 12-58-31" fill="#499cca"/><path d="m172 127-29-20m16 31-29-29" stroke="#2b7ba8" stroke-width="6" stroke-linecap="round"/><circle cx="108" cy="66" r="37" fill="#489fc8"/><path d="M92 41q20-14 35 5" stroke="#92c9c6" stroke-width="9" stroke-linecap="round"/><ellipse cx="119" cy="67" rx="23" ry="25" fill="#fff5dc"/><path d="M129 64q31-13 31 12-1 18-19 29l-12-25Z" fill="#48524e"/><path d="M141 70q8-2 10 4" stroke="#67746b" stroke-width="4" stroke-linecap="round"/>${eye(119,60,8)}<ellipse cx="118" cy="81" rx="7" ry="4" fill="#e9ad8b"/><path d="m86 163-3 11m38-11 2 11" stroke="#a78147" stroke-width="7" stroke-linecap="round"/><path d="M91 120q-1 19 14 26" stroke="#ffe483" stroke-width="7" stroke-linecap="round"/>`),
  penguin:svg(`<ellipse cx="100" cy="181" rx="51" ry="8" fill="#324c3c" opacity=".08"/><path d="M65 83q-33 10-35 53 23-2 44-29m61-24q32 10 35 53-25-2-45-29" fill="#3b5356"/><ellipse cx="99" cy="107" rx="50" ry="65" fill="#374e51"/><path d="M98 65q-17-25-30 1-25 47 8 86 31 30 54-9 20-44-5-77-14-23-27-1Z" fill="#fff8e9"/>${eye(81,79,7)}${eye(117,79,7)}<path d="M85 99q14-15 30 0-15 17-30 0Z" fill="#f2ac46"/><ellipse cx="65" cy="99" rx="9" ry="5" fill="#e7ad97"/><ellipse cx="134" cy="99" rx="9" ry="5" fill="#e7ad97"/><path d="M69 160q-17 6-14 18 25 5 36-7m34-11q18 6 14 18-25 5-35-7" fill="#f2ab46"/><path d="M85 127q-4 12 6 21" stroke="#ece2cf" stroke-width="5" stroke-linecap="round"/>`),
  car:svg(`<ellipse cx="100" cy="166" rx="80" ry="8" fill="#324c3c" opacity=".08"/><path d="m45 109 19-43q7-12 20-12h30q14 0 25 18l20 38" fill="#e87d65"/><path d="m66 103 15-35h22v35Zm43-35h7q8 0 17 14l12 21h-36Z" fill="#b8dcd9"/><path d="M33 105h127q16 0 18 17v27H20v-26q0-18 13-18Z" fill="#ee8970"/><path d="M31 120h132" stroke="#f2ac90" stroke-width="7" stroke-linecap="round"/><circle cx="53" cy="149" r="21" fill="#3a5352"/><circle cx="147" cy="149" r="21" fill="#3a5352"/><circle cx="53" cy="149" r="10" fill="#faf0d9"/><circle cx="147" cy="149" r="10" fill="#faf0d9"/><rect x="22" y="128" width="14" height="10" rx="3" fill="#f6d776"/><rect x="163" y="126" width="12" height="11" rx="3" fill="#fff2cc"/><path d="M92 112v15" stroke="#d56656" stroke-width="3"/><path d="M122 111h10" stroke="#bf6657" stroke-width="3" stroke-linecap="round"/>`),
  ball:svg(`<ellipse cx="100" cy="176" rx="57" ry="8" fill="#324c3c" opacity=".08"/><circle cx="100" cy="104" r="65" fill="#f1c85f"/><path d="M100 39q-49 51 0 130A65 65 0 0 1 100 39Z" fill="#ea8971"/><path d="M100 39q49 51 0 130A65 65 0 0 0 100 39Z" fill="#69b1c6"/><path d="M48 67q50 37 104 0m-115 46q62 25 126 0" stroke="#ffffff65" stroke-width="4"/><path d="m75 55-11 9" stroke="#fff2c0" stroke-width="7" stroke-linecap="round"/>`),
  sun:svg(`<g stroke="#efbd5b" stroke-width="8" stroke-linecap="round"><path d="M100 22v14m0 128v14M22 100h14m128 0h14M45 45l10 10m90 90 10 10m0-110-10 10m-90 90-10 10"/></g><circle cx="100" cy="100" r="51" fill="#f6d370"/><path d="M63 83q4-17 16-20" stroke="#ffedaf" stroke-width="8" stroke-linecap="round"/>${eye(83,96,5)}${eye(118,96,5)}<path d="M87 115q13 14 26 0" stroke="#c8854f" stroke-width="4" stroke-linecap="round"/><ellipse cx="69" cy="112" rx="7" ry="4" fill="#edb07b"/><ellipse cx="132" cy="112" rx="7" ry="4" fill="#edb07b"/>`),
  balloons:svg(`<path d="M69 113q-8 31 20 66m44-77q16 43-31 83m-10-57q6 28 8 54" stroke="#94a489" stroke-width="2"/><ellipse cx="63" cy="72" rx="36" ry="46" transform="rotate(-15 63 72)" fill="#ed927c"/><ellipse cx="139" cy="70" rx="35" ry="45" transform="rotate(12 139 70)" fill="#78b6d0"/><ellipse cx="98" cy="89" rx="34" ry="44" fill="#f4cd65"/><path d="m64 115 8 3-5 7m66-12 6-4 4 7m-49 16h8l-4 9" fill="#d19569"/><path d="m47 43-5 17m90-17-5 17m-43 7-4 14" stroke="#ffffff7a" stroke-width="6" stroke-linecap="round"/>`)
};
function portrait({hair='#4b443c',shirt='#84b5a1',skin='#e6b996',style='short',glasses=false,age=false}={}) {
  return svg(`<ellipse cx="100" cy="182" rx="60" ry="8" fill="#324c3c" opacity=".07"/><path d="M44 177q-3-56 56-56t56 56" fill="${shirt}"/><path d="M91 117v16q10 10 18 0v-16" fill="${skin}"/>${style==='long'?`<path d="M58 99V58q3-42 42-40 50-2 49 47l-1 82-23-23H80l-24 18Z" fill="${hair}"/>`:''}<ellipse cx="100" cy="77" rx="40" ry="48" fill="${skin}"/>${style==='long'?`<path d="M59 78q-5-57 33-57 52-9 50 57l-17-33q-28 27-62 18Z" fill="${hair}"/>`:`<path d="M59 68q-8-44 30-46 48-15 54 41l-17-17q-26 22-63 13Z" fill="${hair}"/>`}<ellipse cx="60" cy="85" rx="7" ry="12" fill="${skin}"/><ellipse cx="140" cy="85" rx="7" ry="12" fill="${skin}"/>${eye(85,78,4)}${eye(115,78,4)}<path d="M89 101q11 9 23-1" stroke="#a46e56" stroke-width="3" stroke-linecap="round"/><ellipse cx="74" cy="96" rx="7" ry="4" fill="#d89985" opacity=".5"/><ellipse cx="128" cy="96" rx="7" ry="4" fill="#d89985" opacity=".5"/>${glasses?'<g stroke="#566a61" stroke-width="3"><rect x="68" y="68" width="27" height="22" rx="8"/><rect x="106" y="68" width="27" height="22" rx="8"/><path d="M95 76h11"/></g>':''}${age?'<path d="m72 51 6-9m41 1 8 10" stroke="#d6d7c7" stroke-width="5" stroke-linecap="round"/>':''}<path d="M73 151v25m55-25v25" stroke="#244b4012" stroke-width="4" stroke-linecap="round"/>`);
}
ART.family = svg(`<ellipse cx="100" cy="182" rx="88" ry="10" fill="#324c3c" opacity=".07"/><path d="M11 167q-6-68 53-63 51-2 54 63" fill="#8faa8b"/><path d="M90 168q-2-69 54-62 51-3 48 62" fill="#80b3c2"/><path d="M32 82V48q-2-31 28-30 40-3 39 36v65l-28-12Z" fill="#665147"/><ellipse cx="65" cy="64" rx="26" ry="33" fill="#e5ba98"/><path d="M38 58q-1-40 32-36 29-1 30 31L83 40Q66 61 38 58Z" fill="#665147"/>${eye(56,64,3.5)}${eye(76,64,3.5)}<path d="M59 82q7 6 14-1" stroke="#a76c53" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="143" cy="65" rx="27" ry="34" fill="#dfb18c"/><path d="M115 55q-4-31 23-34 33-10 34 31l-11-11q-26 20-46 14Z" fill="#4d5147"/>${eye(134,64,3.5)}${eye(154,64,3.5)}<path d="M138 83q7 5 14-1" stroke="#a76c53" stroke-width="2.5" stroke-linecap="round"/><path d="M61 174q-3-43 40-42 38 0 39 42" fill="#f1c86b"/><ellipse cx="100" cy="116" rx="23" ry="27" fill="#e6ba92"/><path d="M77 108q-3-31 21-29 28-4 28 24l-10-12q-11 16-39 17Z" fill="#655044"/>${eye(92,116,3)}${eye(108,116,3)}<path d="M95 129q5 4 10-1" stroke="#a76c53" stroke-width="2.5" stroke-linecap="round"/><path d="M30 127q21 31 41 29m100-28q-17 31-39 29" stroke="#e0b391" stroke-width="12" stroke-linecap="round"/>`);
ART.mama=portrait({style:'long',shirt:'#c78883'});
ART.papa=portrait({shirt:'#83aabe'});
ART.abuelo=portrait({hair:'#aba89b',shirt:'#9ca879',age:true,glasses:true});
ART.nona=portrait({hair:'#ada99b',shirt:'#b89bb6',style:'long',age:true,glasses:true});
ART.fede=portrait({shirt:'#d7b878',hair:'#6a5646'});
ART.nana=portrait({style:'long',shirt:'#80aa98',hair:'#7f5c43'});

// Audios en español latino incluidos en el proyecto. No requieren un servicio al jugar.
const RECORDINGS = {
  "hello": "¡Hola, Valen! ¿Jugamos?",
  "words-instruction": "Tocá un amigo. ¿Cómo se llama?",
  "family-instruction": "Tocá una persona de tu familia. Vamos a saludar.",
  "word-toucan": "Tucán. El tucán tiene un pico grande.",
  "word-macaw": "Loro. El loro es azul y amarillo.",
  "word-penguin": "Pingüino. El pingüino camina pasito a pasito.",
  "word-car": "Auto. Brum, brum. El auto va a pasear.",
  "word-ball": "Pelota. La pelota rueda.",
  "word-sun": "Sol. El sol nos saluda.",
  "find-toucan": "¿Dónde está el tucán?",
  "find-macaw": "¿Dónde está el loro?",
  "find-penguin": "¿Dónde está el pingüino?",
  "find-car": "¿Dónde está el auto?",
  "find-ball": "¿Dónde está la pelota?",
  "find-sun": "¿Dónde está el sol?",
  "found-toucan": "¡Tucán! Lo encontramos.",
  "found-macaw": "¡Loro! Lo encontramos.",
  "found-penguin": "¡Pingüino! Lo encontramos.",
  "found-car": "¡Auto! Lo encontramos.",
  "found-ball": "¡Pelota! La encontramos.",
  "found-sun": "¡Sol! Lo encontramos.",
  "color-rojo": "Rojo.",
  "color-amarillo": "Amarillo.",
  "color-azul": "Azul.",
  "color-verde": "Verde.",
  "find-rojo": "Tocá el color rojo.",
  "find-amarillo": "Tocá el color amarillo.",
  "find-azul": "Tocá el color azul.",
  "find-verde": "Tocá el color verde.",
  "found-rojo": "¡Rojo! Lo encontramos.",
  "found-amarillo": "¡Amarillo! Lo encontramos.",
  "found-azul": "¡Azul! Lo encontramos.",
  "found-verde": "¡Verde! Lo encontramos.",
  "number-1": "Uno.",
  "number-2": "Dos.",
  "number-3": "Tres.",
  "number-4": "Cuatro.",
  "number-5": "Cinco.",
  "count-1": "Contemos un pingüino. Tocá al pingüino.",
  "count-2": "Contemos dos pingüinos. Tocá a cada uno.",
  "count-3": "Contemos tres pingüinos. Tocá a cada uno.",
  "count-4": "Contemos cuatro pingüinos. Tocá a cada uno.",
  "count-5": "Contemos cinco pingüinos. Tocá a cada uno.",
  "complete-1": "¡Un pingüino! Contamos juntos.",
  "complete-2": "¡Dos pingüinos! Contamos juntos.",
  "complete-3": "¡Tres pingüinos! Contamos juntos.",
  "complete-4": "¡Cuatro pingüinos! Contamos juntos.",
  "complete-5": "¡Cinco pingüinos! Contamos juntos.",
  "family-mama": "Mamá. Hola, mamá.",
  "family-papa": "Papá. Hola, papá.",
  "family-abuelo": "Abuelo. Hola, abuelo.",
  "family-nona": "Nona. Hola, Nona.",
  "family-fede": "Fede. Hola, Fede.",
  "family-nana": "Nana. Hola, Nana.",
  "find-mama": "¿Dónde está mamá?",
  "find-papa": "¿Dónde está papá?",
  "find-abuelo": "¿Dónde está abuelo?",
  "find-nona": "¿Dónde está Nona?",
  "find-fede": "¿Dónde está Fede?",
  "find-nana": "¿Dónde está Nana?",
  "friend-macaw": "¡Hola, Valen! Soy Lolo, el loro. Mirá mis colores: azul y amarillo.",
  "friend-toucan": "¡Hola, Valen! Soy Tito, el tucán. ¿Decimos juntos? Tucán.",
  "friend-penguin": "¡Hola, Valen! Soy Pipo, el pingüino. Contamos juntos: uno, dos, tres.",
  "offline-yellow": "Busquemos algo amarillo en casa.",
  "offline-steps": "Contemos tres pasos juntos.",
  "offline-car": "Busquemos un auto de juguete y hagamos brum, brum.",
  "offline-hug": "Saludemos a alguien de la familia con un abrazo.",
  "offline-bird": "Miremos por la ventana. ¿Vemos un pájaro?"
};
const audioByText = new Map(Object.entries(RECORDINGS).map(([key,text])=>[text,`assets/audio/${key}.mp3`]));
const WORDS = [
  {id:'toucan',label:'Tucán',article:'el',color:'#f7e9d5'},
  {id:'macaw',label:'Loro',article:'el',color:'#f5efcf'},
  {id:'penguin',label:'Pingüino',article:'el',color:'#e4eff0'},
  {id:'car',label:'Auto',article:'el',color:'#f7e5df'},
  {id:'ball',label:'Pelota',article:'la',color:'#e8eddf'},
  {id:'sun',label:'Sol',article:'el',color:'#f8edcd'}
];
const COLORS = [{id:'rojo',label:'Rojo',value:'#ea7d6b'},{id:'amarillo',label:'Amarillo',value:'#f3c94d'},{id:'azul',label:'Azul',value:'#73b5d4'},{id:'verde',label:'Verde',value:'#85b291'}];
const FAMILY = [{id:'mama',label:'Mamá'},{id:'papa',label:'Papá'},{id:'abuelo',label:'Abuelo'},{id:'nona',label:'Nona'},{id:'fede',label:'Fede'},{id:'nana',label:'Nana'}];
const NUMBERS = ['','Uno','Dos','Tres','Cuatro','Cinco'];
const STORAGE_KEY = 'valen-amigos-settings-v1';
const defaults = {childName:'Valen',volume:.75,rate:.85,countLimit:3,reducedMotion:false,family:FAMILY.map(x=>x.label)};
const cleanName = (value,fallback) => typeof value==='string' && value.trim() ? value.trim().slice(0,24) : fallback;
function getSettings() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!value || typeof value!=='object') return structuredClone(defaults);
    return {childName:cleanName(value.childName,defaults.childName),volume:typeof value.volume==='number'?Math.max(0,Math.min(1,value.volume)):.75,rate:value.rate===1?1:.85,countLimit:value.countLimit===5?5:3,reducedMotion:value.reducedMotion===true,family:FAMILY.map((x,i)=>cleanName(value.family?.[i],x.label))};
  } catch { return structuredClone(defaults); }
}
let settings = getSettings();
const state = {mode:'words',wordTarget:null,colorTarget:'amarillo',familyTarget:null,countTarget:3,counted:0,lastSpeech:RECORDINGS['words-instruction'],muted:false};
let currentAudio=null, speechToken=0, audioContext=null;
const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
let spanishVoice=null;
function findVoice() { if(synth) { const voices=synth.getVoices(); spanishVoice=voices.find(v=>/^es[-_]AR$/i.test(v.lang)) || voices.find(v=>/^es[-_]UY$/i.test(v.lang)) || voices.find(v=>/^es[-_](MX|US|CO|CL|PE)/i.test(v.lang)) || voices.find(v=>/^es/i.test(v.lang)) || null; } }
findVoice();
if(synth) synth.addEventListener('voiceschanged',findVoice);
function stopAudio() { speechToken++; if(currentAudio){currentAudio.pause();currentAudio.currentTime=0;currentAudio=null;} synth?.cancel(); }
function speakWithBrowser(text,token) {
  findVoice();
  if(!synth || !spanishVoice || token!==speechToken || state.muted || settings.volume===0) return;
  const line=new SpeechSynthesisUtterance(text);line.lang=spanishVoice.lang;line.voice=spanishVoice;line.rate=settings.rate;line.pitch=1;line.volume=settings.volume;synth.speak(line);
}
function say(text) {
  text=text.replace(/\bValen\b/g,settings.childName);
  state.lastSpeech=text;stopAudio();
  if(state.muted || settings.volume===0) return;
  const token=speechToken;
  const file=audioByText.get(text);
  if(!file){speakWithBrowser(text,token);return;}
  const audio=new Audio(file);currentAudio=audio;audio.volume=settings.volume;audio.playbackRate=settings.rate;
  audio.onended=()=>{if(currentAudio===audio)currentAudio=null;};
  audio.play().catch(()=>{if(token===speechToken){currentAudio=null;speakWithBrowser(text,token);}});
}
function tone(type='tap') {
  if(state.muted || settings.volume===0) return;
  try {
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx)return;
    audioContext ||= new AudioCtx();
    if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});
    const notes=type==='celebrate'?[523,659,784]:type==='bird'?[1400,1850]:type==='car'?[180,240]:[540];
    notes.forEach((hz,i)=>{const oscillator=audioContext.createOscillator(),gain=audioContext.createGain(),at=audioContext.currentTime+i*.11;oscillator.type=type==='car'?'triangle':'sine';oscillator.frequency.setValueAtTime(hz,at);oscillator.frequency.exponentialRampToValueAtTime(hz*(type==='bird'?1.35:1.05),at+.09);gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(.035*settings.volume,at+.02);gain.gain.exponentialRampToValueAtTime(.001,at+.14);oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start(at);oscillator.stop(at+.16);});
  } catch { /* Los audios hablados siguen funcionando si Web Audio no está disponible. */ }
}
function animate(element) { element.classList.remove('is-speaking');void element.offsetWidth;element.classList.add('is-speaking');setTimeout(()=>element.classList.remove('is-speaking'),800); }
function celebrate() {
  tone('celebrate');
  if(settings.reducedMotion || matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const layer=document.getElementById('celebration');
  layer.replaceChildren();
  for(let i=0;i<16;i++){const piece=document.createElement('i');piece.className='confetti';piece.style.setProperty('--confetti-color',['#ef9276','#8aac8c','#f1cb69','#7db7cb'][i%4]);piece.style.setProperty('--x',`${Math.cos(i*2.4)*(90+i*12)}px`);piece.style.setProperty('--y',`${-220+Math.sin(i*2.4)*170}px`);piece.style.setProperty('--r',`${i*63}deg`);layer.append(piece);}
  setTimeout(()=>layer.replaceChildren(),1300);
}
const $ = id => document.getElementById(id);
function feedback(text){$('feedback-text').textContent=text;}
function tile(label,art,bg,extraClass='') {
  const button=document.createElement('button');button.className=`word-tile ${extraClass}`;button.type='button';if(bg)button.style.setProperty('--tile-bg',bg);
  const image=document.createElement('span');image.className='tile-art';image.innerHTML=ART[art];
  const name=document.createElement('span');name.className='tile-name';name.textContent=label;
  const sound=document.createElement('span');sound.className='tile-listen';sound.innerHTML=icon('sound');
  button.append(image,name,sound);button.setAttribute('aria-label',`Escuchar ${label}`);return button;
}
function mark(button){$('game-board').querySelectorAll('.is-selected').forEach(x=>x.classList.remove('is-selected'));button.classList.add('is-selected');animate(button);}
function renderWords(){
  const board=$('game-board');board.className='game-board';board.replaceChildren();
  WORDS.forEach(word=>{const button=tile(word.label,word.id,word.color);button.dataset.word=word.id;button.addEventListener('click',()=>{
    mark(button);tone(word.id==='car'?'car':word.id==='toucan'?'bird':'tap');
    if(state.wordTarget===word.id){feedback(`¡${word.label}! ${word.article==='la'?'La':'Lo'} encontramos. ¿Lo decimos juntos?`);say(RECORDINGS[`found-${word.id}`]);celebrate();}
    else if(state.wordTarget){const target=WORDS.find(x=>x.id===state.wordTarget);feedback(`Ese es ${word.article} ${word.label.toLowerCase()}. Busquemos ${target.article} ${target.label.toLowerCase()}.`);say(RECORDINGS[`word-${word.id}`]);}
    else{feedback(`${word.label}. ¡Probemos decirlo juntos!`);say(RECORDINGS[`word-${word.id}`]);}
  });board.append(button);});
}
function renderColors(){
  const board=$('game-board');board.className='game-board color-board';board.replaceChildren();
  COLORS.forEach(color=>{const button=document.createElement('button');button.className='color-tile';button.type='button';button.dataset.color=color.id;button.setAttribute('aria-label',color.label);button.style.setProperty('--color',color.value);button.innerHTML='<span class="color-balloon" aria-hidden="true"></span><span class="balloon-string" aria-hidden="true"></span>';
    const label=document.createElement('span');label.className='tile-name';label.textContent=color.label;button.append(label);
    button.addEventListener('click',()=>{mark(button);if(color.id===state.colorTarget){feedback(`¡${color.label}! Lo encontramos. Mirá a tu alrededor: ¿hay algo ${color.id}?`);say(RECORDINGS[`found-${color.id}`]);celebrate();}else{feedback(`Ese es ${color.id}. Busquemos ${state.colorTarget}.`);say(RECORDINGS[`color-${color.id}`]);tone();}});board.append(button);
  });
}
function renderCount(){
  const board=$('game-board');board.className='game-board count-board';board.replaceChildren();state.counted=0;
  for(let i=0;i<state.countTarget;i++){const button=document.createElement('button');button.className='count-penguin';button.type='button';button.dataset.penguin=String(i+1);button.setAttribute('aria-label',`Pingüino ${i+1}: tocar para contar`);button.innerHTML=ART.penguin+'<span class="count-badge" aria-hidden="true">·</span>';
    button.addEventListener('click',()=>{if(button.disabled)return;button.disabled=true;state.counted++;button.querySelector('.count-badge').textContent=state.counted;button.setAttribute('aria-label',`Pingüino contado: ${NUMBERS[state.counted]}`);animate(button);
      if(state.counted===state.countTarget){feedback(`¡${NUMBERS[state.countTarget]} ${state.countTarget===1?'pingüino':'pingüinos'}! Contamos juntos.`);say(RECORDINGS[`complete-${state.countTarget}`]);celebrate();}
      else{feedback(`${NUMBERS[state.counted]}. Tocá otro pingüino para seguir.`);say(RECORDINGS[`number-${state.counted}`]);tone();}
    });board.append(button);
  }
}
function familySpeech(i){const label=settings.family[i];return label===FAMILY[i].label?RECORDINGS[`family-${FAMILY[i].id}`]:`${label}. Hola, ${label}.`;}
function familyInstruction(i){return settings.family[i]===FAMILY[i].label?RECORDINGS[`find-${FAMILY[i].id}`]:`¿Dónde está ${settings.family[i]}?`;}
function renderFamily(){
  const board=$('game-board');board.className='game-board family-board';board.replaceChildren();
  FAMILY.forEach((person,i)=>{const label=settings.family[i],button=tile(label,person.id,null,'family-tile');button.dataset.family=person.id;
    button.addEventListener('click',()=>{mark(button);tone();say(familySpeech(i));if(state.familyTarget===i){feedback(`¡${label}! Un saludo y un abrazo.`);celebrate();}else if(state.familyTarget!==null){feedback(`Saludamos a ${label}. Ahora busquemos a ${settings.family[state.familyTarget]}.`);}else{feedback(`Hola, ${label}. ¡Decimos su nombre juntos!`);}});board.append(button);
  });
}
function instruction(){
  if(state.mode==='words')return state.wordTarget?RECORDINGS[`find-${state.wordTarget}`]:RECORDINGS['words-instruction'];
  if(state.mode==='colors')return RECORDINGS[`find-${state.colorTarget}`];
  if(state.mode==='count')return RECORDINGS[`count-${state.countTarget}`];
  return state.familyTarget===null?RECORDINGS['family-instruction']:familyInstruction(state.familyTarget);
}
function refreshGame(){
  const titles={words:state.wordTarget?RECORDINGS[`find-${state.wordTarget}`]:'Tocá un amigo. ¿Cómo se llama?',colors:RECORDINGS[`find-${state.colorTarget}`],count:`Contemos ${state.countTarget} ${state.countTarget===1?'pingüino':'pingüinos'}.`,family:state.familyTarget!==null?familyInstruction(state.familyTarget):'Las personas que queremos.'};
  const descriptions={words:'Escuchá su nombre y probá decirlo con alguien que quieras.',colors:'Los globos están listos. ¿Cuál será el que buscamos?',count:'Un toque por pingüino. Pasito a pasito, contamos juntos.',family:'Tocá un dibujo, escuchá su nombre y mandale un saludo.'};
  const labels={words:'JUGAMOS CON PALABRAS',colors:'DESCUBRIMOS LOS COLORES',count:'CONTAMOS JUNTOS',family:'SALUDAMOS A LA FAMILIA'};
  $('game-title').textContent=titles[state.mode];$('game-description').textContent=descriptions[state.mode];$('game-mode-label').textContent=labels[state.mode];
  $('next-label').textContent=({words:state.wordTarget?'Buscamos otro amigo':'Buscamos un amigo',colors:'Otro color',count:'Contamos otra vez',family:'Buscamos a alguien'})[state.mode];
  ({words:renderWords,colors:renderColors,count:renderCount,family:renderFamily})[state.mode]();
  feedback(({words:'Cada palabra es una pequeña aventura.',colors:'Tomate tu tiempo. ¡Podés tocar y descubrir!',count:'¿Empezamos? Tocá un pingüino.',family:'Nombres que son un abrazo.'})[state.mode]);
  document.querySelectorAll('.activity-tab').forEach(tab=>{const active=tab.dataset.mode===state.mode;tab.classList.toggle('is-active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  $('game-panel').setAttribute('aria-labelledby',`tab-${state.mode}`);state.lastSpeech=instruction();
}
function setMode(mode,speak=true){stopAudio();state.mode=mode;state.wordTarget=null;state.familyTarget=null;state.colorTarget='amarillo';state.countTarget=Math.min(3,settings.countLimit);refreshGame();if(speak)say(instruction());}
const different=(list,previous)=>{const choices=list.filter(x=>x!==previous);return choices[Math.floor(Math.random()*choices.length)];};
function nextRound(){
  if(state.mode==='words')state.wordTarget=different(WORDS.map(x=>x.id),state.wordTarget);
  if(state.mode==='colors')state.colorTarget=different(COLORS.map(x=>x.id),state.colorTarget);
  if(state.mode==='count')state.countTarget=state.countTarget%settings.countLimit+1;
  if(state.mode==='family')state.familyTarget=different(FAMILY.map((_,i)=>i),state.familyTarget);
  refreshGame();say(instruction());
}
function applySettings(){
  document.querySelectorAll('[data-child]').forEach(x=>x.textContent=settings.childName);
  document.documentElement.dataset.motion=settings.reducedMotion?'calm':'normal';
  const chips=$('family-name-chips');chips.replaceChildren();settings.family.forEach((label,i)=>{const button=document.createElement('button');button.className='family-chip';button.textContent=label;button.addEventListener('click',()=>{tone();say(familySpeech(i));});chips.append(button);});
}
function showSettings(){
  stopAudio();$('child-name').value=settings.childName;$('volume').value=settings.volume;$('speech-rate').value=settings.rate;$('count-limit').value=settings.countLimit;$('reduced-motion').checked=settings.reducedMotion;
  const fields=$('family-fields');fields.replaceChildren();FAMILY.forEach((person,i)=>{const label=document.createElement('label');label.textContent=person.label;const input=document.createElement('input');input.type='text';input.name=`family-${person.id}`;input.value=settings.family[i];input.maxLength=24;input.required=true;label.append(input);fields.append(label);});
  findVoice();$('audio-note').textContent=spanishVoice?'Los juegos incluyen audios en español. Los nombres personalizados usan la voz en español del navegador.':'Los juegos incluyen audios en español. Para escuchar nombres nuevos, el dispositivo necesita una voz de navegador en español. También pueden leerlos juntos.';
  $('settings-dialog').showModal();$('child-name').focus();
}
function hello(){say(`¡Hola, ${settings.childName}! ¿Jugamos?`);tone('bird');}
document.querySelectorAll('[data-icon]').forEach(x=>x.innerHTML=icon(x.dataset.icon));
document.querySelectorAll('[data-art]').forEach(x=>x.innerHTML=ART[x.dataset.art]);
document.querySelectorAll('.activity-tab').forEach(tab=>tab.addEventListener('click',()=>setMode(tab.dataset.mode)));
document.querySelector('.activity-tabs').addEventListener('keydown',event=>{
  const tabs=Array.from(document.querySelectorAll('.activity-tab'));const current=tabs.indexOf(document.activeElement);if(current<0)return;
  let next=current;if(event.key==='ArrowRight')next=(current+1)%tabs.length;else if(event.key==='ArrowLeft')next=(current+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;
  event.preventDefault();tabs[next].focus();setMode(tabs[next].dataset.mode);
});
$('next-game').addEventListener('click',nextRound);
$('repeat-instruction').addEventListener('click',()=>say(instruction()));
$('repeat-word').addEventListener('click',()=>say(state.lastSpeech));
$('hello-button').addEventListener('click',hello);$('bubble-hello').addEventListener('click',hello);
document.querySelectorAll('.sound-toggle').forEach(button=>button.addEventListener('click',()=>{state.muted=!state.muted;stopAudio();button.setAttribute('aria-pressed',String(state.muted));button.setAttribute('aria-label',state.muted?'Activar sonidos':'Silenciar sonidos');button.innerHTML=icon(state.muted?'muted':'sound');}));
document.querySelectorAll('[data-friend]').forEach(button=>button.addEventListener('click',()=>{animate(button);say(RECORDINGS[`friend-${button.dataset.friend}`]);tone(button.dataset.friend==='penguin'?'tap':'bird');}));
$('family-start').addEventListener('click',()=>{setMode('family');$('juguemos').scrollIntoView({behavior:settings.reducedMotion?'instant':'smooth'});$('tab-family').focus({preventScroll:true});});
$('open-settings').addEventListener('click',showSettings);$('close-settings').addEventListener('click',()=>$('settings-dialog').close());
$('settings-form').addEventListener('submit',event=>{
  event.preventDefault();const form=new FormData(event.currentTarget);
  settings={childName:cleanName(form.get('childName'),defaults.childName),volume:Number(form.get('volume')),rate:Number(form.get('rate')),countLimit:Number(form.get('countLimit')),reducedMotion:form.has('reducedMotion'),family:FAMILY.map(x=>cleanName(form.get(`family-${x.id}`),x.label))};
  let saved=true;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(settings));}catch{saved=false;}
  stopAudio();applySettings();state.countTarget=Math.min(state.countTarget,settings.countLimit);refreshGame();$('settings-dialog').close();feedback(saved?'¡Listo! Seguimos jugando juntos.':'¡Listo! Estos ajustes se aplican durante esta visita.');
});
const offlineKeys=['offline-yellow','offline-steps','offline-car','offline-hug','offline-bird'];let offlineIndex=0;
$('offline-idea').addEventListener('click',()=>{offlineIndex=(offlineIndex+1)%offlineKeys.length;const text=RECORDINGS[offlineKeys[offlineIndex]];$('offline-prompt').textContent=text;say(text);});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAudio();});
applySettings();refreshGame();
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>{element.classList.add('js-reveal');observer.observe(element);});}
