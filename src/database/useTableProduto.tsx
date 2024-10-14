import { useSQLiteContext } from "expo-sqlite";

const db = useSQLiteContext()

export function useTableProdutos() {
    async function InserirDadosMocados() {
        const produtos = [
            { nome: 'Produto 1', valor: 10.99, dataCadastro: '2024-01-01', quantidade: 5 },
            { nome: 'Produto 2', valor: 20.00, dataCadastro: '2024-01-02', quantidade: 10 },
            { nome: 'Produto 3', valor: 15.50, dataCadastro: '2024-01-03', quantidade: 7 },
            { nome: 'Produto 4', valor: 12.99, dataCadastro: '2024-01-04', quantidade: 12 },
            { nome: 'Produto 5', valor: 25.75, dataCadastro: '2024-01-05', quantidade: 4 },
            { nome: 'Produto 6', valor: 30.00, dataCadastro: '2024-01-06', quantidade: 8 },
            { nome: 'Produto 7', valor: 50.00, dataCadastro: '2024-01-07', quantidade: 3 },
            { nome: 'Produto 8', valor: 45.99, dataCadastro: '2024-01-08', quantidade: 6 },
            { nome: 'Produto 9', valor: 60.00, dataCadastro: '2024-01-09', quantidade: 9 },
            { nome: 'Produto 10', valor: 70.00, dataCadastro: '2024-01-10', quantidade: 15 }
        ];

        const statement = await db.prepareAsync(
            'INSERT INTO Produtos (nome, valor, dataCadastro, quantidade) VALUES ($nome, $valor, $dataCadastro, $quantidade)'
        );
        try {
            for (let produto of produtos) {
                await statement.executeAsync({
                    $nome: produto.nome,
                    $valor: produto.valor,
                    $dataCadastro: produto.dataCadastro,
                    $quantidade: produto.quantidade
                })
            }
        } finally {
            await statement.finalizeAsync();
        }

        console.log('Produtos inseridos com sucesso');
    }


    async function BuscarDadosMocados() {
        const statement = await db.prepareAsync('SELECT * FROM test WHERE intValue >= $intValue');

        try {
            const result = await statement.executeAsync<{ value: string; intValue: number }>({
                $intValue: 100,
            });

            // `getFirstAsync()` is useful when you want to get a single row from the database.
            const firstRow = await result.getFirstAsync();

            // Reset the SQLite query cursor to the beginning for the next `getAllAsync()` call.
            await result.resetAsync();

            // `getAllAsync()` is useful when you want to get all results as an array of objects.
            const allRows = await result.getAllAsync();
            for (const row of allRows) {
                console.log(row.value, row.intValue);
            }

            // Reset the SQLite query cursor to the beginning for the next `for-await-of` loop.
            await result.resetAsync();

            // The result object is also an async iterable. You can use it in `for-await-of` loop to iterate SQLite query cursor.
            for await (const row of result) {
                console.log(row.value, row.intValue);
            }
        } finally {
            await statement.finalizeAsync();
        }
    }


    return { InserirDadosMocados, BuscarDadosMocados }
}
