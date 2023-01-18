export interface CustomEvent {
    id : number;
    type : 'GET' | 'POST' | 'PUT' | 'DELETE';
    message : string;
}
