function CorrectGuess () {
	
}
function WrongGuess () {
	
}
let guess = ""
let guessSoFar = "___"
let solution = "ABC"
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(330, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Whole))
basic.showString("Hangman!")
basic.forever(function () {
    if (solution.includes(guess)) {
        CorrectGuess()
    } else {
        WrongGuess()
    }
})
