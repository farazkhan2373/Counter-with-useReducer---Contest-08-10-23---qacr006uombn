const counterReducer = (state,action) =>{
switch (action.type) {
    case "incrementing":
      return { count: state.count + 1 };
    case "decrementing":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export {counterReducer}
