import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('something truthy and falsy', () => {
    it('shows true to be true', () => {
        expect(true).toBe(true);
    });
});

describe.skip('testing App component', () => {
    it('renders', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });
    it('renders correct heading', () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent)
            .toMatch(/test heading/i);
    });
    it('changes heading upon click', async() => {
        const user = userEvent.setup();

        render(<App />);
        const button = screen.getByRole("button", { name: "Click Me" });
        await user.click(button);
        expect(screen.getByRole("heading").textContent)
            .toMatch(/radical rhinos/i);
    });
});