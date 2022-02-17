import { CarsController } from "./Controllers/CarsController.js";
import { HouseControler } from "./Controllers/HouseControllers.js";

class App {
  houseController = new HouseControler()
  carsController = new CarsController()
}

window["app"] = new App();
