const drumPad = document.querySelectorAll('div.key')
const soundPad = document.querySelectorAll('audio[data-key]')

const handlePressed = (key) => {
	const pad = document.querySelector(`div[data-key=${key}]`)
	const sound = document.querySelector(`audio[data-key=${key}]`)
	sound.currentTime = 0
	sound.play()
	pad.classList.add('playing')
	handleTransition(pad)
}

const handleTransition = (el) => {
	el.addEventListener('transitionend', (e) => {
		el.classList.remove('playing')
	})
}
// event click
window.addEventListener('keydown', (e) => {
	if (!/Key[a|s|d|f|g|ha|j|k|l]/gi.test(e.code)) {
		return
	}
	handlePressed(e.key)
})
