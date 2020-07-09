import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

//remove expense test case
test('should setup removeExpense object', () => {
    const action = removeExpense({ id: '123abcd' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abcd'
    });
});

//edit expense test case
test('should setup editExpense object', () => {
    const action = editExpense('123xyz', { description: 'test description' });
    //assertion
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123xyz',
        updates: { description: 'test description' }
    });
});

//add expense test case when we pass parameters
test('setup add expense object when arguments are passed', () => {
    const expenseObj = {
        description: 'Rent',
        note: 'Last month rent',
        amount: 2000,
        createdAt: 1000
    };
    const action = addExpense(expenseObj);
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseObj,
                id: expect.any(String)
            }

        }
    );
});

//add expense with no arguments passed and use defaults
test('setup add expense object without arguments and use defaults', () => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                description: '',
                note: '',
                amount: 0,
                createdAt: 0,
                id: expect.any(String)
            }
        }
    );
})
