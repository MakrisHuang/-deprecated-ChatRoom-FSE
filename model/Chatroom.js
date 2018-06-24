"use strict";

class Chatroom {
    users;

    get getUsers() {
        return this.users;
    }

    set setUsers(value) {
        this.users = value;
    }

    constructor() {
        this.users = [];
    }
}