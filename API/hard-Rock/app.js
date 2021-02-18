const searchSongs = () => {
    const searchText = document.getElementById('search-field').value
    console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showSongs(data.data)
        })
        .catch(error => displayError('something went wrong !! plz try again later!'))
    // const res = await fetch(url)
    // const data = await res.json()
    // showSongs(data.data)


    document.getElementById('search-field').value = ''
    // document.getElementById('song-container').innerText = ''
    document.getElementById('songLyrics').innerText = ''

}
const showSongs = data => {
    console.log(data);
    const songContainer = document.getElementById('song-container')
    songContainer.innerHTML = ''
    data.forEach(songs => {
        console.log(songs);
        const songDiv = document.createElement('div')
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${songs.title}</h3>
                <p class="author lead">Album by <span>${songs.artist.name}</span></p>
                <audio controls >
                    <source src="${songs.preview}" type="audio/ogg">
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick = "getLyric(' ${songs.artist.name}', '${songs.title}')" class="btn btn-success">Get Lyrics</button>
            </div>

        `
        songContainer.appendChild(songDiv)
    });
}

const getLyric = async (artist, title) => {
    // console.log(artist, title);
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    console.log(url)
    // for error
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayLyric(data.lyrics)

    } catch (error) {
        displayError('Sorry!! i failed load lyrics, please try again!!')
    }
    //  for async
    // const res = await fetch(url)
    // const data = await res.json()
    // displayLyric(data.lyrics)

    // for fetch
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         displayLyric(data.lyrics)
    //     })

}

const displayLyric = (lyrics) => {
    const lyricsDiv = document.getElementById('songLyrics')
    lyricsDiv.innerText = lyrics

}

const displayError = (error) => {
    document.getElementById('error-message').innerText = error
}