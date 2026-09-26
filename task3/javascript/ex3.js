// Q2

let nums = Number(prompt("Q2 -> enter a number:"))
alert(nums)

// Q3
let num1 = Number(prompt("Q3 ->enter the first number:"))
let num2 = Number(prompt("Q3 ->enter the second number:"))

if (num1 > num2)
	console.log(num2 , num1)
else
	console.log(num1 , num2)

// Q4
let num3 = Number(prompt("Q4 ->enter the first number:"))
let num4 = Number(prompt("Q4 ->enter the second number:"))

if (num3 > num4)
	console.log(num3)
else
	console.log(num4)

// Q5
let num5 = Number(prompt("Q5 ->enter the first number:"))
let num6 = Number(prompt("Q5 ->enter the second number:"))

console.log(num5 + num6)

// Q6
let num = Number(prompt("Q6 ->please eneter a number:"))

switch(num)
{
	case 1:
		console.log("ONE")
		break
	case 2:
		console.log("TWO")
		break
	case 3:
		console.log("THREE")
		break
	case 4:
		console.log("FOUR")
		break
	case 5:
		console.log("FIVE")
		break
	case 6:
		console.log("SIX")
		break
	case 7:
		console.log("SEVEN")
		break
	case 8:
		console.log("EIGHT")
		break
	case 9:
		console.log("NINE")
		break
	default:
		console.log("PLEASE TRY AGAIN")
}

// Q7
let this_year = 2026

let age = Number(prompt("Q ->7 please enter your year of birth:"))

if (age > 60)
	alert("You may join the seniors' program.");
else if (age > 30)
	alert("You are not eligible. You may join other programs."); 
else if (age <= 30 && age >= 18 )
	alert("You are eligible. Start your application."); 
else
	alert("You may join the kids' program.");

console.log(age);

// Q8

function to_up_low(str)
{
	let res = ""

	for (let i = 0; i < str.length; i++)
	{
		if (str[i] >= 'a' && str[i] <= 'z')
			res += str[i].toUpperCase()
		else if (str[i] >= 'A' && str[i] <= 'Z')
			res += str[i].toLowerCase()
		else res = str[i]
	}

	return res
}
console.log(to_up_low(prompt("Q8 ->please enter a string:")))


// Q9

function camel_case(str) {
	let res = "";

	for (let i = 0; i < str.length; i++)
	{
		if (str[i] !== " ")
			res += str[i];
	}

	return res;
}
console.log(camel_case("Coding Academy by Orange"));