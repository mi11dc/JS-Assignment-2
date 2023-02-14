// Declaring and Initializing Variables
var book1 = "The God of Small Things";
var book2 = "A Suitable Boy";
var book3 = "A Fine Balance";
var book4 = "The Inheritance of Loss";
var book5 = "Nectar in a Sieve";
var book6 = "The Recognition of Sakuntala";
var book7 = "The Triple Mirror of the Self";
var book8 = "Untouchable";
var book9 = "All about H. Hatterr";
var book10 = "The Great Indian Novel";
var userInputTitle = "Which top 10 book would you like?";
var userInputPlaceholder = "Pick a number: 1-10";
var bookOutputMsg = "Number num on the list is ";
var wrongInputMsg = "Please enter a number between 1 and 10!";
isInvalidInput = false;
var userInput;
var booksArray = [];

// Add valriables in array
booksArray = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

// Console log all books from array with foreach loop
booksArray.forEach((book, index) => {
    console.log("Book " + (index+1) + ": " + book);
});

// Logic
do {
    userInput = parseInt(prompt(userInputTitle, userInputPlaceholder));

    switch(userInput) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            alert(bookOutputMsg.replace("num", userInput) + "\"" + booksArray[userInput - 1] + "\".");       
            isInvalidInput = false;
            break;
        default:
            alert(wrongInputMsg);
            isInvalidInput = true;
            break;
    }
}
while(isInvalidInput === true);