import isEqual from '../utils/isEqual';


const currentItem = (state = {}, action) => {
  const {type, payload } = action;
  if(type === 'set_item') {
    const { data, id } = payload;
    return data.find(isEqual(id));
  }
  return state;
};

export  default currentItem;