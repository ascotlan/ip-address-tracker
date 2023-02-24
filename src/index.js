import { coordinates } from "./ip-address";

const ipText = document.querySelector("#form");
ipText.addEventListener("submit", (e) => {
  const text = new FormData(ipText);
  // loop through the key value pairs of input element name and value
  for (const input of text.entries()) {
    // use regex to validate the ip address then call coordinates(ip)
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        `${input[1]}`
      )
    ) {
      coordinates(`${input[1]}`, 0);
    }

    //use regex to validate a FQDN then call coordinates(domain)
    if (
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(
        `${input[1]}`
      )
    ) {
      coordinates(`${input[1]}`, 1);
    }
  }
  e.preventDefault();
});
