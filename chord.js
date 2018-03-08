const Note = require('./note')

class Chord {
  constructor(chord) {
    const chordVals = Chord.Chords[chord]
    if (chordVals) {
      this.note1 = new Note(chordVals[0])
      this.note2 = new Note(chordVals[1])
      this.note3 = new Note(chordVals[2])
    }
  }

  play() {
    this.note1.play()
    this.note2.play()
    this.note3.play()
  }
}

Chord.Chords = {
  'A': [ Note.Notes['A'], Note.Notes['C#'], Note.Notes['E'] ],
  'G': [ Note.Notes['G'], Note.Notes['A#'], Note.Notes['D'] ]
}

module.exports = Chord
