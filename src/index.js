const container =document.querySelector('.main-grid')

const success= document.querySelector('.second-grid')

const submitButton=document.querySelector('.submit')


submitButton.addEventListener('click',() =>{
    success.classList.remove('hidden')
    container.style.display= 'none'
})