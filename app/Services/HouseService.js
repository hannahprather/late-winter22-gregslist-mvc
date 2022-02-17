import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HouseService {

  createHouse(newHouse) {
    let realHouse = new House(newHouse)
    ProxyState.houses = [realHouse, ...ProxyState.houses]
  }

}
export const houseService = new HouseService()