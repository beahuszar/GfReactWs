export default (state = ['blue', 'bold', 'hipster'], action) => {
  switch (action.type) {
    case 'ADD_TAG':
      return !state.includes(action.tag) ? [...state, action.tag] : state;
    case 'REMOVE_TAG':
      return state.filter(elem => elem !== action.tag);
    case 'REMOVE_ALL_TAGS':
      return [];
    default:
      return state;
  }
};
