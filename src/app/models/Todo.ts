export class ToDo {
    id: number = 0;
    title: string = '';
    completed: boolean;
    deleted: boolean = false;
    constructor(id: number, title: string) {
        this.title = title;
        this.id = id;
        this.completed = false;
    }

}
