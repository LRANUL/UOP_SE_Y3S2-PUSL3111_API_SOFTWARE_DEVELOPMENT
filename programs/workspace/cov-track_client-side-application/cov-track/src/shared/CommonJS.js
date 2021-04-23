import axios from "axios";

export default axios.create({
    // Mobile app connection to NodeJS server, uses JSON for data interchange
  baseURL: "http://46.101.83.158:8081/",
  headers: {
    "Content-type": "application/json"
  }
});