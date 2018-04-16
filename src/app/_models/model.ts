export class Model{
    id:number;
    name:string;
    type:ModelTypes;  
    algorithm:string;
    dataSource:string;
    accuracy:string;
}
export enum ModelTypes
{
    CLASSIFICATIONS = 'Classifications'
}