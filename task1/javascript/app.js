//enter name
let name = prompt("Please enter your name:")

//input type
let member_type = prompt("Enter your membership type:")

// check the membeeship type
if (member_type == "student")
	alert("Welcome, Scholar " + name + "!")
else if (member_type == "regular")
	alert("Welcome, Member " + name + "!")
else
	alert("Welcome, " + name + "!")

//genre check
let genre = prompt("Do you prefer a fiction or non-fiction book genre?")

//borrow a book
let book_title = prompt("Write the specific title of the book you want to borrow:")

//book reserved succeessfully
alert("Your requested book is being reserved.")

//printing
console.log(+ name + " " + book_title)