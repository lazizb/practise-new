let person = 'abdulla';
let age = 34;
isMaried = true;
let x = 1,
    y = 2

let z = x + y;
console.log(z)



// BMI = body mass index
// BMI = Weight / (height * height)
// BMI < 14.9 underweight ; 14.00 < bmi >24.99 normal; 25 <bmi overweight 




let markWeight = prompt('enizi belgilen');
let markHeight = prompt('boyizzi belgiline');
let markBmi = markWeight / (markHeight * markHeight);
console.log(markBmi)
let bobWeight = 65,
    bobHeight = 1.65
bobBmi = bobWeight / (bobHeight * bobHeight);

if (bobBmi < 14.99 && bobBmi >= 90) {
    alert('ozginsiz')
} else if (bobBmi < 15 && bobBmi >= 25) {
    alert('siz normalnisizi')
   
}
else{
    alert('ozroq ozing')
}







// let studentAge = 16;
// let votingAge = 18;




// if (studentAge > votingAge){
//     // if TRUE  
//     console.log('you can Vote')      
// }else{
//     // if FALSE
//     console.log('COme back later')
// }
// let answers = prompt('ballizi belgilen')

// if(answers >= 90){
//     alert("sizga gap yo");
// }else if(answers < 90 && answers >=80){
//     alert('sal harakt qilin');
// }else if(answers < 80 && answers >=70){
//     alert('ilinib qoldiz oqishga');
// }
// else{
//     alert('siz tentekansiz')
// }