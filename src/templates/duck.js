import createReducer from './createReducer';

export default function createItemsLogic(name) {
  // add, remove, edit에 관한 types
  const ADD = `${name}/ADD`;
  const REMOVE = `${name}/REMOVE`;
  const EDIT = `${name}/EDIT`;
  
  // add, remove, edit에 관한 action-creater
  const add = (item) => ({ type: ADD, item });
  const remove = (item) => ({ type: REMOVE, item });
  const edit = (item) => ({ type: EDIT, item });

  // add, remove, edit에 관한 reducer
  const reducer = createReducer(
    {
      [name]: [], // state초기값
    },
    { // handelr
      [ADD]: (state, action) => state[name].push(action.item),
      [REMOVE]: (state, action) => {
        const index = state[name].findIndex(
          (item) => item.id === action.item.id
        );
        state[name].splice(index, 1);
      },
      [EDIT]: (state, action) => {
        const index = state[name].findIndex(
          (item) => item.id === action.item.id
        );
        if (index >= 0) state[name][index] = action.item;
      },
    }
  );
  return { add, remove, edit, reducer }; // 반환
}