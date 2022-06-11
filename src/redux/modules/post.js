/*ACTIONS*/
const LOAD =   'post/LOAD';
const CREATE = 'post/CREATE';
const UPDATE = 'post/UPDATE';
const DELETE = 'post/DELETE';

/*INITIALSTATE*/
const initialState = {
   list: [],
};

/*ACTION CREATORS*/


/*MIDDLEWARES*/


/*REDUCER*/
export default function reducers(state = [], action) {
   switch (action.type) {
      case 'post/LOAD':
         return console.log(1)
      default:
         return state;
   }
}
