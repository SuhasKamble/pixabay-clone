const submit = document.getElementById('submit')
const input = document.getElementById('input')
const container = document.querySelector('.container')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(input.value==""){
        input.value="flower"
    }
    fetch(`https://pixabay.com/api/?key=15827863-aa46d1474e83bb6e56d23734f&q=${input.value}&image_type=photo`)
    .then(res=>res.json())
    .then(data=>{
        allData = data.hits
        let htmlContent = ''
        allData.forEach(element => {
            let image = ` <div class="image-div">
            <a href=${element.largeImageURL}>
            <img src=${element.webformatURL} alt="">
            </a>
        </div>`
        console.log(element)
      htmlContent+=image
        });
        
        container.innerHTML=htmlContent
    })
})