import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense id id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '153'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
test('should add an expense', () => {
    const expense = {
        note: '',
        description: 'test desc',
        id: '123',
        amount: 1200,
        createdAt: moment(0).add(2, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const id = expenses[0].id;
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates: { description: 'edited' }
    };
    const state = expenseReducer(expenses, action);
    expect(state[0].description).toBe('edited');
});

test('should not edit an expense if id not found', () => {
    const amount = 1200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { amount }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});