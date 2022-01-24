function calculateBmi() {
    const name = document.getElementById('name');
    const weightVAl = document.getElementById('weight');
    const heightVAl = document.getElementById('height');
    const result = document.querySelector('#result')
    const weight = parseFloat(weightVAl.value);
    const height = parseFloat(heightVAl.value)
    let bmi = weight / (height * height).toFixed(2);
    
    result.textContent = `${name.value}'s BMI is ${bmi}`
}


























// function calculateBmi(a, b) {
//        console.log(a+b);
// }
// function calculateBmi(name, weight, height) {
//     let bmi = weight / (height * height)
//     // console.log(name+"'s BMI is" +bmi) ;   
//     console.log(`${name}'s BMI is ${bmi}`)
// }
// calculateBmi("usmon", 70, 1.8);