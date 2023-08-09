import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  
  // Find the element with the text "learn react" and assign it to the linkElement variable
  const linkElement = screen.getByText(/learn react/i);
  
  // Assert that the linkElement is in the document
  expect(linkElement).toBeInTheDocument();
});
