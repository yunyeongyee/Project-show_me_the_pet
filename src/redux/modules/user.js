const LOAD = 'user/LOAD';
const boardIdState = 0;
export const loadboardID = (id) => {
   return { type: LOAD, id };
};
export default function reducer(state = boardIdState, action = {}) {
   switch (action.type) {
      case 'user/LOAD': {
         return action.id;
      }
      default:
         return state;
   }
}
