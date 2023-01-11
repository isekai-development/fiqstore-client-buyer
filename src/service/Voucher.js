import axios from "axios";

export default class Voucher {
  getVoucher(id) {
    return axios
      .get(`${import.meta.env.VITE_PUBLIC_API_URL}/voucher/list?gameId=${id}`)
      .then((res) => res.data);
  }
}
