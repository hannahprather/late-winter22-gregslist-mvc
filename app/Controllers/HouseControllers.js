import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForms.js";
import { houseService } from "../Services/HouseService.js";


function _draw() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}
export class HouseControler {
  constructor() {
    console.log('houses controler loaded',);
    ProxyState.on('houses', _draw)

  }


  viewHouse() {
    _draw()
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }

  createHouse(event) {
    event.preventDefault()
    let form = event.target
    console.log('yo dog this is house from the form', form);
    let newHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      size: form.size.value,
      price: form.price.value,
      color: form.color.value,
      imgUrl: form.imgUrl.value
    }

    houseService.createHouse(newHouse)
    let modal = document.getElementById('new-listing')
    form.reset()
    bootstrap.Modal.getOrCreateInstance(modal).hide()
  }


}


