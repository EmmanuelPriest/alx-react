import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('App component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call logOut function and display alert when Ctrl+h keys are pressed', () => {
    const logOutMock = jest.fn();
    render(<App isLoggedIn={true} logOut={logOutMock} />);
    fireEvent.keyDown(document, { key: 'h', code: 'KeyH', ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });

  it('should not call logOut function when Ctrl key is pressed', () => {
    const logOutMock = jest.fn();
    render(<App isLoggedIn={true} logOut={logOutMock} />);
    fireEvent.keyDown(document, { key: 'Control', code: 'ControlLeft' });
    expect(window.alert).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalled();
  });

  it('should not call logOut function when H key is pressed', () => {
    const logOutMock = jest.fn();
    render(<App isLoggedIn={true} logOut={logOutMock} />);
    fireEvent.keyDown(document, { key: 'h', code: 'KeyH' });
    expect(window.alert).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalled();
  });

  it('should not call logOut function when user is not logged in', () => {
    const logOutMock = jest.fn();
    render(<App isLoggedIn={false} logOut={logOutMock} />);
    fireEvent.keyDown(document, { key: 'h', code: 'KeyH', ctrlKey: true });
    expect(window.alert).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalled();
  });
});
