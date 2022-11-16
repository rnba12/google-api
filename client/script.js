const search = document.getElementById("search-btn")
search.addEventListener("click",getResults)


function getResults(e){
    e.preventDefault()
    let searchterm = document.getElementById("searchbar").value;
    searchterm = searchterm.toLowerCase();
    console.log(searchterm)
    const clothesTerms = ["clothes","tops","trousers","tshirt","shirt","skirt","dress","suit","shoes","fashion"]
    
    let searchClothes = clothesTerms.some(item => {
        if (searchterm.includes(item)) {
            return true
        } return false;
    })
    console.log(searchClothes)
}