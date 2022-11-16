const search = document.querySelector("form")
//search.addEventListener("click",getResults)


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
    if (searchClothes) {
       searchi()
    } else {
        document.getElementById('noresults').textContent = "No Results"
    }
}


search.addEventListener('submit', getResults)

function searchi(e) {
    // e.preventDefault()
    let url = `http://localhost:3000/google/clothes`;
    fetch(url)
    .then(r => r.json())
    .then(Data => {
        for (let i = 1; i < 11; i++) 
    {
        document.getElementById(`${i}_displayURL`).textContent = Data[`result${i}`].displayurl
        document.getElementById(`${i}_heading`).textContent = Data[`result${i}`].heading
        document.getElementById(`${i}_heading`).setAttribute('href', Data[`result${i}`].landingpage)
        document.getElementById(`${i}_description`).textContent = Data[`result${i}`].description
        // document.getElementById(`${i}_extensions1`).textContent = Data[`result${i}`].extentions.extentionsOne
        // document.getElementById(`${i}_extensions2`).textContent = Data[`result${i}`].extentions.extentionsTwo
        // document.getElementById(`${i}_extensions3`).textContent = Data[`result${i}`].extentions.extentionsThree
        // document.getElementById(`${i}_extensions4`).textContent = Data[`result${i}`].extentions.extentionsFour
    }
    })
    
}
