import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Modal,
  Box,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import { styled } from "@mui/material/styles";
import MobileLegend from "../../components/Chekout/MobileLegend";
import { useState } from "react";
import Voucher from "../../service/Voucher";
import Transaction from "../../service/Transaction";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const Checkout = (props) => {
  const voucherService = new Voucher();
  const navigate = useNavigate();
  const transactionService = new Transaction();
  const location = useLocation();
  const { game } = location.state;
  const [order, setOrder] = useState({ product: "", userId: "" });
  const [voucher, setVoucher] = useState([]);
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    fetchVoucher();
  }, []);

  const fetchVoucher = async () => {
    await voucherService.getVoucher(game._id).then((res) => {
      setVoucher(res);
    });
  };

  const handleChangeOrder = (key, value) => {
    setOrder((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    setOpen(false);
    const payload = {
      productId: order.product._id,
      destination: order.userId,
      userId: user._id ? user._id : "",
    };

    const orderResponse = await transactionService.makeOrder(payload);
    navigate("/history-order");
    window.open(orderResponse.transaction.duitku_response.paymentUrl);
  };

  const CheckoutComponent = () => {
    if (game.code === "mobilelegend")
      return (
        <MobileLegend
          handleChangeChekout={handleChangeOrder}
          state={order}
          gameId={game._id}
          voucher={voucher}
        />
      );
  };

  return (
    <PageContainer>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmation
          </Typography>
          <Typography id="modal-modal-title" variant="body1" component="p">
            Apakah anda yakin lanjut ke pembayaran?
          </Typography>
          <Grid container spacing={2} margin={1}>
            <Grid item xs={4}>
              <Button variant="outlined" onClick={() => setOpen(false)}>
                Tidak
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" onClick={handleOk}>
                Ya
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Grid container spacing={2} margin={1}>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src={game.logo} alt={game.name} style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ color: "white" }}>{game.name}</h2>
            </Grid>
            <Grid item xs={12} style={{ color: "white" }}>
              <Typography variant="body1" component="p">
                Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi
                menggunakan Telkomsel akan dikenakan biaya tambahan pajak
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color={"#ECA869"}
                sx={{ mt: 1 }}
              >
                PERINGATAN: Metode pembayaran ShopeePay hanya tersedia untuk
                Pengguna Seluler (Mobile). Harap pastikan bahwa aplikasi Shopee
                Anda telah diperbarui dan memiliki saldo ShopeePay yang
                mencukupi sebelum melakukan top up.
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 1 }}>
                Bayarlah menggunakan GoPay, ShopeePay, Dana, OVO, LinkAja,
                Telkomsel, Indosat, Tri, XL, Bank Transfer, QRIS, Indomaret,
                Alfamart, Kredivo, Kartu Kredit, dan Doku Wallet. Tanpa perlu
                registrasi ataupun log-in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CheckoutComponent />
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Grid container spacing={2} alignItems="center" padding={2}>
                  <Grid item xs={8} textAlign="left">
                    Total: Rp{" "}
                    {(order &&
                      order.product &&
                      order.product.price.toLocaleString("id")) ||
                      0}
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      style={{ float: "right" }}
                      onClick={handleSubmit}
                    >
                      Buy Now
                    </Button>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Checkout;
