import App from './App';
import { render, screen } from './test-utils';

describe('Renders main page correctly', () => {
  it("Should have 'App' text", () => {
    render(<App />);
    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
