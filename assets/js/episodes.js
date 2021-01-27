import { renderCharactersPage } from "./characters.js"

export function renderEpisodesPage(){
    let $sidebar = $(".sidebar")

    $.ajax({
        type: 'GET',
        url: `https://rickandmortyapi.com/api/episode`,
        success: function(response){
            let episodes = response.results
            episodes.forEach(episode =>{
                $sidebar.append(`
                <a class="episode" id="${episode.id - 1}">Episode ${episode.id}</a>`)
            })
            let DOMEpisodes = document.querySelectorAll(".episode")
            DOMEpisodes.forEach(ep =>{
                ep.addEventListener('click', () =>{
                    renderEpisodeInfo(episodes[ep.id])
                })
            })
        }
    })
}

function renderEpisodeInfo(episode){
    let $main = $(".main--container")
    let $character = $(`<section class="character--container"></section>`)

    $main.html(`
    <section class="episode--container">
        <h3 class="episode-name">${episode.name}</h3>
        <section class="air-date">${episode.air_date}</section>
        <section class="episode-code">${episode.episode}</section>
    </section>`)

    $(".episode--container").after($character)
    episode.characters.forEach(character => {
        $.ajax({
            type: 'GET',
            url: character,
            success: function(res){
                let $char = $(`
                <section class="char--container" id="char${res.id}">
                    <section class="char-info">
                        <section class="char-name">${res.name}</section>
                        <section class="char-status">Status: ${res.status}</section>
                        <section class="char-specie">Species: ${res.species}</section>
                    </section>
                    <img class="char-image" src="${res.image}" alt="${res.url}">
                </section>
                `)
                $character.append($char)
                const button = document.querySelector(`#char${res.id}`)
                button.addEventListener('click', () => {
                    renderCharactersPage(res)
                })
            }
        })
    })
}