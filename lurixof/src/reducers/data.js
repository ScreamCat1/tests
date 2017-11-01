const data = (state=[], action) => {
  const { type, payload } = action;
  if(type === 'load') {
    return payload
  } return state;
};

export default data;
