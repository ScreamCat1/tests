export const loadData = data => ({
  type: 'load',
  payload: data
});

export const setItem = (data, id) => ({
  type: 'set_item',
  payload: {
    data : data,
    id: id
  }
});