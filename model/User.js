"use strict";

class User {
    userName;
    password;

    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }

    set setUserName (userName) {
        this.userName = userName;
    }

    get getUserName() {
        return this.userName;
    }

    set setPassword(password) {
        this.password = password;
    }

    get getPassword() {
        return this.password;
    }
}