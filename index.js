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
// {
// var oneValue =+ prompt("Enter first value");
// var twoValue =+ prompt("Enter second value");
// var anyValue = ("secndValue > firstValue");
// var threeValue =+ prompt("Enter third value");
// if (twoValue > oneValue){
// console.log(oneValue );
// }
// else if  ( threeValue > anyValue) {
//  console.log(twoValue);
// }
// else {
//     console.log(threeValue);
// }
// }

function maximum(numb1 ,numb2 , numb3) {
    if (numb1 > numb2 && numb1 > numb3) {
        console.log(`Your Number1 "${numb1} "is Greater then NUmber2" ${numb2}" and Number3 
        "${numb3}"`);
    }
    else if (numb2 > numb3 && numb2 > numb1) {
        console.log(`${numb2} is Greater then ${numb1} and ${numb3}`);
    }
    else{
        console.log(`${numb3} is Greater then ${numb1} and ${numb2}`);
    }
}
numb1 = prompt("Enter first value");
numb2 = prompt("Enter second value");
numb3 = prompt("Enter third value");

maximum(numb1,numb2,numb3)