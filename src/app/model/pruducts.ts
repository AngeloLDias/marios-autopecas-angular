// export class Produto {
//     id: string;
//     nome: string;
//     tipo: string;
//     preco: number;
//     quantidade: number;
//     marca: string;
//     // imagem: Array<string>;


// };

export class Produto {
    key:string
    id: number;
    name: string;
    stock: number;
    application: string;
    categoria: {
        id: number;
        name: string;
    }
};
