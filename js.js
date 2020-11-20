// Veiksmas button
let btn = document.getElementById('load').addEventListener('click', () => {
    loadData()
})

let loadData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.forEach(function (each) {
                console.log(each.name)
                $('.big-box').append(
                    `<img src="${each.flag}" height="200" width="200"> ${each.name} ` // pasiprasom flag, kad ismestu ir country name salia ju.
                )
            })
            console.log(JSON.stringify(data))
        })


        .catch((error) => {
            console.error(error.message)
       })
}