export class produtos{
    id:string;
    produto:{
        nome:string;
        tipo:string;   
        preco:number;
        quantidade:number;
        marca:string;
        imagem:Array<string>;
    }[];
}