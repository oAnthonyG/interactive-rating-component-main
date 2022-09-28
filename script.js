const ratesInputButton = document.querySelectorAll('.main__form__note');
const buttonSubmit = document.querySelector('.main_button');
const firstMainCard = document.querySelector('.first-card');
const secondMainCard = document.querySelector('.second_card');
const rating = document.querySelector('#rating');

buttonSubmit.addEventListener('click', (event)=>{
  event.preventDefault();
  secondMainCard.classList.remove('-active')
  firstMainCard.style.display = "none"
})

ratesInputButton.forEach((rate)=>{
  rate.addEventListener('click', ()=>{
    rating.innerHTML = rate.innerHTML
  })
})
