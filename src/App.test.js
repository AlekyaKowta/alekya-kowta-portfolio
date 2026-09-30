import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name and project GitHub links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /alekya kowta/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /debatrium/i })).toHaveAttribute(
    'href',
    'https://github.com/AlekyaKowta/multi-agent-debate-model'
  );
});
