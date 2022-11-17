const searchResult = document.getElementById('searchButton');
searchResult.addEventListener('click', getData);

function getData(e) {
    e.preventDefault()
    let searchQuery = document.getElementById('search').value;
    console.log(searchQuery);
     const searchCat = JSON.stringify({query: searchQuery})
    fetch('http://localhost:3000/google/search', {method: 'POST', body: searchCat, headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(r => r.json()
    .then(window.location.replace("./results.html")))
    
    
}

const lucky = document.getElementById('lucky')

lucky.addEventListener('click', getLucky)

function getLucky(e) {
    e.preventDefault();
    const randomTerms = ["clothes","tops","trousers","tshirt","shirt","skirt","dress","suit","shoes","fashion", "toys","games","lego","puzzles", "Baby"]
    let random = Math.floor(Math.random() * randomTerms.length);
    let searchQuery = randomTerms[random];
    const searchCat = JSON.stringify({query: searchQuery})
    fetch('http://localhost:3000/google/search', {method: 'POST', body: searchCat, headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(r => r.json()
    .then(window.location.replace("./results.html")))
}
