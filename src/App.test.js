import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Folder from './Components/BackButton';

test('backbutton goes back', () => {

	const setPath = jest.fn()


	const state = {path: "/home/Firebase Stuff", setPath:setPath}
	const { getByTestId } = render(<BackButton state={state} />);

	fireEvent.click(getByTestId('clickBack'))

	expect(getByTestId('pathTestID').textContent).toBe('/home')
});
