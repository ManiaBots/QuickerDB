import db from "quick.db";

export = class QuickerDB {
    constructor() {}
    add(a: String, b: Number): Number {
        return db.add(a, b);
    }
    remove(a: String): Boolean {
        return db.delete(a);
    }
    delete(a: String): any{
        return this.remove(a);
    } 
}