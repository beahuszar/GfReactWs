import tagReducer from './tagReducer';

let state;
beforeEach(() => {
  state = ['blue', 'bold', 'hipster'];
});

test('Should return default state if no action type received', () => {
  const defaultAction = tagReducer(state, { type: '' });
  expect(defaultAction).toEqual(['blue', 'bold', 'hipster']);
});

test('Should remove named tag if REMOVE_TAG is called', () => {
  const removeAction = tagReducer(state, { type: 'REMOVE_TAG', tag: 'blue' });
  expect(removeAction).toEqual(['bold', 'hipster']);
});

test('Should add named tag if ADD_TAG is called', () => {
  const removeAction = tagReducer(state, { type: 'ADD_TAG', tag: 'izeke' });
  expect(removeAction).toEqual(['blue', 'bold', 'hipster', 'izeke']);
});

test('Should remove all tags if REMOVE_ALL_TAGS is called', () => {
  const removeAction = tagReducer(state, { type: 'REMOVE_ALL_TAGS' });
  expect(removeAction).toEqual([]);
});
