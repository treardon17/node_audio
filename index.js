const Accelerometer = require('./accelerometer')
const Note = require('./note')
const Chord = require('./chord')

// const gChord = new Chord('G')
// gChord.play()

const note = new Note(Note.Notes['A'])
const note2 = new Note(Note.Notes['C#'])
const note3 = new Note(Note.Notes['E'])
note.play()
note2.play()
note3.play()

const accelerometer = new Accelerometer((input) => {
  note.shiftFrequency(input.attitudeRoll)
  note2.shiftFrequency(input.attitudePitch)
  note3.shiftFrequency(input.attitudeYaw)
}, 10)