import axios from "axios";

export default axios.create({
    // Mobile app connection to NodeJS server, uses JSON for data interchange
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});