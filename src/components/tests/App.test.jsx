import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';

// vi.mock('../Header.jsx', () => ({default: vi.fn()}))
// vi.mock('../ItemList.jsx', () => ({
//     default: ({ items, onChangeAmount }) => 
//     <>
//         <button onClick={() => onChangeAmount(items[0].id, 1)}>add</button>
//         <button onClick={() => onChangeAmount(items[0].id, -1)}>subtract</button>
//     </>
// }));

describe.skip('App component', () => {
    it.skip('renders', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });
});