export class RickAndMortyAPI {
    constructor(){
        this.url = "https://rickandmortyapi.com/api";
        this.paramList = ["character", "location", "episode"]
    }
    
    getData(param){
        
        if(this.paramList.includes(param)){
            $.ajax({
                type: 'GET',
                url: `${this.url}/${param}`,
                success: function(data){
                    console.log(data.results)
                }
            })
        }
        else {
            console.log("Error 404: Parameter not found")
        }
        
    }
    getPagination(param){
        if(this.paramList.includes(param)){
            $.ajax({
                type: 'GET',
                url: `${this.url}/${param}`,
                success: function(data){
                    console.log(data.info)
                }
            })
        }
        else {
            console.log("Error 404: Parameter not found")
        }
    }
    getCharacterById(id){
        $.ajax({
            type: 'GET',
            url: `${this.url}/character/${id}`,
            success: function(character){
                console.log(character)
            }
        })
    }
    getLocationById(id){
        $.ajax({
            type: 'GET',
            url: `${this.url}/location/${id}`,
            success: function(location){
                console.log(location)
            }
        })
    }
    getEpisodeById(id){
        $.ajax({
            type: 'GET',
            url: `${this.url}/episode/${id}`,
            success: function(episode){
                console.log(episode)
            }
        })
    }
}
