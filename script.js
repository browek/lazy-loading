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
    const fragment = document.createDocumentFragment();

        const div = document.createElement('div');
        div.classList.add('animal');
        div.innerHTML = `
        <img 
            src="${image_link}" 
            alt="Picture of ${name}" 
            class="animal-image"
        >
        <div class="animal-content">
            <h1 class="animal-name">
                ${name}
            </h1>
            <h3 class="latin-name">
                Latin name: ${latin_name}
            </h3>
            <p>Animal type: ${animal_type}</p>
            <p>Die:t ${diet}</p>
            <p>Location: ${geo_range}</p>
            <p>Habitat: ${habitat}</p>
        </div>
        `
        fragment.appendChild(div)

    container.appendChild(fragment)

    if(checkPosition) {
        getData()
    }
}

const success = response => response.json()
const error = error => console.log(error)

const checkPosition = () => {
    let topPosition = window.pageYOffset
    let bottomPosition = window.document.body.offsetHeight
    let windowHeight = window.innerHeight
    if(topPosition > bottomPosition - windowHeight) {
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