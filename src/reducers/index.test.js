import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

describe('root reducer', () => {
  it('returns the initial state', () => {
    expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: []});
  });

  it('sets the main stack', () => {
    expect(rootReducer({}, { type: actions.SET_STACK, stack })).toEqual({ stack, stacks: []});
  });

  it('loads stacks', () => {
    expect(rootReducer({}, {type: actions.LOAD_STACK, stacks})).toEqual({stack: {}, stacks});
  });

  it('add a stack', () => {
    const testStack = { title: 'test stack test', cards: []};
    expect(rootReducer({}, {type: actions.ADD_STACK, stack: testStack})).toEqual({stack: {}, stacks: [{...testStack, id: 0}]});
  })
})