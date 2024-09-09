import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Prueba en MultipleCustomHooks', () => {
    test('debe de mostrar el componente por defecto', () => {
        
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Cargando'));
        expect(screen.getByText('Info de pokemones'));

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});

        //screen.debug();
    });

    
});