// Array of names (you can add more names for testing)
var names = ["John", "Jane", "Paul", "Jill", "James", "George"];

// Loop through the names array
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase(); // Get the first letter and make it lowercase

    if (firstLetter === 'j') {
        // If the name starts with 'J' or 'j', say goodbye
        console.log("Goodbye " + names[i]);
    } else {
        // Otherwise, say hello
        console.log("Hello " + names[i]);
    }
}
