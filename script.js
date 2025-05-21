const contenedorCanciones = document.getElementById('loqueseaid')

function CrearHTMLCancion(loquesea) {
    const li = document.createElement('div')
    li.addEventListener('click', function () {
        document.getElementById('title').innerHTML = loquesea.title
        document.getElementById('author').innerHTML = loquesea.author
        document.getElementById('audio1').setAttribute("src", loquesea.audio.url)
    })

    li.setAttribute('class', 'musiquita')
    li.innerHTML = `
            <img src="${loquesea.image.url}" alt="">
            <h2>${loquesea.title}</h2>
            <p>${loquesea.author}</p>
    `
    return li

}


// Make a request for a user with a given ID
axios.get('https://api.institutoalfa.org/api/songs')
    .then(function (response) {
        // handle success
        response.data.songs.map(function (loquesea) {
            contenedorCanciones.appendChild(CrearHTMLCancion(loquesea))
        })
    })