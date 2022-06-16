/*ACTIONS*/
const LOAD =   'post/LOAD';
const CREATE = 'post/CREATE';


/*INITIALSTATE*/
const initialState = {
   list: [
   ]
};

/*ACTION CREATORS*/
export function loadPost(post_list) {
   return {type: LOAD, post_list}
}

/*MIDDLEWARES*/


/*REDUCER*/
export default function reducers(state = [], action) {
   switch (action.type) {
      case 'post/LOAD':
      return { list: action.post_list}
      default:
         return state;
   }
}
