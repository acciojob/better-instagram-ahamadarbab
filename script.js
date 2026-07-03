const draggables = document.querySelectorAll("img");
const containers = document.querySelectorAll(".flex > div");

let dragged = null;

draggables.forEach((img) => {

	img.addEventListener("dragstart", () => {
		dragged = this;
		this.classList.add("selected");
	});

	img.addEventListener("dragend", () => {
		this.classList.remove("selected");
	});
	
});

containers.forEach((container) => {
	
	container.addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	container.addEventListener("drop", (e) => {
		e.preventDefault();

		const target = this.querySelector("img");

		if(!dragged || target === dragged) return;

		const draggedParent = dragged.parentNode;
		const targetParent = target.parentNode;

		draggedParent.appendChild(target);
		targetParent.appendChild(dragged);
	})
})