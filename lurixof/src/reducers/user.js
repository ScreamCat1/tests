const defaultUser = {
  name: 'Adam'
};

const user = (state = defaultUser, action)=> {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state
  }
};

export default user;