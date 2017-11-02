const data = (state=[], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'load':
      return payload;
    case 'update_item':
      const { item, item: { id }, data } = payload;
      data.splice(id, 1, item);
      return data;
    default:
      return state;
  }
};

export default data;
