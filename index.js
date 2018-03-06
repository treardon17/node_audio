var Generator = require('audio-generator/stream');
var Speaker = require('audio-speaker/stream');

class Audio {
  constructor(frequency) {
    this.speaker = Speaker()
    this.frequency = frequency
  }

  play() {
    Generator(
    	 (time) => {
    		return [
    			Math.sin(Math.PI * 2 * time * (this.frequency - 1)), //channel 1
    			Math.sin(Math.PI * 2 * time * (this.frequency + 1)), //channel 2
    		]
    	},
      {
    		duration: Infinity,
    		period: Infinity
    })
    .on('error', (e) => {
    	console.log('Error:', e)
    })
    .pipe(this.speaker);
  }

  changeFrequency(frequency) {
    this.frequency = frequency
  }
}

// Static constants
Audio.Notes = {
  'A': 440,
  'A#': 466.16,
  'B': 493.88,
  'C': 523.25,
  'C#': 554.37,
  'D': 587.33,
  'D#': 622.25,
  'E': 659.25,
  'F': 698.46,
  'F#': 739.99,
  'G': 783.99,
  'G#': 830.61
}

const mult = 1
const audio = new Audio(Audio.Notes['A'] * mult)
const audio2 = new Audio(Audio.Notes['C#'] * mult)
const audio3 = new Audio(Audio.Notes['E'] * mult)
audio.play()
audio2.play()
audio3.play()
