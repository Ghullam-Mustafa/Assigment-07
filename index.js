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
function vowel(valueNumber) {
    if (valueNumber >= 'a' && 'z' >= valueNumber) {
        console.log(`${valueNumber} This is alphabet`);
    }
    else if (valueNumber > 0 && valueNumber < 9) {
        console.log(`${valueNumber} This is digits`);
    }
    else{
        console.log(`${valueNumber} This is special charcter`);
    }
}
var valueNumber = prompt("Enter a value");
vowel(valueNumber)

// -----------------------------------------------------------------

