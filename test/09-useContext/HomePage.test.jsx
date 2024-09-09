import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext";
import { userContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en HomePage', () =>{

    const user = {
        id: 1,
        name: 'ceci',
    }

    test('debe de mostrar el componente sin el usuario', () =>{
        render(
            <userContext.Provider value={{user: null}}>
                <HomePage/>
            </userContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null')

        //screen.debug();
    });

    test('debe de mostrar el componente con el usuario', () =>{
        render(
            <userContext.Provider value={{user: user}}>
                <HomePage/>
            </userContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        //console.log(preTag.innerHTML);
        expect( preTag.innerHTML ).toContain('ceci');
        expect( preTag.innerHTML ).toContain(user.name);
        expect( preTag.innerHTML ).toContain(`${user.id}`);


        //screen.debug();
    });
});