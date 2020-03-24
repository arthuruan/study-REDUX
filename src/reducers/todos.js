export default function todos (state = [], action) {
    //action => { type: 'ADD_TODO', text: 'Fazer café' }

    switch (action.type) {
        case 'ADD_TODO':
            return [ ...state, {
                id: Math.random(),
                text: action.text,
            }];
        default:
            return state;
    }

}

// o nome do reducer é o nome da variável que vai ficar guardada no estado