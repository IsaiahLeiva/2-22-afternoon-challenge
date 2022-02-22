

export class House {
    constructor({ id, bedrooms, bathrooms, levels, year, price, imgUrl, description }) {
        this.id = id || ''
        this.bedrooms = bedrooms || ''
        this.bathrooms = bathrooms || ''
        this.levels = levels || ''
        this.year = year || ''
        this.price = price || ''
        this.imgUrl = imgUrl || ''
    }

    get Template() {
        return `
        //TODO: create this template
        `

    }
}