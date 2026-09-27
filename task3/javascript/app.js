// select both the form card and the result card

const bookform = document.getElementById("book-form");

const resultcard = document.getElementById("result-card");

// event for when the form submit button
bookform.addEventListener("submit", (event) =>
	{
	event.preventDefault(); // Prevents page reload

	let username = document.getElementById("username").value;
	let membershipType = document.getElementById("membershipType").value;
	let bookGenre = document.getElementById("bookGenre").value;
	let bookTitle = document.getElementById("bookTitle").value;

	// validate and check membership
	if (membershipType !== "student" && membershipType !== "regular")
	{
		alert("wrong membership type. Please enter student or regular.");
		return;
	}

	// save the validated data in an array
	let info_array = [username, membershipType, bookGenre, bookTitle];

	// call the function for the info
	renderUserData(info_array);
});

// info function
function renderUserData(userData) {
	while (resultcard.firstChild) {
		resultcard.removeChild(resultcard.firstChild);
	}

	let heading = document.createElement("h3");
	heading.textContent = "Reservation Summary";
	resultcard.appendChild(heading);

	let greetingText = userData[1] === "student" 
		? `Welcome, Scholar ${userData[0]}!` 
		: `Welcome, Member ${userData[0]}!`;

	let greetingP = document.createElement("p");
	let strongGreeting = document.createElement("strong");
	strongGreeting.textContent = greetingText;
	greetingP.appendChild(strongGreeting);
	resultcard.appendChild(greetingP);

	let noticeP = document.createElement("p");
	noticeP.textContent = "Your requested book is being reserved.";
	resultcard.appendChild(noticeP);

	let hr = document.createElement("hr");
	resultcard.appendChild(hr);

	let ul = document.createElement("ul");
	ul.style.textAlign = "left";
	ul.style.paddingLeft = "20px";

	let fieldLabels = ["Username", "Membership Type", "Book Genre", "Book Title"];

	for (let i = 0; i < userData.length; i++) {
		let li = document.createElement("li");

		let strongLabel = document.createElement("strong");
		strongLabel.textContent = fieldLabels[i] + ": ";
		li.appendChild(strongLabel);

		let valueNode = document.createTextNode(userData[i]);
		li.appendChild(valueNode);

		ul.appendChild(li);
	}

	resultcard.appendChild(ul);
}