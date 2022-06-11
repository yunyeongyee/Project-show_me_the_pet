const LOAD = 'user/LOAD';

const initialState = {
  list: [],
};




export default function reducer(state=initialState, action={}) {
  switch (action.type) {
    case "user/LOAD": {
      return {list: action.post_collection};

    }
    
    default:
      return state;
  }
}