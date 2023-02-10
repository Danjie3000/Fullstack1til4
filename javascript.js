// Øvelse "Basics" 
    const firstName = "Anders";
    const lastName = "Latif";
    console.log("My name is " + firstName + ". My last name is " + lastName);

// Øvelse "numbers and Strings"
    const year = 2022;
    const number = 1;
    console.log(year + number);

// Consol.log result 3  
    const resultOne = Number(year) + number;
    const resultTwo = parseInt(year) + number;
    const resultThree = + year + number;

    console.log(Number("2343dsfdsfds"));
    console.log(parseInt("2343dsfdsfds"));
    console.log( + year + number);

// Øvelse "Add numbers from string to float"
    const numberOne = "1.10";
    const numberTwo = "2.30";
    const resultOne1 = Number(numberOne) + Number(numberTwo);
    console.log(resultOne1);

// Øvelse "Add the numbers and the total with 2 decimals"
    const NumberOne = "1.10";
    const NumberTwo = "2.30";

    const resultTwo1 = Number(NumberOne) + Number(NumberTwo);
    const resultWithTwoDecimals = resultTwo1.toFixed(2);

    console.log(resultWithTwoDecimals);

// Øvelse "Decimals and average"
    const one = 10;
    const two = 45;
    const three = 98;

    const average = (one + two + three) / 3;
    const averageWithFiveDecimals = average.toFixed(5);
        
    console.log(averageWithFiveDecimals);

// Øvelse "Get the character by index" 
    const letters = "abc";

    const charCOne = letters[2];
    const charCTwo = letters.charAt(2);

    console.log(charCOne);
    console.log(charCTwo);

// Øvelse "Replace"
    const fact = "You are learning javascript!";

    const factCapitalizedJ = fact.replace("j", "J");
    console.log(factCapitalizedJ);

// Øvelse "Retrieve value from object by key"
    const myObj = { message: "Hello, earthling! I bring peace." };

    console.log(myObj.message);

// Øvelse "Defining an object"
    const danjieObj = { firstName: "Dannie", age: 33 };
        
    console.log(danjieObj);

// Øvelse "Add a property"
    const stackOverflow = {};
    // make a rule called isAllowed and let the value be true
    const isAllowed = true;

// Øvelse "Remove a property"
    const thisSong = { description: "The best song in the world." };
    // remove the property "description" and add a property called "about" that should say "Just a tribute."
    delete thisSong.description;
    thisSong.about = "Just a tribute."; 
    console.log(thisSong);

// Exercise 1 - Array Positioning
    const letters1 = ["a","b","c"];
    // show b in the console 
    console.log(letters1[1]);

// Exercise 2 - Array Positioning
    const friends = [];
    // What a lonely array. Add at least 3 friend objects to it.
    friends.push({name: "Alpha"}, {name: "Beta"}, {name: "Charlie"});
    console.log(friends);

// Exercise 3 - Get the index of first occurance of that value.
    const significantMathNumbers = [0, 2.718, 3.14159, 1729];
    // You want to programmatically find where the number 1729 is in the array.
    // programmatically means that no finger counting allowed. There is a method for this (finding index based of value).
    const indexOf1729 = significantMathNumbers.indexOf(1729);
    console.log(indexOf1729);

// Exercise 4 - Inserting elements
    const diet = ["tomato", "cucumber", "rocket"];
    // You are a programmer. In one line (one statement), insert hamburger, soda and pizza between the elements cucumber and rocket
    diet.splice(2, 0, "hamburger", "soda", "pizza");
    console.log(diet);

// Exercise 5 - Remove elements
    // Remove the LAST element of the array.
    // Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
    diet.pop(5);
    console.log(diet);

// Exercise 6 - Copy array
    // You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.
    const dinnerTray = diet.map(x => x);
    console.log(dinnerTray);

// Exercise 7 - For loop
    const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];
    // log every second char in the array starting from b
    for (let i = 1; i < lettersExpanded.length; i += 2) {
        console.log(lettersExpanded[i]);
    }

// Exercise 8 - For loop and if statement
    const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];
    const discardedNumbers = [];
    // log the element if the number is above 6 or below 0
    // else push them to the array discardedNumbers
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 6 || numbers[i] < 0) {
            console.log(numbers[i]);
        } else {
            discardedNumbers.push(numbers[i]);
        }
    } console.log(discardedNumbers);