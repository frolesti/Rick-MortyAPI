import {renderLocationPage} from "./locations.js"
export function renderCharactersPage(character){
    let $characterSection = $(`
    <section class="character-section">
        <h3 class="character-name">${character.name}</h3>
        <section class="character-status">Status: ${character.status}</section>
        <section class="character-species">Species: ${character.species}</section>
        <section class="character-gender">Gender: ${character.gender}</section>
        <img src="${character.image}" alt="${character.name}" class="character image">
        <section class="character-origin">Origin location: ${character.origin.name}</section>
    </section>
    `)
    $('.main--container').html($characterSection)

    let location = document.querySelector(".character-origin")
    location.addEventListener('click', () => {
        renderLocationPage(character.origin.url)
    })
}