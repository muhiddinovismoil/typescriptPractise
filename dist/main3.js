class CRUD {
    items = [];
    create(item) {
        this.items.push(item);
        console.log({
            msg: "USER CREATED SUCCESSFULLY",
            newUser: item,
        });
    }
    read() {
        if (this.items.length == 0) {
            console.error("Users not found");
            return [];
        }
        console.log({
            msg: "All users",
            users: this.items,
        });
        return this.items;
    }
    update(id, updatedItem) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) {
            console.error(`User not found`);
            return;
        }
        this.items[index] = {
            ...this.items[index],
            ...updatedItem,
        };
        console.log({
            msg: "User Updated",
            updatedUser: this.items[index],
        });
    }
    delete(id) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) {
            console.error(`User not found or maybe deleted before`);
            return;
        }
        const deletedUser = this.items.splice(index, 1);
        console.log({
            msg: "USER DELETED",
            deletedUser: deletedUser,
        });
    }
}
class Users extends CRUD {
    constructor() {
        super();
    }
}
let userData = new Users();
userData.create({
    id: 1,
    first_name: "Alibek",
    email: "ali@gmail.com",
    password: "qwert12345",
});
userData.create({
    id: 2,
    first_name: "ExampleUser",
    email: "example@gmail.com",
    password: "qwert12345",
});
userData.create({
    id: 3,
    first_name: "ExampleUser",
    email: "example@gmail.com",
    password: "qwert12345",
});
userData.read();
userData.update(2, { first_name: "Xursanbek" });
userData.read();
userData.delete(1);
userData.read();
