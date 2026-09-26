// Q7

for (let i=0;i<=5;i++)
{
	alert("window number : " + i)
}

// Q8
let nums=""
for(let j=0;j<=5;j++)
{
	nums = j + " "
}
alert("numbers : " + nums)


// Q9
// for (let n =0n<=20n++)
let n =0
while (n <=20)
{
	if (n % 3 == 0)
		console.log(n)
	n++
}

// Q10

let numbers
numbers=Number(prompt("enter a number : "))
while(numbers <0|| numbers>100) 
{
alert("the number has to be between 0 and a 100 enetr a new number")
numbers=Number(prompt("enter another number between 0 and 100 : "))
}
alert("you entered a valid number : " + numbers)

// Q11

let input = prompt("enter a number : ")
let num = Number(input)

while (isNaN(num) || num < 0 || num > 100)
{
	alert("the number has to be between 0 and a 100 enetr a new number")
	input = prompt("enter another number between 0 and 100 : ")
	num = Number(input)
}

alert("You entered a valid number : " + num)

// Q12

let nn=Number(prompt("enter a number : "))
let sum=0
for (let x=0;x<=nn;x++)
{
	sum=sum+x
}
alert("the sum is : " +sum)

// Q13

let n1=Number(prompt("enter a number : "))
let sum2=0
for (let y=0;y<=n1;y++)
{
	sum2=sum2+y
}
let avg=sum2/(n1+1)
alert("the avg is : "+avg)

