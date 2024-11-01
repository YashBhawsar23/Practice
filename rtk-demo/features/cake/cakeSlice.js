const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numerOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numerOfCakes--;
    },
    restocked: (state, action) => {
      state.numerOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
