import '@testing-library/jest-dom';

// Migrated code from JS to TS
// Replaced vars with let and const as appropriate

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// Replaced var with const
const element: HTMLElement = document.createElement('div');

// Replaced var with let
let textContent: string | null = element.textContent;

// Replaced var with const
const regex: RegExp = /react/i;

// Replaced var with const
const hasTextContent: boolean = regex.test(textContent);

// Replaced var with const
const expectResult: jest.Matchers<void> = expect(element).toHaveTextContent(regex);

// Replaced var with const
const learnMoreLink: string = 'https://github.com/testing-library/jest-dom';