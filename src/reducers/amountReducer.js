export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + action.amount;
    case 'DECREASE':
      return state - action.amount;
    case 'SET':
      return action.amount;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};
