// First way
// for (let i = 0; i < 10; i++) {
//     console.log(i)    
// }

// second way
// let i = 0;
// do{
//     console.log(i)
//     i++
// }while(
//     i<10
// )
// third way
// let i = 0
// while (i<10)
// {
//     console.log(i)
//     i++
// }





let aswers = []
let questions = [
    'wahat is your name',
    'wahta is your ol you',
    'what is you phone '
]

// for (let i = 0; i < questions.length; i++){
//     aswers[i] = prompt(questions[i])
// }
// console.log(aswers); 

// let i = 0; 
// do{
//     aswers[i] = prompt(questions[i])
//     i++
//     console.log(aswers)
// }while(
//     i < questions.length
// )


let i = 0
while (i < questions.length)
{
    aswers[i] = prompt(questions[i])
    console.log(aswers)
    i++
}