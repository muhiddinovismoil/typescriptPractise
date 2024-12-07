class Database {
    connection = [];
    data = [];
    connect(boot) {
        this.connection.push(boot);
        console.log(`You are now connected to Database ${boot.client}`);
    }
    create(items) {
        this.data.push(items);
        console.log(`Data saved to your database`);
    }
    read() {
        if (this.data.length == 0) {
            console.error(`Date not found`);
            return;
        }
        return this.data;
    }
    update(id, updatedData) {
        const index = this.data.findIndex((item) => item.id === id);
        if (index == -1) {
            console.error(`Data not found`);
            return;
        }
        this.data[index] = {
            ...this.data[index],
            ...updatedData,
        };
    }
    delete(id) {
        const index = this.data.findIndex((item) => item.id === id);
        if (index == -1) {
            console.error(`Data not found or maybe deleted recently`);
            return;
        }
        this.data.splice(index, 1);
        console.log(`Data deleted with id: ${id}`);
    }
    disconnect() {
        console.log(`Database disconnected`);
        this.connection.length = 0;
    }
}
class MongoDB extends Database {
    constructor() {
        super();
    }
}
class SQLDB extends Database {
    constructor() {
        super();
    }
}
const mongoConnection = {
    client: "MongoDB",
    connection: {
        user: "admin",
        host: "localhost",
        port: 27017,
        database: "testDb",
    },
};
let mngdb = new MongoDB();
// MONGO DB
mngdb.connect(mongoConnection);
mngdb.create({ id: 1, name: "Ali", age: 25 });
mngdb.create({ id: 2, name: "Vali", age: 30 });
console.log("MongoDB Data:", mngdb.read());
mngdb.update(1, { name: "Alisher", age: 26 });
console.log("Updated MongoDB Data:", mngdb.read());
mngdb.delete(1);
console.log("MongoDB Data after deletion:", mngdb.read());
mngdb.disconnect();
// let sql = new SQLDB<{ id: number; name: string; age: number }>();
// const sqlConnection: Connection = {
//     client: "SQLDB",
//     connection: {
//         user: "root",
//         host: "localhost",
//         port: 3306,
//         database: "exampleDb",
//     },
// };
// // SQLDB example
// sql.connect(sqlConnection);
// sql.create({ id: 1, name: "Hasan", age: 40 });
// sql.create({ id: 2, name: "Husan", age: 35 });
// console.log("SQLDB Data:", sql.read());
// sql.update(2, { name: "Husanbek", age: 36 });
// console.log("Updated SQLDB Data:", sql.read());
// sql.delete(2);
// console.log("SQLDB Data after deletion:", sql.read());
