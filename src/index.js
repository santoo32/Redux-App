import { pipe } from "lodash/fp";
import store from "./store/store";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugUpdated,
  getUnresolvedBugs,
  getAssignedBugs,
  bugAssigned,
  loadBugs,
  saveBug,
  resolveBug,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import * as actions from "./store/apiActionCreators";

console.log("Hello World!");

const trim = (str) => str.trim();

const wrapInDiv = (type, str) => `<div>${str}</div>`;

const wrapIn = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapIn("span"));

//console.log(transform("    JAVASCRIPT    "));

store.subscribe(() => {
  console.log("Store changed", console.log(store.getState()));
});

//Project
// store.dispatch(projectAdded({ description: "Proyecto final" }));

//store.dispatch(bugAdded({ description: "Arreglar login" }));
// store.dispatch(bugAdded({ description: "Arreglar loginUN" }));
// store.dispatch(bugAdded({ description: "Arreglar login2UN" }));

// store.dispatch(bugResolved({ id: 1 }));

// //Action creators with redux-toolkit
// store.dispatch(bugUpdated({ id: 1, description: "Descrip upd" }));

// store.dispatch(bugRemoved({ id: 1 }));

// //Selectors
// console.log("Sin resolver", getUnresolvedBugs(store.getState()));

// store.dispatch(bugAssigned({ id: 2, member: "Santiago" }));

// console.log("Santiago", getAssignedBugs("Santiago")(store.getState()));

// store.dispatch({
//   type: "error",
//   payload: {
//     message: "Se rompio",
//   },
// });

// store.dispatch({
//   type: "errasdasdasdor",
//   payload: {
//     message: "Se rompio",
//   },
// });

//Action dispatch with action creators
// store.dispatch(
//   actions.apiCallBegan({
//     url: "bugs",
//     method: "get",
//     onSuccess: "bugs/bugsReceived",
//     onFaillure: actions.apiCallFailled.type,
//   })
// );

//You shouldnt have all that logic in the UI layer
// Use an action creator in the slice
store.dispatch(loadBugs());

store.dispatch(
  saveBug({
    description: "BUGBUGBUGBUG",
  })
);

store.dispatch(
  resolveBug({
    bugId: 2,
  })
);
