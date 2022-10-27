import { Name, WeatherLocation } from "./modules/NameAndWeather";

let name = new Name("Anam", "Dhaka");
let loc = new WeatherLocation("raining", "Dhaka");

console.log(name.nameMessage);
console.log(loc.weatherMessage);