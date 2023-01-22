import axios from "axios";

export default axios.create({
  baseURL: "https://4e67-105-112-146-83.eu.ngrok.io",
  headers: { "ngrok-skip-browser-warning": "true" },
});
