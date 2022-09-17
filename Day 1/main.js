const itemsElements = document.querySelectorAll(".item");

itemsElements.forEach((element) => {
	element.addEventListener("click", (e) => {
		itemsElements.forEach((child) => {
			child.style.width = "6%";
			child.children[0].style.opacity = 0;
		});
		setTimeout(() => {
			e.target.children[0].style.opacity = 1;
		}, 500)
		e.target.style.width = "60%";
	});
});
