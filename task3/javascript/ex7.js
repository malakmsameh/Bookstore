const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", (event) => {
	event.preventDefault();
	const myItem = input.value.trim();

	// Prevent adding empty items
	if (myItem === "") return;

	input.value = "";
	input.focus();

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listButton = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myItem;
		
	listItem.appendChild(listButton);
	listButton.textContent = "Delete";
		
	list.appendChild(listItem);

	listButton.addEventListener("click", () => {
		list.removeChild(listItem);
	});
});