const searchResult = document.querySelector('form');
searchResult.addEventListener('submit', getData);

function getData(e) {
    e.preventDefault()
    let searchQuery = document.getElementById('search').value;
    console.log(searchQuery);
     const newCat = JSON.stringify({query: searchQuery})
    fetch('http://localhost:3000/google/search', {method: 'POST', body: newCat, headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then(r => r.json()
    .then(window.location.replace("./results.html")))
    
    
}

