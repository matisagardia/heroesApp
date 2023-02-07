import { authReducer } from "../src/auth/context/authReducer";
import { types } from "../src/auth/types/types";

describe('Pruebas en authReducer', () => { 

    test('Debe retornar el estado por defecto', () => { 

        const state = authReducer({logged: false}, {});

        expect(state).toEqual( {logged: false} );

     });

     test('El login debe autenticar y establecer usuario', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'Juan'
            }
        };

        const state = authReducer( {logged:false, action} );

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

     });

     test('el logout debe borrar usuario y dejar logged en false', () => { 



     });

})