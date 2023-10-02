
import { BaseActions } from '../actions/todo-actions';
import { ToDo } from '../models/Todo';
import { TouchActionType } from '../shared/touch-action-type';

const initialState: ToDo[] = [
    new ToDo(1, 'title - 1'),
    new ToDo(2, 'title - 2'),
    new ToDo(3, 'title - 3'),
    new ToDo(4, 'title - 4'),
    new ToDo(5, 'title - 5'),
    new ToDo(6, 'title - 6'),
];

export function TodoReducer(state = initialState, action: BaseActions) {
    let data = JSON.parse(JSON.stringify(state));
    let inx = -1;
    switch (action.type) {
        case TouchActionType.Add:
            return [...state, action.payload];
        case TouchActionType.Completed:
            data = JSON.parse(JSON.stringify(state));
            inx = data.findIndex((d: any) => d.id === Number(action.payload));
            data[inx]!.completed = true;
            return [...data];
        case TouchActionType.Delete:
            data = JSON.parse(JSON.stringify(state));
            inx = data.findIndex((d: any) => d.id === Number(action.payload));
            [...data.splice(inx, 1)]
            return [...data];
        default:
            break;
    }
    // if(action) {
    //     return [...state, action.prototype];
    // }

    return state;
}