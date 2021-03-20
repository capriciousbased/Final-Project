import axios from "axios";

export default axios.create({
  baseURL: "https://motivity-event-api.herokuapp.com/events",
});
