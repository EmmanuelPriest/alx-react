import rootReducer from './rootReducer';

describe('Test rootReducer', () => {
  it('verifies the initial state of the root reducer', () => {
    const initialState = {
      courses: new Map(),
      notifications: new Map(),
      ui: new Map(),
    };

    const state = rootReducer(undefined, {});

    expect(state).toEqual(initialState);
  });
});
