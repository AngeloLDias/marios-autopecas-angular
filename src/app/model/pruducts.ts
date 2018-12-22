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
    id: number;
    name: string;
    stock: number;
    categoria: {
        id: number;
        name: string;
    }
    application: string;
};
