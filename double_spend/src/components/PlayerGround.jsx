import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { sendMoneyToReceiver } from "../redux/slices/doubleSpendingSlice";
import { useState } from "react";

const PlayerGround = () => {
  const { userDetails } = useSelector((state) => state.DoubleSpendingReducer);
  const { userBalance, receiverName, amount } = userDetails;
  const [state, setState] = useState({
    receiver: "",
    amount: 0,
    isErr: false,
    isAmountErr: false,
  });
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  };
  const onHandleSend = () => {
    if (state.receiver !== "" && state.amount > 0) {
      const newReceiver = {
        userBalance: 1,
        receiverName: state.receiver,
        amount: state.amount,
      };
      setState((prev) => ({
        ...prev,
        isErr: false,
        isAmountErr: false,
      }));
      dispatch(sendMoneyToReceiver(newReceiver));
    }
    if (state.receiver === "") {
      setState((prev) => ({
        ...prev,
        isErr: true,
      }));
    }
    if (state.amount === 0) {
      setState((prev) => ({
        ...prev,
        isAmountErr: true,
      }));
    }
  };
  return (
    <div style={{ paddingBlock: 25, paddingInline: 10 }}>
      <Card
        style={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "white",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
              marginBlock: 50,
            }}
          >
            <div style={{ display: "flex" }}>
              <Typography sx={{ color: "white", fontSize: 15 }}>
                Balance :{" "}
              </Typography>
              <Typography sx={{ color: "white", fontSize: 15 }}>
                {" "}
                {userBalance}₹
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              name="receiver"
              value={state.receiver}
              style={{
                padding: 10,
                border: "none",
                outline: "none",
                marginBlock: 5,
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              placeholder="Receiver"
              onChange={onHandleChange}
            />
            {state.isErr && <span>hello</span>}
            <input
              name="amount"
              value={state.amount}
              type="number"
              style={{
                padding: 10,
                border: "none",
                outline: "none",
                marginBlock: 5,
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              placeholder="Amount"
              onChange={onHandleChange}
            />
            {state.isAmountErr && <span>hello</span>}
          </div>
        </CardContent>
        <CardActions>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              style={{
                backgroundColor: "#64aed0",
                border: "none",
                padding: 10,
                borderRadius: 20,
                width: "100px",
                color: "white",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onClick={onHandleSend}
            >
              Send
            </button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default PlayerGround;
