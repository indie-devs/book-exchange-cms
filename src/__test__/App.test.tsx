import { render } from '@testing-library/react';
import App from '../App';

describe('Renders main page correctly', () => {
  it("Should have 'App' text", () => {
    const appBody = render(<App />);
    expect(appBody.getByText('App')).toBeInTheDocument();
  });
});
