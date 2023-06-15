import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

describe('tests', () => {
    test('renders learn react link', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Hello world/i);
        const btn = screen.getByRole('button')
        const input = screen.getByPlaceholderText(/input value/i)
        expect(linkElement).toBeInTheDocument();
        expect(btn).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    });

    test('to be null', () => {
        render(<App/>);
        const helloWorldElem = screen.queryByText(/hello2/i)
        expect(helloWorldElem).toBeNull()
    });

    test('is data', async () => {
        render(<App/>);
        screen.debug()
        const helloWorldElem = await screen.findByText(/data/i)
        expect(helloWorldElem).toBeInTheDocument()
        screen.debug()
    });

    test('click event', () => {
        render(<App/>)
        const btn = screen.getByTestId('toggle-btn')
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
    })

    test('input', () => {
        render(<App/>)
        const input = screen.getByPlaceholderText(/input value/i)
        expect(screen.queryByTestId('value-elem')).toContainHTML('')
        fireEvent.input(input, {
            target: {value: '123'}
        })
        expect(screen.queryByTestId('value-elem')).toContainHTML('123')
    })
})

