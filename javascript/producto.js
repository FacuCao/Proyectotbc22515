let url = "https://raw.githubusercontent.com/FacuCao/jsontp/main/json.json";
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].producto}</td><td>${data[i].altura}</td><td><img src="${data[i].imagen}"></img></td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}