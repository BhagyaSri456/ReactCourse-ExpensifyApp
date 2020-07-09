import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('should set filter with sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set filter with sort by date', () => {
    const currentState = {
        test: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = filterReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(action.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test text' });
    expect(action.text).toBe('test text');
})

test('should set startdate filter', () => {
    const action = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });
    expect(action.startDate).toEqual(moment(0));
})
test('should set end date filter', () => {
    const endDate = moment(0);
    const action = { type: 'SET_END_DATE', endDate }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
})