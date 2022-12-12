let isMainContainerAdjusted = true
const mainContainer = document.querySelector(".container")
const navBtns = document.querySelectorAll(".nav-btn .icon-container")
const redCircle = document.querySelector(".nav-btn")
const lis = document.querySelectorAll("li")

navBtns.forEach((navBtn) =>
	navBtn.addEventListener("click", (e) => {
		let deg, degCircle, move
		if (isMainContainerAdjusted) {
			deg = -20
			degCircle = -80
			move = [2, 4, 6]
		} else {
			deg = 0
			degCircle = 0
			move = [-8, -8, -8]
		}
		mainContainer.style.transform = `rotate(${deg}deg)`
		redCircle.style.transform = `rotate(${degCircle}deg) translate(-50%, -50%)`

		lis.forEach((elem, idx) => {
			elem.style.transform = `translateX(${move[idx]}rem)`
		})

		isMainContainerAdjusted = !isMainContainerAdjusted
	})
)
