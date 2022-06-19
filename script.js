const API_URL = "https://zoo-animal-api.herokuapp.com/animals/rand"

fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data))