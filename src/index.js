import getLocation from "./requests";

const coordinates = async (ip = "") => {
  const data = await getLocation(ip);
  console.log(data);
};

const ipText = document.querySelector("#ip-search");
ipText.addEventListener("input", (e) => {
  // use regex to validate the ip address then call coordinates(ip)
  coordinates(e.target.value);
});

coordinates(" ");
