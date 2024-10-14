import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('baseApp.db');


export async function InitializerDatabase(db: SQLite.SQLiteDatabase) {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS Produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nome TEXT,
            valor REAL,
            dataCadastro TEXT,
            quantidade INTEGER
        )`);
}
