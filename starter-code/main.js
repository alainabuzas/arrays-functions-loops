/*
	Part 1: We have an array of people's ages, saved in the variable "ages".
	Write a for-loop that will print each of the elements to the console.
*/

var ages = [28, 30, 17, 14, 12, 20, 13, 36, 68, 49, 37, 55, 56, 26];

for (i = 0; i <= ages.length; i++) {
    console.log(ages[i]);
}

/*
	Part 2: Let's create a new variable, "younger", which holds an empty array.
	Using a for-loop, populate the "younger" array with numbers from the "ages"
	array which are less than or equal to 20.

	Hint: Use the for-loop to go through each element in the "ages" array.

	Hint: Use the array.push() method to add an element to the end of an array.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*/

var younger = [];

for (i = 0; i <= ages.length; i++) {
    if (ages[i] < 20) {
        younger.push(ages[i]);
    }
}

console.log(younger)

/*
	Part 3: We're comfortable going through an element from beginning to end, but let's
	flip this around. With the new "younger" array you created in the last part,
	print out the elements so that the last element is printed out first, and the
	first element is printed out last.

	Hint: What should the index for your for-loop be initialized to if we want to start
	at the end of the array?

	Hint: What would the conditional for your for-loop look like?
*/

console.log(younger.reverse)

/*
	Part 4: Now that you've finished the first 3 parts using a for-loop, repeat the same exercises
	(Part 1, Part 2, and Part 3) using a while-loop.
*/

//part a
var i = 0;

while (ages[i]) {
    console.log(ages[i]);
    i++;
}


// part b

// if # in ages is < 20, add to younger array. if # is > 20, do not add to younger array. repeat until list is finished.


var younger = [];
while (i <= ages.length) {
    if (ages[i] < 20) {
        younger.push(ages[i]);
    }
    i++;
}

console.log(younger);


//part c

? ?

/*
	Part 5: Create a function, getDayOfWeek, that will tell you what day of the week it is.
	For example, getDayOfWeek(1) would return "Monday", and getDayOfWeek(5) would return "Friday".
	An invalid day of the week should return the string, "Please enter a valid day of the week".

	Hint: Using a "switch" statement might result in cleaner code
*/


// this is confusing because a switch isn't set up like a regular function, and does not require the getDayOfWeek

var dayNumber = 1

switch (dayNumber) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        day = null;
        alert('Invalid value');
}

console.log(`Today is ${day}`);

/*
	Bonus - Part 6: All this work is making me hungry. Let's create a new function, addPepperoniToPizza,
	that accepts an array of pizza ingredients. If the array of ingredients already contains
	pepperoni, then return the pizza ingredients without doing anything to it. If the array of
	ingredients does not contain pepperoni, then add pepperoni to the array and return it.

	For example, addPepperoniToPizza(['onions', 'olives', 'pineapple']) should return
	['onions', 'olives', 'pineapple', 'pepperoni'].

	And addPepperoniToPizza(['spinach', 'pepperoni', 'mushrooms']) should return
	['spinach', 'pepperoni', 'mushrooms'].

	Hint: Take a look at the array.indexOf() method. How can we use this to check if we have pepperoni
	in our array?
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*/

var ingredients = ['pepperoni'];

function addPepperoniToPizza(ingredients) {
    for (i = 0; i <= ingredients.length; i++) {
        if (i == 'pepperoni') {
            console.log(ingredients[i]);
        } else {
            ingredients.push('pepperoni');
            console.log(ingredients[i]);
        }
    }
}
