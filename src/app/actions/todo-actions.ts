import { Action } from "@ngrx/store";
import { TouchActionType } from "../shared/touch-action-type";

export class BaseActions implements Action {
    type: any;
    payload: any;
}

export class AddActions implements BaseActions {
    type = TouchActionType.Add;
    constructor(public payload: any) {}
}


export class DeleteActions implements BaseActions {
    type = TouchActionType.Delete;
    constructor(public payload: any) {}
}

export class CompletedActions implements BaseActions {
    type = TouchActionType.Completed;
    constructor(public payload: any) {}
}