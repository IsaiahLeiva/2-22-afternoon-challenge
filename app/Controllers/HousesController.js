import { ProxyState } from "../AppState"


function _drawHouse() {
    let template = ''
    ProxyState.houses.forEach(h => template += h.Template)
    document.getElementById('listings').innerHTML = template
}


export class HouseController {
    constructor() {
        ProxyState.on('houses', _drawHouse)
        console.log('HouseController loaded');
    }
}

//TODO: async viewHouses

//TODO: asynce handle submit

//TODO: delete house

//TODO: editHouse