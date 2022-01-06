import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 
  // 'http://localhost:5001/clone-b8e22/us-central1/api',
  "https://us-central1-clone-b8e22.cloudfunctions.net/api",
});

export default instance;
