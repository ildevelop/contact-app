import axios from "axios";
const DEV =
  process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "/";

function getContacts() {
  return axios.post(DEV + "api/getContacts");
}

const Api = {
  getContacts
};

export default Api;
