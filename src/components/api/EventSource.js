import axios from "axios";

export default axios.create({
  baseURL: "https://my-events-api-project.herokuapp.com/events",
});
