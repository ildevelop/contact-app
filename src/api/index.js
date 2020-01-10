import axios from "axios";
const DEV =
  process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "/";

function getContacts() {
  return axios.post(DEV + "api/getContacts");
}
function updateContact(contact) {
  return axios.put(DEV + "api/updateContact", contact);
}

const Api = {
  getContacts,
  updateContact
};

export default Api;
