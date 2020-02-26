import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import { increase, decrease, set, reset } from '../actions/amountActions';
import { addTag, removeTag, removeAllTags } from '../actions/tagActions';

const store = createStore(reducers);

store.dispatch(set(6));
console.log(store.getState());

store.dispatch(increase());
console.log(store.getState());

store.dispatch(increase(2));
console.log(store.getState());

store.dispatch(reset());
console.log(store.getState());
store.dispatch(increase());
console.log(store.getState());
store.dispatch(decrease(4));
console.log(store.getState());

store.dispatch(addTag('blue'));
console.log(store.getState());
store.dispatch(addTag('bold'));
console.log(store.getState());
store.dispatch(addTag('hipster'));
console.log(store.getState());
store.dispatch(removeTag('blue'));
console.log(store.getState());
store.dispatch(addTag('bold'));
console.log(store.getState());
store.dispatch(removeAllTags('bold'));
console.log(store.getState());
