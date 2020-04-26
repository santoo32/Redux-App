import * as actions from "./actionTypes";
import { createReducer, createSlice } from "@reduxjs/toolkit";

let globalId = 0;

//states default value is its initialization

//This is the old way of doing redux, actually you should use Immer or immutable.js

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case actions.BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++globalId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case actions.BUG_RESOLVED:
//       return state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//       );
//     case actions.BUG_REMOVED:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case actions.BUG_UPDATED:
//       return state.map((bug) =>
//         bug.id === action.payload.id
//           ? { ...bug, description: action.payload.description }
//           : bug
//       );
//     default:
//       return state;
//   }
// }

//New way of defining reducers

// export default createReducer([], {
//   [actions.BUG_ADDED]: (state, action) => {
//     state.push({
//       id: ++globalId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [actions.BUG_RESOLVED]: (state, action) => {
//     const index = state.findIndex((bug) => bug.id === action.payload.id);
//     state[index].resolved = true;
//   },
//   [actions.BUG_REMOVED]: (state, action) => {
//     state.filter((bug) => bug.id !== action.payload.id);
//   },
//   [actions.BUG_UPDATED]: (state, action) => {
//     const index = state.findIndex((bug) => bug.id === action.payload.id);
//     state[index].description = action.payload.description;
//   },
//   [actions.BUG_REMOVED]: (state, action) => {
//     // const index = state.findIndex((bug) => bug.id === action.payload.id);
//     // state[index].description = action.payload.description;
//   },
// });
