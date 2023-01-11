import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MobileLegend = ({ state, handleChangeChekout, gameId, voucher }) => {
  return (
    <>
      <Item>
        <Grid container spacing={2} textAlign="left" padding={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component={"h6"}>
              Masukkan User Id dan zone id
            </Typography>
            <TextField
              id="outlined-basic"
              label="User Id"
              variant="outlined"
              margin="normal"
              value={state.userId}
              onChange={(e) => handleChangeChekout("userId", e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" component="small" sx={{ mt: 1 }}>
              Untuk mengetahui User ID Anda, silakan klik menu profile dibagian
              kiri atas pada menu utama game. User ID akan terlihat dibagian
              bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda dan
              gabungkan dengan zone id untuk menyelesaikan transaksi. Contoh
              user id : 12345678 dan contoh zone id: 1234. Maka masukkan
              123456781234
            </Typography>
          </Grid>
        </Grid>
      </Item>
      <Item sx={{ mt: 3 }}>
        <Grid container spacing={2} textAlign="left" padding={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component={"h6"}>
              Pilih Nominal Topup Diamond
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} padding={2}>
              {voucher.length
                ? voucher.map((item) => (
                    <Grid item xs={3}>
                      <Button
                        variant={
                          state.product.amount === item.amount
                            ? "contained"
                            : "outlined"
                        }
                        fullWidth
                        onClick={() => {
                          handleChangeChekout("product", item);
                        }}
                      >
                        {item.amount} Diamond
                        <br />
                        Rp {item.price.toLocaleString("id-ID")}
                      </Button>
                    </Grid>
                  ))
                : ""}
            </Grid>
          </Grid>
        </Grid>
      </Item>
    </>
  );
};

export default MobileLegend;
