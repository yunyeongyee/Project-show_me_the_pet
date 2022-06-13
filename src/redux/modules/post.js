/*ACTIONS*/
const LOAD =   'post/LOAD';
const CREATE = 'post/CREATE';
const UPDATE = 'post/UPDATE';
const DELETE = 'post/DELETE';

/*INITIALSTATE*/
const initialState = {
   list: [
      {
         id: 1,
         title: '그레이하운드',
         content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
         id: 2,
         title: '데본렉스',
         content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
         title: 'test posting',
         content: 'test posting',
         id: 3,
      },
   ],
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
