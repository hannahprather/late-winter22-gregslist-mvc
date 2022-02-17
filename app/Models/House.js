import { generateId } from "../Utils/generateId.js";

export class House {

  constructor({ bedrooms, bathrooms, year, size, price, color, imgUrl }) {
    this.id = generateId(),
      this.bedrooms = bedrooms,
      this.bathrooms = bathrooms,
      this.year = year,
      this.size = size,
      this.price = price,
      this.color = color,
      this.imgUrl = imgUrl
  }


  get Template() {
    return `
    <div class="col-md-4">
      <div class="bg-white rounded shadow">
        <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="house image">
        <div class="p-3">
          <p>${this.bedrooms}</p>
          <p>${this.bathrooms}</p>
          <p>${this.year}</p>
          <p>${this.size}</p>
          <p>$${this.price}</p>
          <p>Color: ${this.color}</p>
        </div>
        <button class="btn btn-outline-danger" onclick="app.carsController.deleteCar('${this.id}')"> delete </button>
      </div>
    </div>
  `
  }
}