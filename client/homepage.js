const searchResult = document.getElementById('searchBar');
let searchQuery;
searchResult.addEventListener('submit', getData);

function getData() {
    searchQuery = searchResult.value;
}

module.exports = searchQuery;