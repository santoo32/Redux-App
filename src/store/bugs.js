import { createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./apiActionCreators";
import * as apiActions from "./apiActionCreators";

let globalId = 0;

// Creates actions and reducers in one file
// No need for extra files
// No need for action types
// BEST OVERALL WAY

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
  },
  reducers: {
    bugAdded: (state, action) => {
      state.list.push(action.payload);
    },
    bugRemoved: (state, action) => {
      state.list.filter((bug) => bug.id !== action.payload.id);
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list[index].resolved = true;
    },
    bugUpdated: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list[index].description = action.payload.description;
    },
    bugAssigned: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list[index].member = action.payload.member;
    },
    bugsReceived: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default slice.reducer;
export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugUpdated,
  bugAssigned,
  bugsReceived,
} = slice.actions;

//Action creators

export const loadBugs = () =>
  apiCallBegan({
    url: "bugs",
    method: "get",
    onSuccess: bugsReceived.type,
    onFaillure: apiActions.apiCallFailled.type,
  });

export const saveBug = (bug) =>
  apiCallBegan({
    url: "bugs",
    method: "post",
    onSuccess: bugAdded.type,
    onFaillure: apiActions.apiCallFailled.type,
    data: bug,
  });

export const resolveBug = ({ bugId }) =>
  apiCallBegan({
    url: "bugs/" + bugId,
    method: "patch",
    onSuccess: bugResolved.type,
    onFaillure: apiActions.apiCallFailled.type,
    data: { resolved: true },
  });

//Selectors
//Not chached
// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.filter((bug) => !bug.resolved);

//Cached
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

// cached with parameter
export const getAssignedBugs = (user) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.member === user)
  );
