import React, { act, useReducer } from "react";

export default function UseReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function reducerForm(state, action) {
    return{
        ...state,
        [action.field]:action.value
    }
  }
//   action={
//       field: e.target.name,
//       value: e.target.value,
//     }
  const [state, dispatch] = useReducer(reducerForm, initialState);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>reducer form</h2>
      <input
        type="text"
        name="name"
        placeholder="enter a name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="enter a name"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a name"
        value={state.password}
        onChange={handleChange}
      />
    </div>
  );
}
