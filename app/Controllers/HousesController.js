import { ProxyState } from "../AppState"


function _draw() {
    let template = ''
    ProxyState.houses.forEach(h => template += h.Template)
    document.getElementById('listings').innerHTML = template
}

//TODO: export housecontroller

//TODO: async viewHouses

//TODO: asynce handle submit

//TODO: delete house

//TODO: editHouse