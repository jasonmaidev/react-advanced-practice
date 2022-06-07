//disabled date conditionals until moment js dependency fix

//Get Visible expenses
export default (expenses, { text, sortBy }) => {
  return expenses.filter((expense) => {
    // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // return startDateMatch && endDateMatch && textMatch;
    return textMatch;
  }).sort((a, b) => {
    // if (sortBy === 'date') {
    //   return a.createdAt < b.createdAt ? 1 : -1;
    // }
    // else if (sortBy === 'amount') {
    //   return a.amount < b.amount ? 1 : -1;
    // }
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
