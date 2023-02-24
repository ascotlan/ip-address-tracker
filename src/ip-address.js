import getLocation from "./requests";
import { render } from "./views";

let data;

const coordinates = async (input = "", type = 0) => {
  data = await getLocation(input, type); //resolve promise
  render(); //render a new view
};

const getLatLong = () => data; //get cordinates data

if (!data) coordinates(); // if no cordinate data input pass no argument to trigger current location api call

export { coordinates, getLatLong };
