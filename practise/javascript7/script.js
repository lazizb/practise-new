function myFirstApp(name, age) {
    alert(`hi my name is ${name} and i am full-stack developer`)

    function showSkills() {
        let skills = ['html', 'css', 'javascript']
        for (let i = 0; i < skills.length; i++) {
            alert(`you have skils ${skills[i]}`)
        }
    }
    showSkills()
    // let checkAge = [16]
    // // function checkAge() {
    // //     if (age > 18) {
    // //         alert('exactly data for learning it')
    // //     } else if (age < 18) {
    // //         alert('super data for learning it')
    // //     }

    // // }
    // checkAge()
    
    function checkAge() {
        let age = [50]
        if (age > 18) {
            alert('exactly data for learning it')
        } else if (age < 18) {
            alert('super data for learning it')
        }
    }
    checkAge()
    function calPow(num) {
        return num * num
    }
    console.log(calPow(5));
}
myFirstApp('samar', 19)