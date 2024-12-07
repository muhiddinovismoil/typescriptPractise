type Connection = {
    client: string;
    connection: {
        user: string;
        host: string | number;
        port: number;
        database: string;
    };
};
class Database<T, T2> {
    private connection: T[] = [];
    private data: T2 = [];
    connect(boot: T): void {
        console.log(`You are now connected to Database ${boot.client}`);
    }
    create(items: T2): void {
        this.data.push(items);
        console.log(`Data saved to your database`);
    }
    read(): void {
        if (this.data.length == 0) {
            console.error(`Date not found`);
            return [];
        }
        console.log({
            msg: "All Data",
            AllData: this.data,
        });
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
    delete(): void {
        const index = this.data.findIndex((item: any) => item.id === id);
        if (index == -1) {
            console.error(`Data not found or maybe deleted recently`);
            return;
        }
    }
}
class MongoDB extends Database<Connection, T2> {
    constructor() {}
}
class SQLDB extends Database<Connection, T2> {
    constructor() {}
}
let mngdb = new MongoDB<{ name: string; age: number }>();

let sql = new SQLDB<{ name: string; age: number }>();
