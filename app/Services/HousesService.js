import { House } from "../Models/House.js";
import { api } from "./AxiosService.js";



class HousesService {
    async editHouse(updatedHouse, id) {
        const res = await api.put('houses/' + id, updatedHouse)
        console.log('[HousesService]: editHouse', res.data);
    }

    async getAllHouses() {
        const res = await api.get('houses')
        console.log('[HousesService]: getAllHouses', res.data)
        ProxyState.houses = res.data.map(rd => new House(rd))
    }


    async createHouse(newHouse) {
        const res = await api.post('houses', newHouse)
        console.log('[HousesService]: createHouse', res.data)
        let realHouse = new House(res.data)
        ProxyState.houses = [realHouse, ...ProxyState.houses]
    }

    async deleteHouse(houseId) {
        console.log('service deleting house', houseId)
        const res = await api.delete(`house/${houseId}`)
        console.log('[HousesService]: deleteHouse', res.data)

        ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
    }

}