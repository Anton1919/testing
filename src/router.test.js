import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "./App";
import {MemoryRouter} from "react-router-dom";

describe('routes', () => {
    test('route test', () => {
        render(<MemoryRouter><App/></MemoryRouter>)
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-link')).toBeInTheDocument()
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-link')).toBeInTheDocument()
    })

    test('route test', () => {
        render(
            <MemoryRouter initialEntries={['/aglhlr']}>
                <App/>
            </MemoryRouter>
        )
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
})
