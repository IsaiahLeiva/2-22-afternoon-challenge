import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"



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

    async viewHouses() {
        try {
            await housesService.getAllHouses()
            document.getElementById('modal-body-slot').innerHTML = getHouseForm()
            document.getElementById('create-button').classList.remove('visually-hidden')
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.error(error);
        }
    }

    async deleteHouse(houseId) {
        try {
            if (await Pop.confirm()) {
                await housesService.deleteHouse(houseId)
            }
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }


}


//TODO: asynce handle submit

//TODO: delete house

//TODO: editHouse