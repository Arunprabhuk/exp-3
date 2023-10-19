import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  radioClicked: "conventional",
  userDetails: {
    userBalance: 1,
    receiverName: "",
    amount: 0,
  },
  sendAnmiation: false,
};

const DoubleSpendingReducer = createSlice({
  name: "BlockChainDetails",
  initialState,
  reducers: {
    updateRadionChange: (state, action) => {
      state.radioClicked = action.payload;
    },
    sendMoneyToReceiver: (state, action) => {
      state.userDetails = action.payload;
      state.sendAnmiation = true;
    },
  },
});

export const { updateRadionChange, sendMoneyToReceiver } =
  DoubleSpendingReducer.actions;

export default DoubleSpendingReducer.reducer;
