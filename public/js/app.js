console.log('client side javascript is loaded!!!');


const thisForm  = document.querySelector('form');
const searchInput  = document.querySelector('input')
const message1  = document.querySelector('#p1')
const message2  = document.querySelector('#p2')
thisForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = searchInput.value;
    console.log('testing='+location);
    fetch('http://localhost:5000/weather?location='+location).then((response) => {
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error);
        }
        else{
            console.log(data.location);
            console.log(data.foreCast);
            message1.textContent = data.location;
            message2.textContent = data.foreCast;
        }
    })
})
})
