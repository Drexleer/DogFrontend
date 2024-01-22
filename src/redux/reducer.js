/* eslint-disable no-fallthrough */
import { GET_ALL_DOGS, 
    GET_TEMPERAMENTS, 
    SEARCH_BY_NAME, 
    SEARCH_DOG_BY_ID, 
    ORDER_BY_NAME, 
    ORDER_BY_WEIGHT, 
    ORDER_BY_ORIGIN, 
    ORDER_BY_TEMPERAMENT,
    POST_DOG, } from './actions-types';

const initialState = {
    breeds: [],
    temperaments: [],
    breedsFiltered: [],
    breedDetail: {},
};

function dogReducer ( state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS: 
            return {
                ...state,
                breeds: action.payload,
                breedsFiltered: action.payload
            }
        case GET_TEMPERAMENTS: 
            return {
                ...state,
                temperaments: action.payload
            }
        case ORDER_BY_NAME:
            // Usamos la metodología del sort de comparación.
            // info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            // Clonamos el array de razas para no mutar el estado original.
            const sortedBreeds = [...state.breedsFiltered].sort((a, b) => {
                if (action.payload === 'upward') {
                // Si la acción es 'upward', ordenamos de A-Z utilizando .localeCompare().
                  return a.name.localeCompare(b.name);
                } else if (action.payload === 'falling') {
                // Si la acción es 'falling', ordenamos de Z-A utilizando .localeCompare().
                  return b.name.localeCompare(a.name);
                } else {
                // Si la acción no es ni 'upward' ni 'falling', no cambiamos el orden.
                  return 0;
                }
              });
            return {
                ...state,
                breedsFiltered: sortedBreeds,
            }
        
        case ORDER_BY_TEMPERAMENT:
            const orderByTemperament = [...state.breedsFiltered].filter(e => {
                // Verificamos si e.temperaments es un array y contiene action.payload
                return Array.isArray(e.temperaments) && e.temperaments.includes(action.payload);
            });
            return {
                ...state,
                breedsFiltered: orderByTemperament,
            };
        case ORDER_BY_ORIGIN: 
            let breedsFromApiOrDbOrAll = [];
            // Si la acción es 'all', selecciona todas las razas
            if (action.payload === 'all') {
            breedsFromApiOrDbOrAll = state.breeds;
            // Si la acción es 'db', selecciona solo las razas con ID de tipo 'string'
            } else if (action.payload === 'db') {
            breedsFromApiOrDbOrAll = state.breeds.filter(
                (e) => typeof e.id === 'string'
            );
            // Si la acción es 'api', selecciona solo las razas con ID de tipo 'number'
            } else if (action.payload === 'api') {
            breedsFromApiOrDbOrAll = state.breeds.filter(
                (e) => typeof e.id === 'number'
            );
        }
        return {
            ...state,
            breedsFiltered: breedsFromApiOrDbOrAll,
        }
        case ORDER_BY_WEIGHT:
            const breedsByWeight = [...state.breedsFiltered].sort((a, b) => {
            // Calcular la suma de los promedios de los pesos
            const sumA = (a.weight[0] + a.weight[1]) / 2;
            const sumB = (b.weight[0] + b.weight[1]) / 2;

            if (action.payload === 'major') {
            // Si la acción es 'major', ordena de mayor a menor suma de promedios.
                return sumB - sumA;
            } else if (action.payload === 'minor') {
             // Si la acción es 'minor', ordena de menor a mayor suma de promedios.
                return sumA - sumB;
        } else {
            // Si la acción no es ni 'major' ni 'minor', no cambies el orden.
            return 0;
        }
  }); 
  return {
    ...state,
    breedsFiltered: breedsByWeight,
  };
        case SEARCH_BY_NAME:
            return {
                ...state,
                breedsFiltered: action.payload
            }
        case SEARCH_DOG_BY_ID:
            return {
                ...state,
                breedDetail: action.payload
            }
        case POST_DOG:
            return {
                ...state,
            }
        default: return state;
    }
};

export default dogReducer;

