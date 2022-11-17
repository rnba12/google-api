const search = document.querySelector("form")
//search.addEventListener("click",getResults)
let searchCat; 

function getResults(e){
    e.preventDefault()
    document.getElementById('noresults').textContent = "";
    document.getElementById('results').style.display = 'block';
    let searchterm = document.getElementById("searchbar").value;
    searchterm = searchterm.toLowerCase();
   
    console.log(searchterm)
    const clothesTerms = ["clothes","tops","trousers","tshirt","shirt","skirt","dress","suit","shoes","fashion"]
    const toysTerms = ["toys","games","lego","puzzles"
]
    let searchClothes = clothesTerms.some(item => {
        if (searchterm.includes(item)) {
            searchCat = "clothes";
            return true
        }
           
            return false;
        })
    let searchToys = toysTerms.some(item => {
        if (searchterm.includes(item)) {
            searchCat = "toys"
            return true
            
        }
    } )
          
    let validTerm = searchClothes || searchToys; 
     if (validTerm) {
       searchi()
     } else {
         document.getElementById('noresults').textContent = "No Results"
         document.getElementById('results').style.display = 'none';
     }
}


search.addEventListener('submit', getResults)

function searchi(e) {
    // e.preventDefault()
    let url = `http://localhost:3000/google/${searchCat}`;
    fetch(url)
    .then(r => r.json())
    .then(Data => {
        for (let i = 1; i < 11; i++) 
    {
        document.getElementById(`${i}_displayURL`).textContent = Data[`result${i}`].displayurl
        document.getElementById(`${i}_heading`).textContent = Data[`result${i}`].heading
        document.getElementById(`${i}_heading`).setAttribute('href', Data[`result${i}`].landingpage)
        document.getElementById(`${i}_description`).textContent = Data[`result${i}`].description
        if (i < 4 ) {
        document.getElementById(`${i}_extensions1`).textContent = Data[`result${i}`].extentions.extentionsOne
        document.getElementById(`${i}_extensions2`).textContent = Data[`result${i}`].extentions.extentionsTwo
        document.getElementById(`${i}_extensions3`).textContent = Data[`result${i}`].extentions.extentionsThree
        document.getElementById(`${i}_extensions4`).textContent = Data[`result${i}`].extentions.extentionsFour 
        }
        
    }
    })
    
}
