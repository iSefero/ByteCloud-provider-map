// Redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  mapSize: {},
  usersValue: [],
  usersLoaded: false,
  showLatency: false,
  arrayServer: [],
  server: {},
  byteCloudServers: []
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMapSize(state, action) {
      state.mapSize = action.payload;
    },
    setUsersValue(state, action) {
      state.usersValue = [...state.usersValue, action.payload];
      state.usersLoaded = state.usersValue.length === 5;
    },
    setUserLoaded(state, action) {
      state.usersLoaded = action.payload;
    },
    setServer(state, action) {
      if (!state.server.name) {
        state.server = action.payload
      }
      state.byteCloudServers =  [...state.byteCloudServers, action.payload]
    },
    setShowLatency(state, action) {
      state.showLatency = action.payload
    }
  },
});

export const { setMapSize, setUsersValue, setServer, setShowLatency, setUserLoaded } = dataSlice.actions;

export default dataSlice.reducer;