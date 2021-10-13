// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, update) => {
  switch (update.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: update.text
      };
    case 'SORT_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: update.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: update.endDate
      }
    default:
      return state;
  }
};

export default filtersReducer;