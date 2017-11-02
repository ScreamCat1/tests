export const loadData = data => ({
  type: 'load',
  payload: data
});

export const setItem = (data, id) => ({
  type: 'set_item',
  payload: {
    data,
    id
  }
});

export const updateItem = (data, item) => ({
  type: 'update_item',
  payload: {
    data, item
  }
})
