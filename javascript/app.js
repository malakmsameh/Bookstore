function getMembershipType()
{
	let member_type = prompt("Enter your membership type (student or regular):");

	while (member_type !== "student" && member_type !== "regular")
		{
		member_type = prompt("Invalid entry. Please enter 'student' or 'regular':");
	}

	return member_type;
}

function collectUserData()
{
	let name = prompt("Please enter your name:");
	let member_type = getMembershipType();
	let genre = prompt("Do you prefer a fiction or non-fiction book genre?");
	let book_title = prompt("Write the specific title of the book you want to borrow:");

	let userData = [name, member_type, genre, book_title];

	return userData;
}

function displayUserData(userData)
{
	for (let i = 0; i < userData.length; i++)
		{
		console.log(userData[i]);
	}
}

let userData = collectUserData();

if (userData[1] === "student")
	{
	alert("Welcome, Scholar " + userData[0] + "!");
} else
	{
	alert("Welcome, Member " + userData[0] + "!");
}

alert("Your requested book is being reserved.");

displayUserData(userData);