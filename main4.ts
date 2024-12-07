interface Connection {
    client: string;
    connection: {
        user: string;
        host: string | number;
        port: number;
        database: string;
    };
}
class Database<T, T2> {
    private connection: T[] = [];
    private data: T2[] = [];
    connect(boot: T): void {
        this.connection.push(boot);
        console.log(`You are now connected to Database`);
    }
    create(items: T2): void {
        this.data.push(items);
        console.log(`Data saved to your database`);
    }
    read(): T2[] {
        if (this.data.length == 0) {
            console.error(`Date not found`);
            return;
        }
        return this.data;
    }
    update(id: number, updatedData: T2): void {
        const index = this.data.findIndex((item: any) => item.id === id);
        if (index == -1) {
            console.error(`Data not found`);
            return;
        }
        this.data[index] = {
            ...this.data[index],
            ...updatedData,
        };
    }
    delete(id: number): void {
        const index = this.data.findIndex((item: any) => item.id === id);
        if (index == -1) {
            console.error(`Data not found or maybe deleted recently`);
            return;
        }
        this.data.splice(index, 1);
        console.log(`Data deleted with id: ${id}`);
    }
    disconnect(): void {
        console.log(`Database disconnected`);
        this.connection.length = 0;
    }
}
class MongoDB<T2> extends Database<Connection, T2> {
    constructor() {
        super();
    }
}
class SQLDB<T2> extends Database<Connection, T2> {
    constructor() {
        super();
    }
}
const mongoConnection: Connection = {
    client: "MongoDB",
    connection: {
        user: "admin",
        host: "localhost",
        port: 27017,
        database: "testDb",
    },
};

// MONGO DB
let mngdb = new MongoDB<{ id?: number; name: string; age: number }>();
mngdb.connect(mongoConnection);
mngdb.create({ id: 1, name: "Ali", age: 25 });
mngdb.create({ id: 2, name: "Vali", age: 30 });
console.log("MongoDB Data:", mngdb.read());
mngdb.update(1, { name: "Alisher", age: 26 });
console.log("Updated MongoDB Data:", mngdb.read());
mngdb.delete(1);
console.log("MongoDB Data after deletion:", mngdb.read());
mngdb.disconnect();
// *********************************************************************
// *********************************************************************
const sqlConnection: Connection = {
    client: "SQLDB",
    connection: {
        user: "root",
        host: "localhost",
        port: 3306,
        database: "exampleDb",
    },
};
let sql = new SQLDB<{ id?: number; name: string; age: number }>();
// SQLDB example
sql.connect(sqlConnection);
sql.create({ id: 1, name: "Hasan", age: 40 });
sql.create({ id: 2, name: "Husan", age: 35 });
console.log("SQLDB Data:", sql.read());
sql.update(2, { name: "Husanbek", age: 36 });
console.log("Updated SQLDB Data:", sql.read());
sql.delete(2);
console.log("SQLDB Data after delete:", sql.read());
