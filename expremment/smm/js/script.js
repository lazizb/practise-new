let hpbtn = document.querySelectorAll('.nav__btn2')[0],
    modal = document.querySelectorAll('.modal')[0],
    header__title2 = document.querySelectorAll('.header__title2')[0],
    closeBtn = document.querySelector('.close'),
    btn__name = document.querySelectorAll('.contactform_name')[0]
    contactForm = document.getElementsByClassName('contactform_name') [0],
    message = document.getElementsByName('message')[0]
  






function hover() {
    header__title2.textContent = 'lazjon'
}
header__title2.addEventListener('mouseenter', hover)
header__title2.addEventListener('mouseleave', function () {
    header__title2.textContent = 'smm'
})

hpbtn.addEventListener('click', function () {
    modal.style.display = 'block'
})


closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'
})
contactForm.addEventListener('input', function () {
    message.value = `my name is ${contactForm.value} i want:`    
})