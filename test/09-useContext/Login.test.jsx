import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "../../src/09-useContext/Login";
import { userContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en el componente Login', () => {
    test('debe de mostrar el componente sin el user', () => {
        render(
            <userContext.Provider value={{ user: null }}>
                <Login />
            </userContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });

    test('debe de llamar el setuser cuando se hacer click en el boton', () => {
        const setUserMock = jest.fn();

        render(
            <userContext.Provider value={{ user: null, setUser: setUserMock }}>
                <Login />
            </userContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"})
    });
});