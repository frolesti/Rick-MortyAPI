export function renderLocationPage(location_url){
    let $main = $(".main--container")
    $.ajax({
        type: 'GET',
        url: location_url,
        success: function(location){
            let $location = $(`
            <section class="location--container">
                <section class="location-info">
                    <h3 class="location-name">${location.name}</h3>
                    <section class="location-type">Type: ${location.type}</section>
                    <section class="location-dimension">Dimension: ${location.dimension}</section>
                </section>
            </section>`)
            let residents = location.residents
            residents.forEach(resident => {
                $.ajax({
                    type: 'GET',
                    url: resident,
                    success: function(res){
                        $location.append(`
                        <section class="resident-div">
                            <section id="resident-${res.id}">${res.name}</section>
                            <img class="${res.name}-img" src="${res.image}">
                        </section>`)
                    }
                })
            })
        $main.html($location)
        }
    })
    
    
}