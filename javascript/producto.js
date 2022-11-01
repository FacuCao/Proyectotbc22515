const api_url = "https://pokeapi.co/api/v2/pokemon/"


async function traerpoke(){
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(data)
    // fetch(api_url).then(function(response){
    //     return response.json()
    // }).then(function(obj){
    //     console.log(obj)
    // }).catch(function(error){
    //     console.log(error)
    // })

    document.getElementById(json1).innerHTML="<h4>" + data.results.name + "</h4>"
    console.log()
}

traerpoke()