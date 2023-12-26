const db = require("../config/db");

class Users {
    constructor({name, email, password}){
        this.name = name;
        this.email = email;
        this.password = password;
    };

    async addUserToDb(){
        const INSERT_user = `
        INSERT INTO users (name, email, password) 
        VALUES (
            "${this.name}",
            "${this.email}",
            "${this.password}"
        );`;
        const new_user = await db.execute(INSERT_user);
        return new_user;
    };
};

// info should be coming from the log-in system as a {}
const saveToDatabase = async(info) => {
    const user = new Users(info);
    await user.addUserToDb();
};
