import axios from "axios";

export default class Game {
  getGames() {
    return axios
      .get(`${import.meta.env.VITE_PUBLIC_API_URL}/game/list`)
      .then((res) => res.data);
  }
}
