import axios from "axios";

export default class User {
  login(state) {
    return axios
      .post(`${import.meta.env.VITE_PUBLIC_API_URL}/auth/login`, {
        ...state,
      })
      .then((res) => res.data);
  }
}
