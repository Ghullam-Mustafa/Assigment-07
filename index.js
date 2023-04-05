// // 1. Write a js program to find maximum between two numbers.
// {
//     var firstValue =+ prompt("Enter first value");
//     var secondValue =+ prompt("Enter second value");
//     if (firstValue > secondValue){
//    console.log(`your Number1 "${firstValue}" is greater then Number2 "${secondValue}"`)
// }
//     else  if(firstValue<secondValue){
//         console.log(`your Number1 ${firstValue
//         } is Less to ${secondValue}`);
//     }
//     else  if(firstValue==secondValue){
//         console.log(`your Number1 ${firstValue
//         } is Equal then ${secondValue}`);
//     }else{
//         console.log('Please Enter a Vaild Value')
//     }
    
// }
// 2. Write a js program to find maximum between three numbers.
//

// function maximum(numb1 ,numb2 , numb3) {
//     if (numb1 > numb2 && numb1 > numb3) {
//         console.log(`Your Number1 "${numb1} "is Greater then NUmber2" ${numb2}" and Number3 
//         "${numb3}"`);
//     }
//     else if (numb2 > numb3 && numb2 > numb1) {
//         console.log(`${numb2} is Greater then ${numb1} and ${numb3}`);
//     }
//     else{
//         console.log(`${numb3} is Greater then ${numb1} and ${numb2}`);
//     }
// }
// numb1 = prompt("Enter first value");
// numb2 = prompt("Enter second value");
// numb3 = prompt("Enter third value");

// maximum(numb1,numb2,numb3)

// -----------------------------------------------------------------------------------------

// 3.Write a js program to check whether a number is negative, positive or zero.
// function negativeorpositive(valueNumber) {
//     if (valueNumber > 0) {
//         console.log(`${valueNumber} number is positive` );
//     }
//     else if (valueNumber < 0) {
//         console.log(`${valueNumber} number is negitive` );
//     }
//     else {
//         console.log(`${valueNumber} number is zero` );
//     }
// }
// var valueNumber = prompt("Enter a value");
// negativeorpositive(valueNumber)

// ------------------------------------------------------------------

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.


// function negativeorpositive(valueNumber) {
//     if (valueNumber %5 == 0) {
//         console.log(`${valueNumber} number is divided by 5` );
//     }
//     else if (valueNumber %11 == 0) {
//         console.log(`${valueNumber} number is divided by 11` );
//     }
//     else {
//         console.log(`${valueNumber} number is not divided` );
//     }
// }
// var valueNumber = prompt("Enter a value");
// negativeorpositive(valueNumber)

// ----------------------------------------------------------------------------

// 5. Write a js program to check whether a number is even or odd.
// function evenodd(valueNumber) {
//     if (valueNumber %2 == 0) {
//         console.log(`${valueNumber} your number is even`);
//     } else {
//         console.log(`${valueNumber} your number is odd`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// evenodd(valueNumber)

// ---------------------------------------------------------------------------------------

// 6. Write a js program to check whether a year is leap year or not.

// function leap(valueNumber) {
//     if (valueNumber %4 == 0) {
//         console.log(`${valueNumber} This year is leap year`);
//     } else {
//         console.log(`${valueNumber} This year is not leap year`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// leap(valueNumber)

// ----------------------------------------------------------------------------------------
// 7. Write a js program to check whether a character is alphabet or not.


// function alphaet(valueNumber) {
//     if (valueNumber >='a' && 'z'>= valueNumber) {
//         console.log(`${valueNumber} This is alphabet chracter`);
//     } else {
//         console.log(`${valueNumber} This is not alphabet chracter`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// aplhabet(valueNumber)

// ---------------------------------------------------------------------------------------------

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// function vowel(valueNumber) {
//     if (valueNumber == 'a' || valueNumber == 'e'|| valueNumber == 'i'|| valueNumber == 'o' || valueNumber == 'u') {
//         console.log(`${valueNumber} This is vowel`);
//     }
  
//      else {
//         console.log(`${valueNumber} This is not vowel`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// vowel(valueNumber)

// -----------------------------------------------------------------------

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// function alpa(valueNumber) {
//     if (valueNumber >= 'a' && 'z' >= valueNumber) {
//         console.log(`${valueNumber} This is alphabet`);
//     }
//     else if (valueNumber > 0 && valueNumber < 9) {
//         console.log(`${valueNumber} This is digits`);
//     }
//     else{
//         console.log(`${valueNumber} This is special charcter`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// alpa(valueNumber)

// -----------------------------------------------------------------

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// function upperlover(valueNumber) {
//     if (valueNumber >= 'A' && 'Z' >= valueNumber) {
//         console.log(`${valueNumber} Upper case alphabet`);
//     }
//     else if (valueNumber >= 'a' && 'z' >= valueNumber) {
//         console.log(`${valueNumber} Lower case alphabet`);
//     }
//     else{
//         console.log(`${valueNumber} This is not alphabet`);
//     }
// }
// var valueNumber = prompt("Enter alphabet");
// upperlover(valueNumber)

// ----------------------------------------------------------------

// 11. Write a js program to input week number and print week day.


// function week(daysWeek) {
//    if (daysWeek == 1) {
//     console.log("Monday");
//    }
//    else if (daysWeek == 2){
//     console.log("Tuesday");
//    }
//    else if (daysWeek == 3){
//     console.log("Wednesday");
//    }
//    else if (daysWeek == 4){
//     console.log("Thursday");
//    }
//    else if (daysWeek == 5){
//     console.log("Friday");
//    }
//    else if (daysWeek == 6){
//     console.log("Saturday");
//    }
//    else if (daysWeek == 7){
//     console.log("Sunday");
//    }
//    else {
//     console.log("Write a digit between 1 to 7");
//    }
// }
// var daysWeek = prompt("Enter who's week");
// week(daysWeek)

// --------------------------------------------------------------------------

// 12. Write a js program to input month number and print number of days in that month.

// function monthName(month){

//     var result = month
    
//     if(result == "january" || result == "January"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "february" || result == "February"){
//        console.log(`${result} have 28 Days`)
//     }
//     else if(result == "march" || result == "March"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "april" || result == "April"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "may" || result == "May"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "june" || result == "June"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "july" || result == "July"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "august" || result == "August"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "september" || result == "September"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "october" || result == "October"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "november" || result == "November"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "december" || result == "December"){
//        console.log(`${result} have 30 Days`)
//     }else{
//         console.log('Please Enter Correctly! ')
//     }

// }

// var getMonthName = prompt('Enter Any Month name to See Number of Days!')
// monthName(getMonthName)

// --------------------------------------------------------------------------------------

// 13. Write a js program to count total number of notes in given amount.

// function total() {
//     var totalAmount =+ prompt("enter a number in 100");
//     var totalAmounts = parseInt(totalAmount/100);
//     if (totalAmounts) {
//         console.log(`${totalAmount} Rs have ${totalAmounts}`);
//     }
//     else{
//         console.log("enter valid number");
//     }
// }

// total()


// --------------------------------------------------------------------------------------------

// 14 . Write a js program to input angles of a triangle and check whether triangle is valid or not.

// function triangle() {
//     var angles =+ prompt("Who many angles in triangles");
//     if (angles == 3) {
//         console.log(`${angles} thats a triangle`);
//     }
//     else {
//         console.log("there is not triangle");
//     }
// }
// triangle()


// ---------------------------------------------------------------------------------------------------
