import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PageContainer from "../../components/PageContainer";
import Transaction from "../../service/Transaction";

const HistoryOrder = () => {
  const transactionService = new Transaction();
  const user = useSelector((state) => state.user.value);

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    const resp = await transactionService.listOrder(user._id);
    setTransactions(resp);
  };
  return (
    <PageContainer>
      <TableContainer component={Paper} sx={{ my: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Game</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!transactions.length ? (
              <p style={{ textAlign: "center" }}>Empty Transaction</p>
            ) : (
              ""
            )}
            {transactions.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.game.name}
                </TableCell>
                <TableCell align="right">{row.product.amount}</TableCell>
                <TableCell align="right">{row.product.unit}</TableCell>
                <TableCell align="right">
                  Rp {row.price.toLocaleString("id")}
                </TableCell>
                <TableCell align="right">
                  <a
                    href={`https://app-sandbox.duitku.com/notification?reference=${row.duitku_response.reference}&responseCode=${row.duitku_response.statusCode}`}
                    target="_blank"
                  >
                    {row.status}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default HistoryOrder;
