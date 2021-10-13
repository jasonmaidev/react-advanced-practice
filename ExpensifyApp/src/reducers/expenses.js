const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, update) => {
  switch (update.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        update.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== update.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === update.id) {
          return {
            ...expense,
            ...update.updates
          }
        }
        else {
          return expense;
        }
      })
    default:
      return state;
  }
};

export default expensesReducer;