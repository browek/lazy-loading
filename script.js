const API_URL = "https://zoo-animal-api.herokuapp.com/animals/rand"

const container = document.querySelector('.container')

const render = data => {
    console.log(data)

    const {
        image_link, 
        name, 
        latin_name, 
        animal_type, 
        diet,
        geo_range,
        habitat
    } = data

        const div = document.createElement('div');
        div.classList.add('animal');
        div.innerHTML = `
        <img 
            src="${image_link}" 
            alt="Picture of ${name}" 
            class="animal-image"
        >
        <div class="animal-content">
            <h1 class="animal-name">${name}</h1>
            <p>Latin name:</p>   <i>${latin_name}</i>
            <p>Animal type:</p>  <i>${animal_type}</i>
            <p>Diet:</p>         <i>${diet}</i>
            <p>Location:</p>     <i>${geo_range}</i>
            <p>Habitat:</p>      <i>${habitat}</i>
        </div>
        `

    container.appendChild(div)

    getData()
}

const success = response => response.json()
const error = error => console.log(error)

const checkPosition = () => {
    const topPosition = window.pageYOffset
    const bottomPosition = window.document.body.offsetHeight
    const windowHeight = window.innerHeight
    if(topPosition > bottomPosition - windowHeight - 500) {
        return true
    } else {
        return false
    }
}

const getData = () => {
    if(checkPosition()) {
        fetch(API_URL)
                .then(success)
                .then(render)
                .catch(error)
    }
}
   
window.addEventListener('scroll',function(e){
    getData()
})
getData() 