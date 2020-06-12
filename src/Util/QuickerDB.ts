import db from "quick.db";

class QuickerDB {
    constructor() {}
    add(a: String, b: Number): Number {
        return db.add(a, b);
    }
    remove(a: String): Boolean {
        return db.delete(a);
    }
    delete(a: String): Boolean {
        return this.remove(a);
    }
    fetch(a: String): any {
        return db.fetch(a);
    }
    get(a: String): any {
        return this.fetch(a);
    }
}

export = QuickerDB;