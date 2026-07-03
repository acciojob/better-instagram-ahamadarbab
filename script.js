//your code here
const images = document.querySelectorAll(".image");

let draggedItem = null;

images.forEach((image) => {
	image.addEventListener("dragstart", () => {
		draggedItem = this;
		this.classList.add("selected");
	});

	image.addEventListener("dragend", () => {
		this.classList.remove("selected");
	});

	image.addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	image.addEventListener("drop", (e) => {
		e.preventDefault();

		if(draggedItem === this) return;

		// Swap IDs so background images are swapped
		const tempId = draggedItem.id;
		draggedItem.id = this.id;
		this.id = tempId;
	});
});