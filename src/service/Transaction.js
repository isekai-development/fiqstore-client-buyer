import axios from "axios";

export default class Transaction {
  makeOrder(state) {
    return axios
      .post(`${import.meta.env.VITE_PUBLIC_API_URL}/transaction/makeOrder`, {
        ...state,
      })
      .then((res) => res.data);
  }
  listOrder(userId) {
    console.log({ test: userId });
    return axios
      .get(
        `${
          import.meta.env.VITE_PUBLIC_API_URL
        }/transaction/list?userId=${userId}`
      )
      .then((res) => res.data);
  }
}
