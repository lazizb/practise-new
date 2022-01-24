// first way
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// // second way
// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (
//     i < 10
// )

// third way
// let i = 0
// while (i < 10) {
//     console.log(i)
//      i++
// }




// for (let i = 0; i < wuestions.length; i++) {
//     answers[i] = prompt(wuestions[i])
// }
// console.log (answers)
let answers = [0]
let wuestions = [
    'what is your name ',
    'what is your phone',
    'how old you'
]
let i = 0;   
do {
    answers[i] = prompt(wuestions[i])
    console.log(i)
    i++
} while (
    i < wuestions.length
)

// third way