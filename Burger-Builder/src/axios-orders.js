import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burder-83522.firebaseio.com/",
});

export default instance;
