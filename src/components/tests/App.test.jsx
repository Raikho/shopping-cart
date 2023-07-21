import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('something truthy and falsy', () => {
    it('shows true to be true', () => {
        expect(true).toBe(true);
    });
});

describe('App', () => {
    it('renders headline', () => {
        render(<App title='React' />);
        screen.debug();
    });
});