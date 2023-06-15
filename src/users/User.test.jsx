import Users from "./Users";
import {render, screen, fireEvent} from "@testing-library/react";
import axios from "axios";

jest.mock('axios')

describe('user', () => {
    let res;

    beforeEach(() => {
        res = {
            data: [
                {"id": 1, "name": "Leanne Graham",},
                {"id": 2, "name": "Ervin Howell",},
            ]
        }
    })

    test('test id', async () => {
        axios.get.mockReturnValue(res)
        render(<Users/>)
        const users = await screen.findAllByTestId("user-item")
        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    })
})
